import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [design, setDesign] = useState("");
  const [salary, setSalary] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setDesign(localStorage.getItem("design"));
    setSalary(localStorage.getItem("salary"));
    setEmail(localStorage.getItem("email"));
  }, []);
  const navigate = useNavigate();

  function handleUpdate(e) {
    e.preventDefault();

    axios
      .put(
        `https://65d7f9a527d9a3bc1d7bf656.mockapi.io/EmployeeMsystem/${id}`,
        {
          e_name: name,
          e_age: age,
          e_design: design,
          e_salary: salary,
          e_email: email,
        }
      )
      .then(() => {
        navigate("/");
      });
  }

  const notify = () => {
    toast("Updated Successfull!");
  };

  return (
    <>
      <div className="container d-flex justify-content-center  mt-5">
        <div className="row-edit border border-primary">
          <div className=" col-sm-12 col-md-12 col-lg-12">
            <div className="text-center p-2 m-2">
              <h1 className="heading">Update Details</h1>
            </div>
            <form onSubmit={handleUpdate}>
              <div className="form-group p-2 m-2">
                <label
                  htmlFor=""
                  className="p-2 fs-3 fw-bold text-white"
                ></label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Enter FullName"
                  className="form-control "
                />
              </div>
              <div className="form-group p-2 m-2">
                <label
                  htmlFor=""
                  className="p-2 fs-3 fw-bold text-white"
                ></label>
                <input
                  value={age}
                  type="text"
                  placeholder="Enter Age"
                  className="form-control"
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="form-group p-2 m-2">
                <label
                  htmlFor=""
                  className="p-2 fs-3 fw-bold text-white"
                ></label>
                <input
                  value={design}
                  type="text"
                  placeholder="Enter Designation"
                  className="form-control"
                  onChange={(e) => setDesign(e.target.value)}
                />
              </div>
              <div className="form-group p-2 m-2">
                <label
                  htmlFor=""
                  className="p-2 fs-3 fw-bold text-white"
                ></label>
                <input
                  value={salary}
                  type="text"
                  placeholder="Enter Salary"
                  className="form-control"
                  onChange={(e) => setSalary(e.target.value)}
                />
              </div>
              <div className="form-group p-2 m-2">
                <label
                  htmlFor=""
                  className="p-2 fs-3 fw-bold text-white"
                ></label>
                <input
                  value={email}
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
                  value="Update"
                  className="button-edit"
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

export default Edit;