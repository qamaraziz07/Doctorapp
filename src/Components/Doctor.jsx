import React, { useState } from "react";
import PatientDetail from "./PatientDetail";
// import { Table } from "react-bootstrap";
// import { Button } from "react-bootstrap";

function Doctor(props) {
  // const [FullName, setFullName] = useState("");
  // const [specialist, setSpecialist] = useState("");

  // if (!FullName || !specialist) {
  //   console.log("not fill details");
  // } else {
  //   localStorage.setItem("FullName", JSON.stringify(FullName));
  //   localStorage.setItem("specialist", JSON.stringify(specialist));
  //   console.log("saved dctrs details");
  // }

  return <PatientDetail doctorId={props.id} />;
  <>
    {/* <Table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Role</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr> */}
    {/* {admn?.map((val) => {
          return (
            <tr key={val.id}>
              <td>{val.name}</td>
              <td>{val.email}</td>
              <td>{val.category}</td>
              <td>
                <Link to={`/profile/${val.id}`}>
                  <Button id="dataBtn">check</Button>
                </Link>
              </td>
            </tr>
          );
        })} */}
    {/* </tbody>
    </Table> */}
  </>;
}

export default Doctor;
