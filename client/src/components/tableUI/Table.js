import React from "react";
import "./table.css";

const Table = ({ tableData, selectedAcc }) => {
  const viewData = tableData
    ?.filter((data) => data.name === selectedAcc)
    .map((get) => get.data);

  console.log("view-->", viewData);
  return (
    <div>
      <table>
        <tr>
          <th>Date</th>
          <th>Credit</th>
          <th>A/c Balance</th>
          <th>UTR/RRN</th>
          <th>A/c No/UPI</th>
        </tr>

        {viewData?.flat(Infinity)?.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data?.date}</td>
              <td>{data?.credit}</td>
              <td>{data && data["a/cBalance"] ? data["a/cBalance"] : ""}</td>
              <td>{data && data["utr/rrn"] ? data["utr/rrn"] : ""}</td>
              <td>{data && data["A/cNo/upi"] ? data["A/cNo/upi"] : ""}</td>
            </tr>
          );
        })}
      </table>
      {viewData?.length === 0 && (
        <div className="noData">
          {"Please select the Company Name and Account Name"}
        </div>
      )}
    </div>
  );
};

export default Table;
