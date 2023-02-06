import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { TrashFill } from 'react-bootstrap-icons';
import SnackbarComponent from '../../reusableComponent/snackBar/SnackbarComponent';

const AkhandPathReg = () => {

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");

  const [akhandPathReg, setAkhandPathReg] = useState([]);
  const akhandPathRegData = async () => {
    try {
      const apiData = await axios.get("api/v1/akhandPathReg");
      // console.log(apiData.data);
      setAkhandPathReg(apiData.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  // /api/v1/akhandPathReg/deleteAddAkhandPathReg/

  const deleteAkhandPathRegData = async (id) => {
    try {
      const res = await axios.delete(`api/v1/akhandPathReg/deleteAddAkhandPathReg/${id}`);
      // console.log("general info data ", res.data);
      akhandPathRegData();
      setOpenSnackbar(true);
      setMessage(res.data.message);
      setSeverity("success");

    } catch (error) {
      // console.log(error.message);
       setOpenSnackbar(true);
        setMessage(error.message);
        setSeverity("error");
    }
  };


  useEffect(() => {
    akhandPathRegData();
  }, []);
  return (
<>
<SnackbarComponent
        open={openSnackbar}
        severity={severity}
        setOpen={setOpenSnackbar}
        message={message}
      /> 


<section>
        <div className="row p-3 pb-1 pt-2">
          <div className="col text-center">
            <h1>Akhand Path Booking Details</h1>
          </div>
        </div>
      </section>

      <section className="m-3">
        <table className="table table-borderless">
          <thead className=" border-shadow">
            <tr className="table-active">
              <th scope="col">Name</th>
              <th scope="col">Mobile</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Purpose</th>
              <th scope="col">Action</th>
              
            </tr>
          </thead>

          <tbody>
            {akhandPathReg.map((data, i) => {
              return (
                <tr className=" border-shadow">
                  <td className="">
                  {data.name}
             
                  </td>
                  <td>
                  {data.mobile}
                
     
                  </td>
                  <td>
                  {data.date}
          
                  </td>
                  <td>
                  {data.time}
             
                  </td>
                  <td>
               {data.purpose}
                
                  </td>
                
                  <td 
                  onClick={
                    () =>  deleteAkhandPathRegData(data._id)
                  }
                  
                  >
                    <TrashFill />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

</>
  )
}

export default AkhandPathReg