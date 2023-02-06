import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Dashboard = () => {
  
  const [totalData, setTotalData] = useState({});

  const getTotalData = async (page) => {
   
    const res2 = await axios.get(`/api/v1/admin/dashboard`);
    
 
    setTotalData(res2.data.data);
    // console.log(res2.data.data)
    
   
  };
  useEffect(() => {
   
    getTotalData();
   
  }, []);

  return (
 <>
  <div className="row  d-flex justify-content-center" style={{width:'60vw'}}>
<div className="col d-flex justify-content-center align-items-center " >
<div className="row d-flex justify-content-center p-5 text-center align-items-center" style={{width:'100%'}}>


  <div className="col-md-3 mt-2 m-5 p-3 shadow d-flex flex-column justify-content-center align-items-center "> <span className="h1" style={{fontWeight:'bold', color:'blue'}}>{totalData.donatiesCount}</span> <p className="h3 border-bottom border-3 border-secondary" style={{ fontWeight:'bold'}}>All Donaties</p> </div>

  <div className="col-md-3 mt-2 m-5 p-3 shadow d-flex flex-column justify-content-center align-items-center "> <span className="h1" style={{fontWeight:'bold', color:'blue'}}>
  {totalData.hukamnamaCount}</span> <p className="h3 border-bottom border-3 border-secondary" style={{fontWeight:'bold'}}>All Hukamnama</p> </div>

  <div className="col-md-3 mt-2 m-5 p-3 shadow d-flex flex-column justify-content-center align-items-center " > <span className="h1" style={{fontWeight:'bold', color:'blue'}}>{
    totalData.eventsCount
  }</span> <p className="h3 border-bottom border-3 border-secondary" style={{fontWeight:'bold'}}>All Events</p> </div>

  <div className="col-md-3 mt-2 m-5 p-3 shadow d-flex flex-column justify-content-center align-items-center "> <span className="h1" style={{fontWeight:'bold', color:'blue'}}>{
    totalData.generalInfo
  }</span> <p className="h3 border-bottom border-3 border-secondary" style={{fontWeight:'bold'}}>General Info</p> </div>

  <div className="col-md-3 mt-2 m-5 p-3 shadow d-flex flex-column justify-content-center align-items-center "> <span className="h1" style={{fontWeight:'bold', color:'blue'}}>{ 
    22
  }</span> <p className="h3 border-bottom border-3 border-secondary" style={{fontWeight:'bold'}}>Members</p> </div>





</div>
  
</div>
  </div>




 </>
  );
};

export default Dashboard;
