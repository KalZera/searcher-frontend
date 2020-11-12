import React from "react";

export const Header = () => {
  const styleHeader = {
    width: "100%",
    height: "60px",
    backgroundColor: "blue",
    display: "flex",
  };
  const styleLogo = {
    display: "flex",
    alignItems: "center",
    color: "white",
    fontSize: 18,
    fontWeight: 700,
    paddingLeft: 20,
    fontFamily: "arial",
  };
  return (
    <div style={styleHeader}>
      <div style={styleLogo}>Searcher</div>
    </div>
  );
};
