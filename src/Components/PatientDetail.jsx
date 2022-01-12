import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

function PatientDetail(props) {
  const [FullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [bloodgroup, setBloodgroup] = useState("O+");
  const [gender, setGender] = useState("Male");
  const [show, setShow] = useState("");
  const [Patient, setPatient] = useState(
    JSON.parse(localStorage.getItem("PatientDetails")) || []
  );

  let dctrId = props.doctorId;

  function handleFormSubmit() {
    if (
      !FullName ||
      !email ||
      !phone ||
      !address ||
      !age ||
      !bloodgroup ||
      !gender
    ) {
      setShow(true);
      toast.error("Form Inputs must be specified!");
    } else {
      console.log({ Patient });
      let index = Patient.findIndex((patientDtl) => patientDtl.email === email);
      console.log({ index });
      if (index < 0) {
        setShow(false);
        // console.log("abcd");
        const id = Date.now();
        const patientDtl = {
          FullName,
          email,
          phone,
          address,
          age,
          bloodgroup,
          gender,
          id,
          doctorId: props.doctorId,
        };
        localStorage.setItem(
          "PatientDetails",
          JSON.stringify([...Patient, patientDtl])
        );
        setPatient((pre) => [...pre, patientDtl]);
        toast.success("Successfully registered");

        console.log("Saved patient details in Local Storage");
      } else {
        toast.error("user already exists");
      }
    }
    console.log("check..");
  }
  return (
    <>
      <h3>Patient Details</h3>
      <div className="form-group">
        <label>FullName</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Full Name"
          name="fullname"
          onChange={(event) => {
            setFullName(event.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label>contact No#</label>
        <input
          type="Phone"
          className="form-control"
          placeholder="Enter contact no"
          onChange={(event) => {
            setPhone(event.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label>Address</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your Address"
          name="address"
          onChange={(event) => {
            setAddress(event.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label>Age</label>
        <input
          type="phone"
          className="form-control"
          placeholder="Enter your Age"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
      </div>
      <div>
        <label>Blood Group</label>
        <select
          onChange={(event) => {
            setBloodgroup(event.target.value);
          }}
          className="form-control"
        >
          <option>O+</option>
          <option>A-</option>
          <option>AB+</option>
          <option>O-</option>
          <option>B+</option>
        </select>
      </div>
      <div>
        <label>Gender</label>
        <select
          onChange={(event) => {
            setGender(event.target.value);
          }}
          className="form-control"
        >
          <option>Male</option>
          <option>Female</option>
          <option>TransGender</option>
        </select>
      </div>
      <button
        onClick={handleFormSubmit}
        className="btn btn-dark btn-lg btn-block"
      >
        SubmitDetails
      </button>

      <Link to={`/Userdetails/${dctrId}`}>
        <button className="btn btn-dark btn-lg btn-block">See Users</button>
      </Link>

      <ToastContainer />
    </>
  );
}

export default PatientDetail;
