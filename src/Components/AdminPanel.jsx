import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function AdminPanel() {
  const [admn, setAdmn] = useState(
    JSON.parse(localStorage.getItem("value")) || []
  );
  console.log(admn);
  return (
    <>

      <div>
      <div>
      <h3>Admin Panel</h3>
      </div>
        <Table>
          <thead>
            <tr>
  
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {admn?.map((val) => {
              return (
                <tr key={val.id}>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>{val.category}</td>
                  <td>
                    <Link to={`/profile/${val.id}`}><Button id="dataBtn">check</Button></Link>
                  </td>
                </tr>
              );
            })}
            {/* <tr>
              <td>2</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td></td>
              <td></td>
              <td></td>
            </tr> */}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default AdminPanel;
