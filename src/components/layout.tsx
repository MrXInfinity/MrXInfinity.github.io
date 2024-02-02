import React from "react";
import Navbar from "./navbar";
import { Footer } from "./footer";

export const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
