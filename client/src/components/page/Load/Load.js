import axios from "axios";
import React, { useEffect, useState } from "react";
import "./load.css";
import Table from "../../tableUI/Table";
import BalanceComp from "../../BalanceComp/BalanceComp";

const Load = () => {
  const [compData, setCompData] = useState([]);
  const [selectedComp, setSelectedComp] = useState("");
  const [selectedAcc, setSelectedAcc] = useState("");
  const [accountName, setAccountName] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [compName, setCompName] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/Company1s");
        setCompData(response.data.data);
        const companies = response.data.data.flatMap((data) =>
          data.attributes.companies.map((company) => company.companyName)
        );
        setCompName(companies);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedComp) {
      getAccountName();
    } else {
      setAccountName([]);
    }
    setSelectedAcc("");
  }, [selectedComp]);

  useEffect(() => {
    if (selectedAcc) {
      getTableData();
    } else {
      setTableData([]);
    }
  }, [selectedAcc]);

  const getTableData = () => {
    const company = compData
      .flatMap((data) => data.attributes.companies)
      .find((comp) => comp.companyName === selectedComp);

    if (company) {
      setTableData(company.accounts);
    }
  };

  const getAccountName = () => {
    const company = compData
      .flatMap((data) => data.attributes.companies)
      .find((comp) => comp.companyName === selectedComp);

    if (company) {
      setAccountName(company.accounts.map((acc) => acc.name));
    }
  };

  const onCompanyChangeHandler = (e) => {
    setSelectedComp(e.target.value);
  };

  const onAccountChangeHandler = (e) => {
    setSelectedAcc(e.target.value);
  };
  console.log("tab-->", tableData);
  return (
    <>
      <div className="header">
        <select
          name="companies"
          id="comp"
          className="borderBox"
          onChange={onCompanyChangeHandler}
        >
          <option value="">Company Name</option>
          {compName.map((data, index) => (
            <option key={index} value={data}>
              {data}
            </option>
          ))}
        </select>
        <select
          name="account"
          id="account"
          className="borderBox"
          onChange={onAccountChangeHandler}
          value={selectedAcc}
        >
          <option value="">Account Name</option>
          {accountName.map((data, index) => (
            <option key={index} value={data}>
              {data}
            </option>
          ))}
        </select>
      </div>
      <div className="gap">
        <BalanceComp tableData={tableData} selectedAcc={selectedAcc} />
      </div>
      <div style={{ marginBottom: "20px" }}>
        Latest Loads are displayed here
      </div>
      <div>
        <Table tableData={tableData} selectedAcc={selectedAcc} />
      </div>
    </>
  );
};

export default Load;
