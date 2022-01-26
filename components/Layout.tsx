import React, { FC } from "react";

const Layout: FC = ({ children }) => {
  return <div className="container m-8 mx-auto">{children}</div>;
};

export default Layout;
