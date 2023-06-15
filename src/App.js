import "./App.css";
import Routes from "./routes";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools> */}
          <Routes />
          <Toaster position="top-center" />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
      </QueryClientProvider>
    </>
  );
}

export default App;
