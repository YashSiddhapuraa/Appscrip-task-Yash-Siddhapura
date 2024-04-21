import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import React from "react";

export const metadata = {
  title: "Shop",
  description: "E-commerce Yash Siddhapura Website",
};

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
