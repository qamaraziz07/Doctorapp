import React from "react";
import { useParams } from "react-router-dom";
import { Card, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";

const Profile = () => {
  const { id } = useParams();

  console.log({ id });
  const [state, setstate] = useState({});
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
          <ListGroup.Item>Email: {state?.email}</ListGroup.Item>
          <ListGroup.Item>Phone #: {state?.phone}</ListGroup.Item>
          <ListGroup.Item>Role: {state?.category}</ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

export default Profile;
