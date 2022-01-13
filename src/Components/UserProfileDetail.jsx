import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";

function UserProfileDetail() {
  const [state, setState] = useState("");
  const [userdetail, setUserdetail] = useState(
    JSON.parse(localStorage.getItem("PatientDetails")) || []
  );
  const [loginDetail, setLoginDetail] = useState(
    JSON.parse(localStorage.getItem("LoginUser")) || []
  );
  console.log({ loginDetail });

  const { email } = loginDetail;
  console.log({ email });
  console.log({ userdetail });
  var index = userdetail?.find((userEmail) => userEmail.email === email);
  index = { ...index, ...loginDetail };
  console.log({ index });
  useEffect(() => {
    setState(index);
  }, []);
  console.log({ state });

  return (
    <>
      <h3>Profile Details</h3>
      <Card style={{ width: "18rem" }}>
        <Card.Header style={{ fontWeight: "bold" }}>
          Name:{state.name}
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Date:{state.date} </ListGroup.Item>
          <ListGroup.Item>Time:{state.time} </ListGroup.Item>
          <ListGroup.Item>Email: {state.email}</ListGroup.Item>
          <ListGroup.Item>Gender:{state.gender} </ListGroup.Item>
          <ListGroup.Item>Phone #: {state.phone}</ListGroup.Item>
          <ListGroup.Item>Age:{state.age} </ListGroup.Item>
          <ListGroup.Item>BloodGroup:{state.bloodgroup} </ListGroup.Item>
          <ListGroup.Item>Symptoms:{state.symptoms} </ListGroup.Item>
          <ListGroup.Item>Medication:{state.medication} </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
}
export default UserProfileDetail;
