// import React, { useContext, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { UserDataContext } from "../../useContext/UserContext";

// // const LogOut = () => {



  
// //   return <div>LogOut</div>;
// // };
// const LogOut = () => {
//   const {setIsLoading,setIsAuthenticated}=useContext(UserDataContext)
//   const navigate = useNavigate();
//   const logout1 = async () => {
//     try {
//       await axios.get(`/api/v1/admin/logout`);
//       setIsAuthenticated(false)
//        navigate("/login");
//     } catch (error) {
//       console.log(error);
//     }
    
   
//   };
//   useEffect(() => {
//     logout1();
//   }, []);

//   return <div>LogOut</div>;
// };

// export default LogOut;
// // /api/v1/admin/logout


import React, { useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 import { UserDataContext } from "../../useContext/UserContext";

const LogOut = () => {
  const {setIsAuthenticated}=useContext(UserDataContext)
  const navigate = useNavigate();
  const logout = async () => {
    // setIsLoading(true)
    await axios.get("/api/v1/admin/logout");
    // setIsLoading(false)
    setIsAuthenticated(false)
    
    return navigate("/login");
    
   
  };
  useEffect(() => {
    logout();
  }, []);

  return <div>LogOut</div>;
};
export default LogOut;