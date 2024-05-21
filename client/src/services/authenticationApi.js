export const signupApi = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(data),
  });
  const userData = await response.json();
  return {response,userData};
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

  const jwttoken = userData.jwttoken
  if(jwttoken){
    localStorage.setItem("token",jwttoken)
  }
  return {response,userData};
};
