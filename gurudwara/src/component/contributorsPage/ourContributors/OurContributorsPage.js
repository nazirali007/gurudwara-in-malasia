import React from "react";
import Banners from "../../reusableComponents/Banners";
import Contributors from "../../reusableComponents/Contributors";
import { data } from "./ContributorsData";
import SignIn from "./contributorSingIn/SignIn";

const OurContributorsPage = () => {
  // console.log(data)

  return (
    <>
      <Banners />
      <div className="container-fluid color-primary-bg p-3 p-md-5 text-white">
        <div className="row text-start">
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
          </p>
        </div>
      </div>

      <div className="container-fluid p-2">
      

<SignIn />



      </div>              


      <h2 className="color-text-blue mb-5">Our Contributors</h2>
      <div className="container-fluid color-primary-bg p-3   p-md-5 text-white">
      
        <div className="row d-flex flex-wrap justify-content-evenly mt-5 text-start ">
          {data.map((data1) => {
            {
              /* console.log(data); */
            }
            return <Contributors data={data1} />;
          })}
        </div>
      </div>
    </>
  );
};

export default OurContributorsPage;
