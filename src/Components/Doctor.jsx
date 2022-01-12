import React, { useState } from "react";
// import Medicalhistory from "./Medicalhistory";
// import PatientDetail from "./PatientDetail";

function Doctor() {
  const [FullName, setFullName] = useState("");
  const [specialist, setSpecialist] = useState("");

  if (!FullName || !specialist) {
    console.log("not fill details");
  } else {
    localStorage.setItem("FullName", JSON.stringify(FullName));
    localStorage.setItem("specialist", JSON.stringify(specialist));
    console.log("saved dctrs details");
  }

  return (
    <>
      <div>
        <h3>Create Doctors</h3>

        <div className="form-group">
          <label>FullName</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter yours Name"
            name="fullname"
            onChange={(event) => {
              setFullName(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>specialist</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Speciallity"
            name="specialist"
            onChange={(event) => {
              setSpecialist(event.target.value);
            }}
          />
        </div>
        <button className="btn btn-dark btn-lg btn-block">Created</button>
      </div>
    </>
  );
}

export default Doctor;
