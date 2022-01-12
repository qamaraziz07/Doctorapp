import React, { useState } from "react";
import { Alert } from "react-bootstrap";

function Medicalhistory() {
  const [FullName, setFullName] = React.useState("");
  const [VisitDate, setVisitDate] = useState("");
  const [Condition, setCondition] = useState("");
  const [Medication, setMedication] = useState("");
  const [Note, setNote] = useState("");
  const [Gender, setGender] = useState("");

  const [flag, setFlag] = useState(false);

  if (
    !FullName ||
    !VisitDate ||
    !Condition ||
    !Medication ||
    !Note ||
    !Gender
  ) {
    setFlag(true);
  } else {
    setFlag(false);
    localStorage.setItem("FullName", JSON.stringify(FullName));
    localStorage.setItem("Email", JSON.stringify(VisitDate));
    localStorage.setItem("phone", JSON.stringify(Condition));
    localStorage.setItem("Address", JSON.stringify(Medication));
    localStorage.setItem("Age", JSON.stringify(Note));
    localStorage.setItem("Gender", JSON.stringify(Gender));

    console.log("Saved in Local Storage");
  }

  return (
    <>
      <div>
        <h3>Medical History</h3>

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
          <label>Date Of Visit</label>
          <input
            type="Date"
            className="form-control"
            placeholder="Enter Visiting Date"
            onChange={(event) => {
              setVisitDate(event.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>Medical Codition</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter condition"
            onChange={(event) => {
              setCondition(event.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>Medication</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Medication"
            onChange={(event) => {
              setMedication(event.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>Note</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter prescription"
            onChange={(event) => {
              setNote(event.target.value);
            }}
          />
        </div>

        <div className="form-control">
          <label>Gender</label>
          <select
            onChange={(event) => {
              setGender(event.target.value);
            }}
          >
            <option>Male</option>
            <option>Female</option>
            <option>TransGender</option>
          </select>
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Submit Details
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

export default Medicalhistory;
