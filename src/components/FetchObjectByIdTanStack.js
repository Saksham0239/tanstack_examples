import {  useQuery } from "@tanstack/react-query";
import useNetworkCalls from "../hooks/useNetworkCalls";
import { useState } from "react";

const FetchObjectByIdTanStack = ()=>{
    
    const {fetchData} = useNetworkCalls();

    const [isEnabled,setIsEnabled] = useState(false);

        const {data,isError,isPending,refetch,error,fetchStatus} = useQuery({
            queryKey:['objects',{id:'2'}], //sending id here , we can send any data from here
            queryFn:fetchData,
            enabled:isEnabled, //when enabled is true it will call the api
        });

        console.log('data' ,data );
        console.log('isPending ',isPending);
        console.log('isError ',isError);


    const handleClick = ()=>{
        setIsEnabled(true);
        refetch();
    }
   return (
    <div>
        <button onClick={handleClick}>get data</button>
        {
            isError && error?.message
        }
        {
            data && data.map((obj)=>{
                return <h2 key={obj?.id}>{obj?.name}</h2>;
            })
        }
        {
            fetchStatus === 'idle' && <h2>Click on the button above to fetch data</h2>
        }
        {
            fetchStatus === 'fetching' && <h2>Fetching data</h2>
        }
    </div>
   )
}

export default FetchObjectByIdTanStack;