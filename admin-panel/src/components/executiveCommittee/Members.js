import React, { useEffect, useState } from "react";
import axios from "axios";

const Members = () => {
    const [members, setMembers] = useState([]);

    const getMembers = async () => {
      try {
        const { data } = await axios.get(`/api/v1/members`);
        // console.log(data.data);
        setMembers(data.data);
        // console.log(setSubscribeData);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      getMembers();
    }, []);
  


  return (
    <>
    <section>
      <div className="row p-3 pb-1 pt-2">
        <div className="col text-center">
          <h1>All Members</h1>
        </div>
      </div>
    </section>

    <section className="m-3">
      <table className="table table-borderless">
        <thead className=" border-shadow">
          <tr className="table-active">
            <th scope="col">Name</th>
            <th scope="col">Post</th>
            <th scope="col">Mobile</th>
          
          </tr>
        </thead>

        <tbody>
          {members.map((data, i) => {
            return (
              <tr className=" border-shadow">
                <td className="">{data.name}</td>
                <td>{data.post}</td>
                <td>{data.mobile}</td>
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  </>
  )
}

export default Members