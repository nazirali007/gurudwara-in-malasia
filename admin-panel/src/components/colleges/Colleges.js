import axios from 'axios';
import React, { useEffect, useState } from 'react'

import {
   
    TrashFill,
    PencilSquare,
  } from "react-bootstrap-icons";

const Colleges = () => {

    const [colleges, setColleges] = useState([]);

    const getColleges = async () => {
      try {
        const { data } = await axios.get(`/api/v1/college`);
        // console.log(data.data);
        setColleges(data.data);
        // console.log(setSubscribeData);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      getColleges();
    }, []);
  


  return (
    <>
    <section>
      <div className="row p-3 pb-1 pt-2">
        <div className="col text-center">
          <h1>All Colleges</h1>
        </div>
      </div>
    </section>

    <section className="m-3">
      <table className="table table-borderless">
        <thead className=" border-shadow">
          <tr className="table-active">
            <th scope="col">College Name</th>
            <th scope="col">College URL</th>
            <th scope="col">Edit College</th>
            <th scope="col" className="">
              Delete College
            </th>
          </tr>
        </thead>

        <tbody>
          {colleges.map((data, i) => {
            return (
              <tr className=" border-shadow">
                <td className="">{data.collegeName}</td>
                <td>{data.collegeUrl}</td>
                <td><PencilSquare /></td>
                <td><TrashFill /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  </>
  )
}

export default Colleges