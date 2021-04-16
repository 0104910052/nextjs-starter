import { configureStore } from "@reduxjs/toolkit";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { Provider } from "react-redux";
import "tailwindcss/tailwind.css";
import rootReducer from "../store/root";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const store = configureStore({
    reducer: rootReducer,
  });

  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
