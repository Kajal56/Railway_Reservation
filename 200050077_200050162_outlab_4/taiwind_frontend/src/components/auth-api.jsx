async function login(user) {
    // console.log(user);
    const response = await fetch("/auth/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const json = await response.json();
    return json;
  }
  
  async function register(user) {
    console.log(user);
    const response = await fetch("/auth/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const json = await response.json();
    return json;
  }
  
  async function logout() {
    const response = await fetch("/auth/logout", {
      method: "GET",
    });
    const json = await response.json();
    console.log(json);
    return json;
  }
  
  // -----------------------------------------------------------------
  
  async function getRefunds() {
    const response = await fetch("/api/refund", {
      method: "GET",
    });
    const json = await response.json();
    console.log(json);
    return json;
  }
  
  // -----------------------------------------------------------------
  
  async function searchTrain(train) {
    console.log(train , "auth-API")
    const response = await fetch("/api/search-train", {
      method: "POST",
      body: JSON.stringify(train),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const json = await response.json();
    // console.log(json , "AUTH_API");
    return json;
  }
  
  async function searchPnr(pnr) {
    const response = await fetch("/api/pnr-search", {
      method: "POST",
      body: JSON.stringify(pnr),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const json = await response.json();
    console.log(json);
    return json;
  }
  
  // -----------------------------------------------------------------
  
  async function userInfo() {
    const response = await fetch("/api/user-info", {
      method: "GET",
    });
    const json = await response.json();
    // console.log(json);
    return json;
  }
  
  // -----------------------------------------------------------------
  
  async function getBookings() {
    const response = await fetch("/api/mybookings", {
      method: "GET",
    });
    const json = await response.json();
    console.log(json);
    return json;
  }
  
  async function bookTicket(train) {
    const response = await fetch("/api/book-ticket", {
      method: "POST",
      body: JSON.stringify(train),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const json = await response.json();
    console.log(json);
    return json;
  }
  
  async function cancelTicket(pnr) {
    const response = await fetch("/api/cancel-ticket", {
      method: "POST",
      body: JSON.stringify(pnr),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const json = await response.json();
    console.log(json);
    return json;
  }
  
  // -----------------------------------------------------------------
  
  export {
    login,        //emailid, password
    register,     //emailid, password, mobileno, dob
    logout,
    getRefunds,
    searchTrain,  //f_tno ,f_sp, f_dp, f_doj , f_class
    searchPnr,    //pnr
    userInfo,
    getBookings,  
    bookTicket,   //trainno, sp, dp, doj, j_class
    cancelTicket  //pnr
  }