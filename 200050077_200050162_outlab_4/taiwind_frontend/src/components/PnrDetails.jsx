import { useParams } from "react-router-dom";

export default function PnrDetails(){
    const params = useParams();
    const pnr = params.in_pnr ;
    return (
        <div>
            details about pnr : {pnr}
        </div>
    )
}