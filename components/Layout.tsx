import React, { FC } from "react";

const Layout: FC = ({ children }) => {
  return <div className="container mx-auto mt-8">{children}</div>;
};

export default Layout;
