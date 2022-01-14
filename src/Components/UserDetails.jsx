import React from "react";
import { Button, Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InputMask from "react-input-mask";

function UserDetails() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([])
  // let allData = [];
  const { id } = useParams();
  console.log({ id });
  const [patients, setPatients] = useState(
    JSON.parse(localStorage.getItem("PatientDetails")) || []
  );

  const [users, setUser] = useState(
    JSON.parse(localStorage.getItem("value")) || []
  );

  console.log({ search, users, patients });

  useEffect(() => {
    if(search === "" && !data.length){
 
    const allData = patients?.map((element) => {
      const userData = users?.filter((val) => element.email === val.email);
      console.log({userData});
      return { ...element, ...userData[0] };
    });
    console.log({allData})
    setData(allData);
    setSearchData(allData)
  }else if(search === "" && data.length){
    setSearchData(data)
  }else if(search !== "" && data.length){

         if(search.includes("-")){
          const dd =  data?.filter(elem => {
            const {date} = elem;
                console.log({elem,date,search});
             return date.includes(search)
           })
           setSearchData(dd)
         }else{
    const fd =  data?.filter(elem => {
      const {name} = elem;
          console.log({elem,name,search});
       return name.toLowerCase().includes(search)
     })
     setSearchData(fd)
    }
  }
  }, [search,data])
  console.log({data, searchData, search})
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
            type="text"
            className="search"
            placeholder="Search Name"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />

          {/* <Button id="dataBtn">Search</Button> */}
        </div>
        <div>
          <label>Search By Date :</label>
          
          {/* <Input
            mask="99-99-9999"
            type="date"
            className="search"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            placeholder="Search Date"
          /> */}
          <input
            type="date"
            className="search"
            placeholder="Search Date"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          {/* <Button id="dataBtn">Search</Button> */}
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
              <th>BloodGroup</th>
              <th>Symptoms</th>
              <th>Medication</th>
              <th>Age</th>
              
            </tr>
          </thead>
          <tbody>
            {searchData?.map((val) => {
              return (
                <tr key={val.id}>
                  <td>{val.date}</td>
                  <td>{val.time}</td>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>{val.bloodgroup}</td>
                  <td>{val.symptoms}</td>
                  <td>{val.medication}</td>
                  <td>{val.age}</td>
                  {/* <td>
                    <Link to={`/profile/${val.id}`}>
                      <Button id="dataBtn">check</Button>
                    </Link>
                  </td> */}
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
