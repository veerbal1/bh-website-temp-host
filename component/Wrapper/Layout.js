import React from "react";
import Footer from "../Footer";
import DocumentHead from "../Head";
import Header from "../Header";

function Layout({ title, children }) {
  return (
    <>
      <DocumentHead title={title} />
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
