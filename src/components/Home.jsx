import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [apiData, setApiData] = useState([]);

  const getData = () => {
    axios
      .get("https://65d7f9a527d9a3bc1d7bf656.mockapi.io/EmployeeMsystem")
      .then((response) => {
        setApiData(response.data);
      });
  };

  function handleDelete(id) {
    axios
      .delete(
        `https://65d7f9a527d9a3bc1d7bf656.mockapi.io/EmployeeMsystem/${id}`
      )
      .then(() => {
        getData();
      });
  }
  function setDatatoStorage(id,name,age,design,salary,email){

    localStorage.setItem('id',id)
    localStorage.setItem('name',name)
    localStorage.setItem('age',age)
    localStorage.setItem('design',design)
    localStorage.setItem('salary',salary)
    localStorage.setItem('email',email)

  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="row p-2  ">
        <div className="col-md-12 ">
          <div className="p-3 m-3 text-center">
            <h1 className="heading">Employees Managment System</h1>
            <Link to={"/Add"}>
              <button className="button-Add">Add Employee</button>
            </Link>
          </div>
          <table className="table table-bordered  table-striped  table-hover ">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Designation</th>
                <th>Salary</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {apiData.map((Item, index) => {
                return (
                  <tr key={index}>
                    <td>{Item.id}</td>
                    <td>{Item.e_name}</td>
                    <td>{Item.e_age}</td>
                    <td>{Item.e_design}</td>
                    <td>{Item.e_salary}</td>
                    <td>{Item.e_email}</td>
                    <td>
                      <Link to={"/Edit"}>
                        <button
                          className="button-edit m-2"
                          onClick={() => {
                            setDatatoStorage(
                              Item.id,
                              Item.e_name,
                              Item.e_age,
                              Item.e_design,
                              Item.e_salary,
                              Item.e_email
                            );
                          }}
                        >
                          Edit
                        </button>
                      </Link>
                      <button
                        className="button-delete"
                        onClick={() => {
                          if (window.confirm("Are You Sure?")) {
                            handleDelete(Item.id);
                          }
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;