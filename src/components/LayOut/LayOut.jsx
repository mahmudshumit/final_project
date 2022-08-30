import React from "react";
import Router from "../../routes/Router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Router/>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;