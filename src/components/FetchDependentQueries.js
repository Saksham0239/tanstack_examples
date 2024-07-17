import { useQuery } from "@tanstack/react-query";
import useNetworkCalls from "../hooks/useNetworkCalls";

//Here objects data will cause user api to fire
//but once re-rendering happens again objects api as called which is not what we want
//we can put a staleTime and cacheTime to stop the api from calling itself again for sometime
//better version written in FetchDependentQueries caching
const FetchDependentQueries = () => {
  const { fetchData, fetchDataUsers } = useNetworkCalls();

  const {
    data: objectData,
    fetchStatus: objectFetchStatus,
    isFetching,
  } = useQuery({
    queryKey: ["objects"],
    queryFn: fetchData,
  });
  const { data: userData } = useQuery({
    queryKey: ["users"],
    queryFn: fetchDataUsers,
    enabled: Boolean(objectData),
  });

  console.log("objectData ", objectData);
  console.log("fetchStatus ", objectFetchStatus);
  console.log("isFetching ", isFetching);
  console.log("usersData ", userData);

  return <div>Hello</div>;
};

export default FetchDependentQueries;
