import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";


const AddUser = () => {
  const [validationErr, setValidationErr] = useState({});
  const navigate = useNavigate();
  const [departmentData, setdepartmentData] = useState({});
  const [loading, setLoading] = useState(false);
  const [roles, setRoles] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);

  const handleInputChange = (e) => {
    setdepartmentData({ name: e.target.value });
    console.log(departmentData);
  };

  const getRoles = async () => {
    await axios.get("http://localhost:8000/api/roles").then((res) => {
      setRoles(res.data);
    });
  };
  const rolesOptions = [];
  roles.map((role) => {
    rolesOptions.push({ label: role.name, value: role.id });
  });

  // console.log(rolesOptions);

  const handleRoleChange = (e, act) => {
    console.log(e);
    setSelectedRoles(e);
  };

  useEffect(() => {
    getRoles();
  }, []);

  const saveDepartment = async (e) => {
    e.preventDefault();
    setLoading(true);

    let values = selectedRoles.map((val) => val.value);

    await axios
      .post("http://localhost:8000/food_donation/user/add", {
        name: departmentData.name,
      
      })
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/admin/departments");
      })
      .catch((err) => {
        setValidationErr(err.response.data.errors);
      });
    setLoading(false);
  };

  return (
      <>
    <Header/>
    <Sidebar/>
    <div>
     <div className="content-wrapper">
  {/* Content Header (Page header) */}
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2 ms-5">
          <div className="card">
            <div className="card-header">
              <div className="card-title text-lg">Add User</div>
              <div className="card-tools">
                <Link to="/admin/departments" className="btn-sm bg-indigo">
                  <i className="fa fa-arrow-left mr-1" aria-hidden="true"></i>{" "}
                  Go back
                </Link>
              </div>
            </div>
            <div className="card-body ">
              <form onSubmit={saveDepartment} method="post">
                <div className="form-group">
                  <label htmlFor="name">Department Name</label>
                  <input
                    onChange={handleInputChange}
                    value={departmentData.name}
                    name="name"
                    type="text"
                    className={`form-control ${
                      validationErr.name ? "is-invalid" : ""
                    }`}
                    id="name"
                    placeholder="Enter Department Name"/>
                  {validationErr.name ? (
                    <>
                      <span className="text-danger form-text">
                        {validationErr.name}
                      </span>
                    </>
                  ) : (
                    ""
                  )}
                </div>
                

                <div className="form-group my-2">
                  <button
                    onClick={saveDepartment}
                    type="submit"
                    className="btn bg-indigo"
                  >
                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm mr-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        <span>Saving...</span>
                      </>
                    ) : (
                      "Create"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
      {/* /.row */}
    </div>
    <Footer/>
    </>
 

  );
};

export default AddUser;