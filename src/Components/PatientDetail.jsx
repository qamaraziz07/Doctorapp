import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

function PatientDetail(props) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState(new Date());
  // const [FullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  // const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [bloodgroup, setBloodgroup] = useState("O+");
  const [medication, setMedication] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [show, setShow] = useState("");
  const [Patient, setPatient] = useState(
    JSON.parse(localStorage.getItem("PatientDetails")) || []
  );
  console.log({ Patient });
  const [users, setusers] = useState(
    JSON.parse(localStorage.getItem("value")) || []
  );
  console.log({ users });
  const filteredUsers = users?.filter((val) => val.category === "User");
  console.log({ filteredUsers });

  let dctrId = props.doctorId;

  function handleFormSubmit() {
    if (
      !date ||
      !time ||
      // !FullName ||
      !email ||
      // !address ||
      !age ||
      !bloodgroup ||
      !symptoms ||
      !medication
    ) {
      setShow(true);
      toast.error("Form Inputs must be specified!");
    } else {
      console.log({ Patient });

      let userInd = users.findIndex((user) => user.email === email);
      console.log({ userInd });
      if (userInd > -1) {
        let index = Patient.findIndex(
          (patientDtl) => patientDtl.email === email
        );

        console.log({ index });
        if (index < 0) {
          setShow(false);
          // console.log("abcd");
          const id = Date.now();
          const patientDtl = {
            // FullName,
            email,
            // address,
            age,
            bloodgroup,
            symptoms,
            medication,
            time,
            date,
            id,
            doctorId: props.doctorId,
          };
          localStorage.setItem(
            "PatientDetails",
            JSON.stringify([...Patient, patientDtl])
          );
          setPatient((pre) => [...pre, patientDtl]);
          toast.success("Successfully registered");
        } else {
          toast.error("Patient already exists");
        }
      } else {
        toast.error("User not found!!");
      }
    }
    console.log("check..");
  }
  return (
    <>
      <h3>Patient Details</h3>
      <div className="form-group">
        <label>Date :</label>
        <input
          type="Date"
          className="form-control"
          placeholder="Enter Full Name"
          name="fullname"
          onChange={(event) => {
            setDate(event.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label>Time :</label>
        <input
          type="Time"
          className="form-control"
          placeholder="Enter Full Name"
          name="fullname"
          onChange={(event) => {
            setTime(event.target.value);
          }}
        />
      </div>

      {/* <div className="form-group">
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
      </div> */}

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

      {/* <div className="form-group">
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
      </div> */}

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
      <div className="form-group">
        <label>Symptoms</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Patient Condition"
          name="symptoms"
          onChange={(event) => {
            setSymptoms(event.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label>Medication</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Medication"
          name="medication"
          onChange={(event) => {
            setMedication(event.target.value);
          }}
        />
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
