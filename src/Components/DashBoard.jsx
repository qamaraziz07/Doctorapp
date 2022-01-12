import React, { useState } from "react";
import Registration from "./Registration";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Doctor from "./Doctor";
import AdminPanel from "./AdminPanel";
import PatientDetail from "./PatientDetail";
import Profile from "./Profile";

function DashBoard() {
  const role = { admin: "Admin", doctor: "Doctor", user: "User" };
  console.log({ role });
  const [logUser, setLogUser] = useState(
    JSON.parse(localStorage.getItem("LoginUser")) || []
  );
  const { category, id } = logUser;
  console.log(category);
  console.log({ logUser });
  // useEffect(() => {
  //   history.push()
  //   history.push()

  // }, [])

  return (
    <>
      {category === role.admin && <AdminPanel />}
      {category === role.doctor && <Doctor id={id} />}
      {category === role.user && <PatientDetail />}
    </>
  );
}

export default DashBoard;
