export const signup = user => (
  fetch("auth/register", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  })
);

export const login = user => (
  fetch("auth/login", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  })
);

export const logout = () => (
  fetch("auth/logout", { method: "DELETE" })
);