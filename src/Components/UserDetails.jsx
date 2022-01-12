import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  const [state, setstate] = useState([]);
  const { id } = useParams();
  console.log({ id });
  const [User, setUser] = useState(
    JSON.parse(localStorage.getItem("PatientDetails")) || []
  );
  console.log(User);
  useEffect(() => {
    setstate(...User?.filter((val) => val.doctorId === Number(id)));
  }, [id, User]);
  console.log( state,"data" );
  //   const filteredData = User?.filter((val) => val.id === id);
  //   console.log(filteredData);
  return (
    <>
    <div className="card">

        <h3>Profile Details</h3>
        <Card style={{ width: "18rem" }}>
        {User?.map((patient)=>{
            return <>
            <Card.Header style={{ fontWeight: "bold" }}>
            Name:{patient?.FullName}
          </Card.Header>
          {/* <ListGroup > */}
            <ListGroup.Item>Email:{patient?.email} </ListGroup.Item>
            <ListGroup.Item>Phone# {patient?.phone}</ListGroup.Item>
            <ListGroup.Item>Address:{patient?.address} </ListGroup.Item>
            <ListGroup.Item>BloodGroup:{patient?.bloodgroup} </ListGroup.Item>
            <ListGroup.Item>Gender:{patient?.gender} </ListGroup.Item>
            <ListGroup.Item>Age:{patient?.age} </ListGroup.Item>
          {/* </ListGroup> */}
            </> 
        })}
        </Card>
    </div>

    </>
  );
}

export default UserDetails;
