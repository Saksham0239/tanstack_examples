import { useQuery } from "@tanstack/react-query";
import useNetworkCalls from "../hooks/useNetworkCalls";

const NormalFetchTanStackQuery = () => {
  const { fetchData } = useNetworkCalls();

  const { isPending, isError, data, error, status, fetchStatus } = useQuery({
    queryKey: ["objects"],
    queryFn: fetchData,
  });

  console.log("status ", status);
  console.log("fetchStatus ", fetchStatus);
  console.log("error ", error);
  return (
    <div>
      <h2>{status}</h2>
      <h2>{fetchStatus}</h2>
      {isPending && <h2>pending</h2>}
      {isError && (
        <h2>
          Error! {error?.name} {error?.message}
        </h2>
      )}
      {data &&
        data.map((obj) => {
          return <h2 key={obj?.id}>{obj?.name}</h2>;
        })}
    </div>
  );
};

export default NormalFetchTanStackQuery;
