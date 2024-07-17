import { useSuspenseQuery } from "@tanstack/react-query";
import useNetworkCalls from "../hooks/useNetworkCalls";

const FetchParallelQueries = () => {
  const { fetchData, fetchDataUsers } = useNetworkCalls();
  //Uses react suspense behind the scenes
  const {
    data: objectsData,
    error: objectError,
    isPending: isObjectPending,
  } = useSuspenseQuery({ queryKey: ["someObjects"], queryFn: fetchData });
  const {
    data: userData,
    error: userError,
    isPending: isUserPending,
  } = useSuspenseQuery({ queryKey: ["users"], queryFn: fetchDataUsers });

  console.log("objectsData ", objectsData);
  console.log("objectError ", objectError);
  console.log("isObjectPending ", isObjectPending);

  console.log("userData ", userData);
  console.log("userError ", userError);
  console.log("isUserPending ", isUserPending);

  return <div>Hello</div>;
};

export default FetchParallelQueries;
