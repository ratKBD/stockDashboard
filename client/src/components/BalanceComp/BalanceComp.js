import React from "react";
import "./balanceComp.css";

const BalanceComp = ({ tableData, selectedAcc }) => {
  const viewData = tableData
    ?.filter((data) => data.name === selectedAcc)
    .map((get) => get.data);
  const totalBalance = viewData
    .flat()
    .reduce((acc, transaction) => acc + transaction["a/cBalance"], 0);
  console.log("bal", totalBalance);

  return (
    <div className="box">
      <div className="leftBal">
        <img className="balImg" src="./Vector.png" alt="balacnce"></img>
      </div>
      <div>
        <div style={{ fontWeight: "bold" }}>{"Available Balance"}</div>
        <div style={{ color: "#219653" }}>{totalBalance}</div>
      </div>
    </div>
  );
};

export default BalanceComp;
