import * as React from "react";

const styles = require("./layout.css");

export const Layout: React.SFC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
      {children}
    </div>
  );
};
