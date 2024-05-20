import { getToken } from "../utils/authToken";

export const getApi = async (url) => {
  const token = getToken()
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
      'Authorization': `Bearer ${token}`,
    },
  });
  const apiData = await response.json();
  console.log(apiData,token)

  return {response,apiData};
};

export const postApi = async (url,data) => {
  const token = getToken()
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  const apiData = await response.json();
  console.log(apiData,token)
  
  return {response,apiData};
};
