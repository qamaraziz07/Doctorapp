import React, { useState } from "react";
import Registration from "./Registration";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Doctor from "./Doctor";

function DashBoard() {
  const role = { Admin: "admin", Doctor: "doctor", User: "user" };
  console.log({ role });
  const [logUser, setLogUser] = useState(
    JSON.parse(localStorage.getItem("LoginUser")) || []
  );
  const { category } = logUser;
  console.log(category);
  console.log({ logUser });
  // useEffect(() => {
  //   history.push()
  //   history.push()

  // }, [])
  return (
    <>
      <Switch>
        <Route path="/admin" component={AdminPanel}></Route>
        <Route path="/doctor" component={Doctor}></Route>
        <Route path="/user">
          <h1>user</h1>
        </Route>
      </Switch>
      <Registration category={category} cond={false} />
    </>
  );
}

export default DashBoard;
