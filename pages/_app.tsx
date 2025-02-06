import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <Navbar />
      <Toaster position="top-right" />
      <Component {...pageProps} />
    </>
  );
}
