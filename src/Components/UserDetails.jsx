import React from "react";
import { Button, Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function UserDetails() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const { id } = useParams();
  console.log({ id });
  const [patients, setPatients] = useState(
    JSON.parse(localStorage.getItem("PatientDetails")) || []
  );

  const [users, setUser] = useState(
    JSON.parse(localStorage.getItem("value")) || []
  );

  console.log({ search, users, patients });

  // useEffect(() => {
  //   if(!search)
  //   let abc = patients?.map((element) => {
  //     const userData = users?.filter((val) => element.email === val.email);
  //     return { ...element, ...userData[0] };
  //   });
  //   setData(abc);
  // }else{
  //   console.log("i am searching")
  // }
  // }, [search]);
  // console.log({ data });
  // useEffect(() => {
  //   if (!search) {
  //     setstate(User?.filter((val) => val.doctorId === Number(id)));
  //   } else {
  //     let filterUser = [];
  //     state?.forEach((val) => {
  //       console.log({ namew: val, search });
  //     });
  //   }
  // }, [id, User, search]);
  // console.log({ state }, "data");
  //   const filteredData = User?.filter((val) => val.id === id);
  //   console.log(filteredData);

  return (
    <>
      <div>
        <div>
          <label>Search By Name :</label>
          <input
            type="search"
            className="search"
            placeholder="Search Name"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />

          <Button id="dataBtn">Search</Button>
        </div>
        <div>
          <label>Search By Date :</label>
          <input
            type="search"
            className="search"
            placeholder="Search Date"
            // onChange={(event) => {
            //   setSearch(event.target.value);
            // }}
          />
          <Button id="dataBtn">Search</Button>
        </div>
      </div>
      <div>
        <h3>Patient Details</h3>
        <Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Username</th>
              <th>Email</th>
              {/* <th>Address</th> */}
              <th>BloodGroup</th>
              <th>Symptoms</th>
              <th>Medication</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((val) => {
              return (
                <tr key={val.id}>
                  <td>{val.date}</td>
                  <td>{val.time}</td>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>{val.address}</td>
                  <td>{val.bloodgroup}</td>
                  <td>{val.symptoms}</td>
                  <td>{val.medication}</td>
                  <td>{val.age}</td>
                  <td>
                    <Link to={`/profile/${val.id}`}>
                      <Button id="dataBtn">check</Button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default UserDetails;
