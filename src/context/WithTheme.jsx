/* eslint-disable no-unused-vars */
import React from "react";
import { ThemeContext } from "./ContentProvider";
export const withTheme = (Component) => (props) => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => <Component {...props} theme={theme} />}
    </ThemeContext.Consumer>
  );
};