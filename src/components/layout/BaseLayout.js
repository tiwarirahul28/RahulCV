import React from "react";
import Navbar from "@/components/layout/Navbar/Index";
import Footer from "@/components/layout/Footer/Index";

const BaseLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default BaseLayout;
