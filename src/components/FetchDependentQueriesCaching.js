import { useQuery } from "@tanstack/react-query";
import useNetworkCalls from "../hooks/useNetworkCalls";

const FetchDependentQueriesCaching = () => {
  const { fetchData, fetchDataUsers } = useNetworkCalls();

  const {
    data: objectData,
    fetchStatus: objectFetchStatus,
    isFetching,
  } = useQuery({
    queryKey: ["objects"],
    queryFn: fetchData,
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });
  const { data: userData } = useQuery({
    queryKey: ["users"],
    queryFn: fetchDataUsers,
    enabled: Boolean(objectData),
  });

  console.log("objectData ", objectData);
  console.log("objectFetchStatus ", objectFetchStatus);
  console.log("isFetching ", isFetching);
  console.log("usersData ", userData);

  return <div>Hello</div>;
};

export default FetchDependentQueriesCaching;
