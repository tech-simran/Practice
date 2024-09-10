import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

const Company = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const api = await fetch("http://localhost:8000/viewuser", {
      method: "GET",
    });
    const res = await api.json();
    console.log(res);
    setData(res);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Department Name</th>
            <th>Salary</th>
            <th>Experience</th>
            <th>Action</th>
            <th>Edit Responce</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => {
            return (
              <>
                <tr>
                  <td>{value.id}</td>
                  <td>{value.name}</td>
                  <td>{value.dept}</td>
                  <td>{value.salart}</td>
                  <td>{value.experience}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Company;
