import React from "react";
import TopMenu from "./TopMenu";
import { Footer } from "./Footer";

const BasePage = ({ children }) => (
  <>
    <TopMenu />
    {children}
    <Footer />
  </>
);

export default BasePage;
