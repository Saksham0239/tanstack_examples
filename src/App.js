import FetchObjectByIdTanStack from "./components/FetchObjectByIdTanStack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <FetchObjectByIdTanStack />
    </QueryClientProvider>
  );
}

export default App;
