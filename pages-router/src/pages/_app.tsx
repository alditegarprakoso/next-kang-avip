import Navbar from "@/components/layouts/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

const disableNavbar = ["/auth/login", "/auth/register"];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      {!disableNavbar.includes(router.pathname) && <Navbar />}
      <Component {...pageProps} />
    </>
  );
}
