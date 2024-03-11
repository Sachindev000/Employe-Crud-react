import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [design, setDesign] = useState("");
  const [salary, setSalary] = useState("");
  const [email, setEmail] = useState("");

  const notify = () => {
    toast("Submitted Successfull!");
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://65d7f9a527d9a3bc1d7bf656.mockapi.io/EmployeeMsystem", {
        e_name: name,

        e_age: age,
        e_design: design,
        e_salary: salary,
        e_email: email,
      })
      .then(() => {
        navigate("/");
      });
  };

  return (
    <>
    <div className="container d-flex justify-content-center  mt-5">

      <div className="row-add border border-primary">
        <div className=" col-sm-12 col-md-12 col-lg-12">
          <div className="text-center p-2 m-2">
            <h1 className="heading">Add New Employee</h1>
          </div>
          <form onSubmit={handleSubmit} className="">
            <div className="form-group p-2 m-2">
              <label htmlFor="" className="p-2 fs-3 fw-bold text-white">
               
              </label>
              <input
                type="text"
                placeholder="Enter FullName"
                className="form-control "
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group p-2 m-2 ">
              <label htmlFor="" className="p-2 fs-3 fw-bold text-white">
               
              </label>
              <input
                type="text"
                placeholder="Enter Age"
                className="form-control"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="form-group p-2 m-2">
              <label htmlFor="" className="p-2 fs-3 fw-bold text-white">
               
              </label>
              <input
                type="text"
                placeholder="Enter Designation"
                className="form-control"
                onChange={(e) => setDesign(e.target.value)}
              />
            </div>
            <div className="form-group p-2 m-2">
              <label htmlFor="" className="p-2 fs-3 fw-bold text-white">
               
              </label>
              <input
                type="text"
                placeholder="Enter Salary"
                className="form-control"
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>
            <div className="form-group p-2 m-2">
              <label htmlFor="" className="p-2 fs-3 fw-bold text-white">
              
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="d-grid p-2 m-2">
              <input
                onClick={notify}
                type="submit"
                value="Submit"
                className="button-Add"
              />
              <ToastContainer
                position="top-center"
                autoClose={7000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Bounce
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Add;