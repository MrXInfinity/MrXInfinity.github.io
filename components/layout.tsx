import React from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import bgImage from "../public/bgImage.jpg";

export const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Navbar />
      <main
        className=""
        style={{
          backgroundImage: `radial-gradient(rgba(38, 38, 38, 0.4) 5%, transparent 20%)`,
          backgroundPosition: "0% 0%",
          backgroundAttachment: "fixed",
          backgroundSize: "20vmin 20vmin",
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};
