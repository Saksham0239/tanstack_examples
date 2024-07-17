import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FetchDependentQueriesCaching from "./components/FetchDependentQueriesCaching";
import FetchDependentQueries from "./components/FetchDependentQueries";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FetchDependentQueriesCaching />
    </QueryClientProvider>
  );
}

export default App;
