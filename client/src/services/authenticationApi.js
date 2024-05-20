import { setToken } from "../utils/authToken";

export const signupApi = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(data),
  });
  const userData = await response.json();

  return userData;
};
export const loginApi = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(data),
  });
  const userData = await response.json();
  
  setToken(userData.token);
  return userData;
};
