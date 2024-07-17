import { useEffect, useState } from "react";

const NormalFetch = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.restful-api.dev/objects`, {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      if (!response.ok) {
        throw new Error(`Http error!, status ${response.status}`);
      }
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {error && !data && <div>{error?.message}</div>}

      {!loading &&
        data &&
        data.map((obj) => {
          return <h3 key={obj.id}>{obj?.name}</h3>;
        })}
      {loading && <h3>data is loading</h3>}
    </div>
  );
};

export default NormalFetch;
