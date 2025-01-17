import React, { useEffect, useState } from "react";
import { GetDataQ3 } from "./GetDataQ3";

const Q2 = () => {
  const [q3, setq3] = useState([]);

  useEffect(() => {
    const getDataQ3 = async () => {
      let data = await GetDataQ3();
      if (Array.isArray(data)) {
        setq3(data);
      } else {
        console.error("Invalid response from GetDataQ4");
      }
    };
    getDataQ3();
  }, []);

  return (
    <>
      <h1 className="text-center mb-5" style={{ color: "crimson" }}>
        API-3
      </h1>
      <div className="container">
        <div className="row justify-content-center">
          <table
            className="table table-striped table-bordered"
            style={{ width: "80%" }}
          >
            <thead style={{ backgroundColor: "#007bff", color: "#ffffff" }}>
              <tr>
                <th>Sponsor Id</th>
                <th>Industry Type</th>
                <th>Last Pay</th>
                <th>Number of pay</th>
              </tr>
            </thead>
            <tbody>
              {q3.map((p) => (
                <tr key={p.sponsorID}>
                  <td>{p.sponsorID}</td>
                  <td>{p.sponsorName}</td>
                  <td>{p.latestPaymentDate}</td>
                  <td>{p.numberOfPayments}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Q2;
