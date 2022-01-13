import React from "react";
import { useParams } from "react-router-dom";
import { Card, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";

const Profile = () => {
  const { id } = useParams();

  console.log({ id });
  const [state, setstate] = useState({});

  ////userdetails
  const [userdetail, setUserdetail] = useState(
    JSON.parse(localStorage.getItem("PatientDetails")) || []
  );
  console.log({ userdetail });
  ////Logindetails
  const [loginDetail, setLoginDetail] = useState(
    JSON.parse(localStorage.getItem("LoginUser")) || []
  );
  console.log({ loginDetail });

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("value")) || []
  );
  console.log({ data, id });
  useEffect(() => {
    setstate(...data?.filter((val) => val.id === Number(id)));
  }, [id, data]);
  console.log(state);
  return (
    <>
      <h3>Profile Details</h3>
      <Card style={{ width: "18rem" }}>
        <Card.Header style={{ fontWeight: "bold" }}>
          Name: {state?.name}
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Date: </ListGroup.Item>
          <ListGroup.Item>Time: </ListGroup.Item>
          <ListGroup.Item>Email: {state?.email}</ListGroup.Item>
          <ListGroup.Item>Gender: {state?.gender}</ListGroup.Item>
          <ListGroup.Item>Phone #: {state?.phone}</ListGroup.Item>
          <ListGroup.Item>Age: </ListGroup.Item>
          <ListGroup.Item>BloodGroup: </ListGroup.Item>
          <ListGroup.Item>Symptoms: </ListGroup.Item>
          <ListGroup.Item>Medication: </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

export default Profile;
