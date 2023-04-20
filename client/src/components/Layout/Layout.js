import React, { Fragment } from "react";
import Mainnavigation from "./Mainnavigation";

const Layout = (props) => {
  return (
    <Fragment>
      <header>
        <Mainnavigation />
      </header>
      <main style={{ marginTop: "13.5rem" }}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
