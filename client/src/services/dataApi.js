export const getApi = async (url, token) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
      'Authorization': `Bearer ${token}`,
    },
  });
  const apiData = await response.json();
  console.log(apiData)

  return apiData;
};

export const postApi = async (url, token, data) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  const apiData = await response.json();
  console.log(apiData)

  return apiData;
};
