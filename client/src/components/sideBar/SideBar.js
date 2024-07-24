import React, { useState } from "react";
import "./sideBar.css";
import Load from "../page/Load/Load";

const SideBar = () => {
  const [selectedComponent, setSelectedComponent] = useState(<Load />);
  const sideBarItems = ["Loads", "Statements", "Transactions"];
  const [selectedNav, setSelectedNav] = useState("Loads");

  const toggleSideBar = {
    Loads: <Load />,
    Statements: <Statements />,
    Transactions: <Transactions />,
  };

  const onSelectedHandler = (item) => {
    const selectedComponentResult = toggleSideBar[item];
    setSelectedComponent(selectedComponentResult);
    setSelectedNav(item);
  };

  return (
    <div className="container">
      <div className="leftPanel">
        <div className="logo">
          <img src="./companyLogo.png" alt="companyLogo" />
          <h2>{"EazyPayout"}</h2>
        </div>
        {sideBarItems?.map((item, index) => {
          return (
            <div
              className={`leftPanelItem ${
                selectedNav === item ? "selected" : "not-selected"
              }`}
              onClick={() => onSelectedHandler(item)}
            >
              <p key={index}>
                <span style={{ paddingRight: "4px" }}>
                  {item === "Loads" ? (
                    <img alt="icons" src="./box-arrow.png" />
                  ) : item === "Statements" ? (
                    <img alt="icons" src="./journal-frame.png" />
                  ) : item === "Transactions" ? (
                    <img alt="icons" src="./arrow-down-up.png" />
                  ) : (
                    ""
                  )}
                </span>
                {item}
              </p>
            </div>
          );
        })}
      </div>

      <div className="rightPanel">{selectedComponent}</div>
    </div>
  );
};

export default SideBar;

function Statements() {
  return <h1>Statements</h1>;
}

function Transactions() {
  return <h1>Transactions</h1>;
}
