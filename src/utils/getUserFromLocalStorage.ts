export function getUserFromLocalStorage() {
  const userJSON = localStorage.getItem("login-user");
  return JSON.parse(userJSON ?? "{}");
}
