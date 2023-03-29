/* eslint-disable prettier/prettier */
import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/navbar/Navbar";
import RouterConfig from "./routes/RouterConfig";


function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Navbar />

        <RouterConfig />

        <Contact />
        <Footer />
      </QueryClientProvider>
    </>

  );
}

export default App;
