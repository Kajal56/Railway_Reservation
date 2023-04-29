-------Table for refunds, can be added later to the other file, containing the tables ---------------------
CREATE table if not exists refund_history(
    -- id int, needed ??? for authorization
    pnr int,
    rfare int,
    rdate date ,-- needed ? maybe for sorting 
    PRIMARY KEY (pnr)
);


---------------------------------------------Functions----------------------------------------------------------------------------------


-- 1) Function : insert into reservation : 
CREATE or REPLACE FUNCTION insert_reservation (
    in_id int,
    in_trainno int,
    in_sp varchar(50),
    in_dp varchar(50),
    in_doj date,
    -- in_tfare int,
    in_class varchar(50),
    in_nos int
) RETURNS void AS $$
DECLARE
    available_seats int;
    one_fare int;
BEGIN
    SELECT seatsleft,fare INTO available_seats, one_fare 
    FROM classseats 
    WHERE trainno = in_trainno AND sp = in_sp AND dp = in_dp AND class = in_class;

    IF available_seats > 0 THEN
        INSERT INTO resv (id,trainno, sp, dp, doj, tfare, class, nos, status) 
        VALUES (in_id, in_trainno, in_sp, in_dp, in_doj, in_nos*one_fare, in_class, in_nos, 'BOOKED');
    ELSE
        INSERT INTO resv (id ,trainno, sp, dp, doj, tfare, class, nos, status) 
        VALUES (in_id ,in_trainno, in_sp, in_dp, in_doj, in_nos*one_fare, in_class, in_nos, 'WAITING');
    END IF;
    UPDATE classseats 
    set seatsleft = seatsleft - 1
    WHERE trainno = in_trainno AND sp = in_sp AND dp = in_dp AND class = in_class;

END;
$$ LANGUAGE plpgsql;

-- call function like 
--SELECT insert_reservation(1, 12345, 'Station A', 'Station B', '2023-05-01', 100, 'First Class', 2);
--updation in seatsleft in classseats will be managed by trigger ---------------------------------------------------------




-- Function 2 : 

--insert_into_canc()-------------------Does following things : 
-- 1) if(WAITING) => just change status to CANCEL and add in refund 
-- 2) If (BOOKED) => see if theres anyone waiting in same thing......if so, change it's status to BOOKED and finish
--                       else change number of seats in classsats                       

-- Run as : select insert_into_canc(int,int);

------------------------------------------------
CREATE or replace FUNCTION insert_into_canc(in_pnr int, in_rfare int)
RETURNS VOID AS $$
DECLARE
    var_status varchar(50);
    var_avseats int;
    var_waiting int ;
    var_trainno int;
    var_sp varchar(50);
    var_dp varchar(50);
    var_doj date;
    var_class varchar(10);
    var_fare int;


BEGIN
    INSERT into canc values (in_pnr , in_rfare) ;
    SELECT  trainno ,sp ,dp ,doj ,class, tfare, status INTO  var_trainno ,var_sp ,var_dp ,var_doj ,var_class ,var_fare,var_status 
    -- SELECT  trainno  ,dp ,doj ,class, tfare, status INTO  var_trainno  ,var_dp ,var_doj ,var_class ,var_fare,var_status 
    -- SELECT status INTO  var_status 

    FROM resv  
    WHERE in_pnr = pnr ;
    RAISE NOTICE 'Check 1';
    update resv
       set status='CANCELLED'
    where in_pnr = pnr ;
    IF var_status = 'WAITING' THEN
        RAISE NOTICE 'Check 2';
    ELSE
        -- select seatsleft
        -- into var_avseats
        -- from canc, resv, classseats
        -- where canc.pnr = resv.pnr 
        -- and classseats.trainno = resv.trainno
        -- and classseats.sp = resv.sp
        -- and classseats.dp = resv.dp
        -- and classseats.class = resv.class ;
        RAISE NOTICE 'Check 3';


        select count(*)
        into var_waiting
        from resv
        where status = 'WAITING';
        if var_waiting > 0 
        THEN
            UPDATE resv
            SET status = 'BOOKED'
            WHERE pnr = (
                SELECT pnr 
                FROM resv 
                where status = 'WAITING' 
                and trainno = var_trainno
                and sp = var_sp
                and dp = var_dp
                and doj = var_doj
                and class = var_class
                order by doj
                limit 1
            );
        else
            UPDATE classseats
            SET seatsleft = seatsleft +1 
            WHERE trainno = var_trainno
            AND sp = var_sp
            AND dp = var_dp
            AND doj = var_doj
            AND class = var_class;

        end if;

    END IF;
    insert into refund_history 
    values (in_pnr , var_fare , CURRENT_DATE);

END;
$$ LANGUAGE plpgsql;


-------------------------------------------------------------
-- Function 3 

CREATE OR REPLACE FUNCTION filter_trains(filter_trainno int, filter_sp varchar(50), filter_dp varchar(50), filter_doj date, filter_class varchar(10))
RETURNS TABLE (
    trainno int,
    tname varchar(50),
    sp varchar(50),
    st time,
    dp varchar(50),
    dt time,
    dd varchar(10),
    distance int,
    classseats_trainno int,
    classseats_sp varchar(50),
    classseats_dp varchar(50),
    doj date,
    class varchar(10),
    fare int,
    seatsleft int
) AS $$
BEGIN
    RETURN QUERY SELECT 
        t.trainno,
        t.tname,
        t.sp,
        t.st,
        t.dp,
        t.dt,
        t.dd,
        t.distance,
        c.trainno AS classseats_trainno,
        c.sp AS classseats_sp,
        c.dp AS classseats_dp,
        c.doj,
        c.class,
        c.fare,
        c.seatsleft
    FROM train as t
    JOIN classseats as c ON t.trainno = c.trainno
    WHERE (filter_trainno IS NULL OR c.trainno = filter_trainno)
    AND (filter_sp IS NULL OR c.sp = filter_sp)
    AND (filter_dp IS NULL OR c.dp = filter_dp)
    AND (filter_doj IS NULL OR c.doj = filter_doj)
    AND (filter_class IS NULL OR c.class = filter_class);
    -- AND (c.doj > CURRENT_DATE);

END;
$$ LANGUAGE plpgsql;


---------------------

-- Instruction to run : 
-- SELECT * FROM filter_trains(12, 'Chandigarh', 'Jaipur', '2015-05-17', NULL);


----------------------------------------------------------------Triggers-------------------------------------------------
drop trigger if exists decrement_seatsleft on resv;
CREATE OR REPLACE FUNCTION update_seatsleft()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE classseats
  SET seatsleft = seatsleft - NEW.nos
  WHERE trainno = NEW.trainno
  AND sp = NEW.sp
  AND dp = NEW.dp
  AND doj = NEW.doj
  AND class = NEW.class;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER decrement_seatsleft
AFTER INSERT ON resv
FOR EACH ROW
EXECUTE FUNCTION update_seatsleft();

--Trigger for decrementing seatsleft as soon as some entry is added to resv -----------------
----------------------------------------------------------------------------------------------





