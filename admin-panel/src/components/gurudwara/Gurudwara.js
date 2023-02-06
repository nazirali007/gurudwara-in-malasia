import axios from 'axios';
import React, { useEffect, useState } from 'react'

import {
   
    TrashFill,
    PencilSquare,
  } from "react-bootstrap-icons";

const Gurudwara = () => {
    const [gurudwara, setGurudwara] = useState([]);

    const getGurudwara = async () => {
      try {
        const { data } = await axios.get(`/api/v1/allGurudwara`);
        // console.log(data.data);
        setGurudwara(data.data);
        // console.log(setSubscribeData);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      getGurudwara();
    }, []);
  


  return (
    <>
    <section>
      <div className="row p-3 pb-1 pt-2">
        <div className="col text-center">
          <h1>All Gurudwara</h1>
        </div>
      </div>
    </section>

    <section className="m-3">
      <table className="table table-borderless">
        <thead className=" border-shadow">
          <tr className="table-active">
            <th scope="col">Gurudwara Name</th>
            <th scope="col">Gurudwara URL</th>
            <th scope="col">Edit Gurudwara</th>
            <th scope="col" className="">
              Delete Gurudwara
            </th>
          </tr>
        </thead>

        <tbody>
          {gurudwara.map((data, i) => {
            return (
              <tr className=" border-shadow">
                <td className="">{data.gurudwaraName}</td>
                <td>{data.gurudwaraUrl}</td>
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

export default Gurudwara