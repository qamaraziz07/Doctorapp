import React, { useState,useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function AdminPanel() {
  const  [search, setsearch] = useState("")
  const [searchData, setSearchData] = useState([])
  const [data, setData] = useState([]);
  const [admn, setAdmn] = useState(
    JSON.parse(localStorage.getItem("value")) || []
  );
  console.log({admn});
  const [patients, setPatients] = useState(
    JSON.parse(localStorage.getItem("PatientDetails")) || []
  );
  console.log({patients,admn,search});




  useEffect(() => {
    if(search === "" && !data.length){
 
    const allData = patients?.map((element) => {
      const userData = admn?.filter((val) => element.email === val.email);
      console.log({userData});
      return { ...element, ...userData[0] };
    });
    console.log({allData})
    setData(allData);
    setSearchData(allData)
  }else if(search === "" && data.length){
    setSearchData(data)
  }else if(search !== "" && data.length){
    const fd =  data?.filter(elem => {
      const {name} = elem;
          console.log({elem,name,search});
       return name.toLowerCase().includes(search)
     })
     setSearchData(fd)
    }
  
  }, [search,data])
  console.log({data, searchData, search})


  return (
    <>

      <div>
      <div>
        <div>
          <label>Search By Name :</label>
          <input
            type="text"
            className="search"
            placeholder="Search Name"
            onChange={(event) => {
              setsearch(event.target.value);
            }}
          />
        </div>
        {/* <div>
          <label>Search By Date :</label>
          <input
            type="search"
            className="search"
            placeholder="Search Date"
            onChange={(event) => {
              setsearch(event.target.value);
            }}
          />
        </div> */}
      </div>

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
            {searchData?.map((val) => {
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
