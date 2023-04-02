/* eslint-disable prettier/prettier */
import React, { useEffect } from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import RouterConfig from "./routes/RouterConfig";

function App() {
  const queryClient = new QueryClient();
  const googleTranslateElementInit = () => {
    if (window.google.translate !== null) {
      // eslint-disable-next-line no-new
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,fr",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    }
  };

  useEffect(() => {
    const addScript = document.createElement("script");
    addScript?.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
       <RouterConfig />
      </QueryClientProvider>
    </>
  );
}

export default App;
