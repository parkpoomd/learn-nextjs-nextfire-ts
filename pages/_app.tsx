import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main className={`${inter.className} max-w-6xl mx-auto`}>
        <Component {...pageProps} />
      </main>
      <Toaster />
    </>
  );
}
