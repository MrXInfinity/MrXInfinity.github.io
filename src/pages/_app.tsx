import { Layout } from "@/src/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, League_Spartan } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={[inter.variable, leagueSpartan.variable].join(" ")}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
