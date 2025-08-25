
const USERS_KEY = "users_db";

function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
}


function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}


export function signup(email, password) {
  const users = getUsers();

  
  if (users.find((u) => u.email === email)) {
    throw new Error("Email already registered");
  }

  users.push({ email, password });
  saveUsers(users);

  return { success: true, message: "Signup successful" };
}


export function login(email, password) {
  const users = getUsers();
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return { success: false, message: "Invalid email or password" };
  }

  return { success: true, message: "Login successful" };
}
