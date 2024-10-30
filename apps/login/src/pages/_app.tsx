import { AuthProvider } from "@/provinder/authProvinder";
import { ReactQueryProvider } from "@/provinder/react-query";
import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider>
      <AuthProvider>
        <Component {...pageProps} />;
      </AuthProvider>
    </ReactQueryProvider>
  );
}
