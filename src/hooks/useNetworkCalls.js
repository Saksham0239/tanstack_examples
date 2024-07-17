const useNetworkCalls = () => {
  const fetchData = async (data) => {
    let url = `https://api.restful-api.dev/objects`;
    console.log(data);
    if (data?.queryKey[1]?.id) {
      url += `?id=${data?.queryKey[1]?.id}`;
    }
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    if (!response.ok) {
      throw new Error(`Http error! Status ${response.status}`);
    }
    return response.json();
  };

  const fetchDataUsers = async (data) => {
    let url = `https://jsonplaceholder.typicode.com/users`;
    console.log(data);
    if (data?.queryKey[1]?.id) {
      url += `?id=${data?.queryKey[1]?.id}`;
    }
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    if (!response.ok) {
      throw new Error(`Http error! Status ${response.status}`);
    }
    return response.json();
  };

  return {
    fetchData,
    fetchDataUsers,
  };
};

export default useNetworkCalls;
