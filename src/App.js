import React, { Fragment } from "react";
import "./App.css";
import Body from "./Table/Body";
import Header from "./Ui/Header";
import Footer from "./Ui/Footer";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Body />
      <Footer />
    </Fragment>
  );
};

export default App;
