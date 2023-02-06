import { ErrorResponse } from "@remix-run/router";
import React, { useState } from "react";

const Children = (props) => {
  
  
  const onChange = (e) => {
    //  setChildInfo({...childInfo, [e.target.name]: e.target.value})
    const array = props.child;
    array[props.index][e.target.name] = e.target.value;
    props.setChild(array);
    // console.log(props.child[props.index].name)
  };


  return (
    <>
      <div className="form p-5">
        <form action>
          <div className="row">
            <div className="col-md-5  mx-3">
              <div className="col mb-4">
                <label htmlFor>Children Name</label>
                <input
                  type="text"
                  className="form-control input"
                  name="name"
                  
                  onChange={(e) => onChange(e)}
                  //   onChange={(e) => {
                  //    const array = props.child
                  //    array[props.index].name= event.target.value
                  //    props.setChild(array)
                  //    console.log(props.child)
                  // props.setChild([
                  //   ...props.child,
                  //   props.child[props.index],
                  //   (props.child[props.index].name = "ppp"),
                  // ]);
                  // props.setChild([...props.child, {...props.child[props.index], props.child[props.index].name : "shivam"}])
                  //   }}
                
                />
              </div>
              <div className="col mb-4">
                <label htmlFor>Children Education</label>
                <input
                  type="text"
                  className="form-control input"
                  name="education"
                  
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="col mb-4">
                <label htmlFor>Children Address</label>
                <textarea
                  name="address"
                  cols={30}
                  rows={4}
                  className="form-control input"
               
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="col-md-5 mx-3">
              <div className="col mb-4">
                <div className="row ">
                  <div className="col-md-6 ">
                    <label htmlFor>Children Age</label> <br/>
                    <input type="number" className="w-50" name="childAge"  onChange={onChange} />
                  </div>
                  <div className="col-md-6 ">
                    <label htmlFor> Children Marital Status</label>
                    <select
                      className="form-select input"
                      aria-label="Default select example"
                      onChange={onChange}
                      name="maritalStatus"
                    
                    >
                      <option selected> --Children Marital Status-- </option>
                      <option value="Married">Married</option>
                      <option value="Unmarried">Unmarried</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <label htmlFor>Mobile Number</label>
                <input
                  type="text"
                  className="form-control input"
                  name="mobile"
                
                  onChange={onChange}
                />
              </div>
              <div className="col mb-4">
                <label htmlFor>Children Profession</label>
                <input
                  type="text"
                  className="form-control input"
                  name="childProfession"
                
                  onChange={onChange}
                />
              </div>
              
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Children;
