/* eslint-disable prettier/prettier */
import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import RouterConfig from "./routes/RouterConfig";


function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
       <RouterConfig />
      </QueryClientProvider>
    </>

  );
}

export default App;
