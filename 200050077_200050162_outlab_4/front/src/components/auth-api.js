async function login(user) {
  console.log(user);
  const response = await fetch("/auth/login", {
    method: "POST",
    body: JSON.stringify(user)
  });
  const json = await response.json();
  return json;
}

async function register(user) {
  console.log(user);
  const response = await fetch("/auth/register", {
    method: "POST",
    body: JSON.stringify(user)
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

async function refund() {
  const response = await fetch("/api/refund", {
    method: "GET",
  });
  const json = await response.json();
  console.log(json);
  return json;
}

// -----------------------------------------------------------------

async function searchTrain(train) {
  const response = await fetch("/api/search-train", {
    method: "POST",
    body: JSON.stringify(train)
  });
  const json = await response.json();
  console.log(json);
  return json;
}

async function searchPnr(pnr) {
  const response = await fetch("/api/pnr-search", {
    method: "POST",
    body: JSON.stringify(pnr)
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
  console.log(json);
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

async function bookTicket() {
  const response = await fetch("/api/book-ticket", {
    method: "POST",
  });
  const json = await response.json();
  console.log(json);
  return json;
}

async function cancelTicket() {
  const response = await fetch("/api/cancel-ticket", {
    method: "POST",
  });
  const json = await response.json();
  console.log(json);
  return json;
}

// -----------------------------------------------------------------

export {
  login,
  register,
  logout,
  refund,
  searchTrain,
  searchPnr,
  userInfo,
  getBookings,
  bookTicket,
  cancelTicket
}