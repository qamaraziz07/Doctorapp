import React, { useState } from "react";
import { Alert } from "react-bootstrap";

function PatientDetail() {
  const [FullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [bloodgroup, setBloodgroup] = useState("");
  const [gender, setGender] = useState("");

  const [flag, setFlag] = useState(false);

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
      setFlag(true);
    } else {
      localStorage.setItem("FullName", JSON.stringify(FullName));
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("phone", JSON.stringify(phone));
      localStorage.setItem("Address", JSON.stringify(address));
      localStorage.setItem("Age", JSON.stringify(age));
      localStorage.setItem("BloodGroup", JSON.stringify(bloodgroup));
      localStorage.setItem("Gender", JSON.stringify(gender));

    }
    console.log("Saved patient details in Local Storage");
  }
  console.log("check..");
  return (
    <>
      <div>
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
            <option>O+ (Positive)</option>
            <option>A-(Negative)</option>
            <option>AB+(Positive)</option>
            <option>O-(Negative)</option>
            <option>B+(Positive)</option>
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
        {flag && (
          <Alert color="primary" variant="danger">
            Sorry! every Field is important!
          </Alert>
        )}
      </div>
    </>
  );
}

export default PatientDetail;
