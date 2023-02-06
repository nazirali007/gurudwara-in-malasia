import React from "react";
import LeftSideBar from "./LeftSideBar";
import Search from "./Search";

import Dashboard from "../dashboard/DashBoard";

import User from "../Donaties/Donaties";

// import UnveryfiedNotebook from "../events/UnveryfiedNotebook";



import UploadImageForMile from "../outreachy/UploadImageForMile";


import UseCaseUnveryfied from "../useCase/UseCaseUnveryfied";
import SingleUseCase from "../useCase/SIngleUseCase";

import LogOut from "../logOut/LogOut";
import { Route, Routes, Outlet } from "react-router-dom";

import Feedback from "../feedback/Feedback";
import Subscribe from "../subscribe/Subscribe";
import Outreachy from "../outreachy/Outreachy";

import AddEvents from "../events/AddEvents";
import ContactDetails from "../subscribe/ContactDetails";
import General_Information from "../generalInformation/General_Information";
import AddColleges from "../colleges/AddColleges";
import Colleges from "../colleges/Colleges";
import AddGurudwara from "../gurudwara/AddGurudwara";
import Gurudwara from "../gurudwara/Gurudwara";
import AddMember from "../executiveCommittee/AddMember";

import Events from "../events/Events";
import Members from "../executiveCommittee/Members";
import Hukumnama from "../hukumnama/Hukumnama";
import HukumnamaAction from "../hukumnama/HukumnamaAction";
import AkhandPathReg from "../akhandPathReg/AkhandPathReg";
import AddLinks from "../live-links/AddLinks";
import AllLinks from "../live-links/Links";



const MainComponent = () => {
  return (
    <div>
      <LeftSideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Donaties" element={<User />} />
          <Route path="/Add-Hukamnama" element={<Hukumnama />} />
          <Route path="/Hukamnama" element={<HukumnamaAction />} />

          <Route path="/General_Information" element={<General_Information />} />
          <Route path="/Add-Events" element={<AddEvents />} />
          <Route path="/Events" element={ <Events /> } />
          
          <Route path="/contact_details" element={<ContactDetails />} />
          
          <Route path="/Add_Colleges" element={<AddColleges />} />
          <Route path="/Colleges" element={<Colleges />} />
       
          <Route path="/Add_Gurudwara" element={<AddGurudwara />} />
          <Route path="/Gurudwara" element={<Gurudwara />} />
          

          {/* <Route path="/Add_live_links" element={<AddLinks/>} /> */}
          <Route path="/Live_links" element={<AllLinks/>} />


          <Route path="/Add_Member" element={<AddMember />} />
          <Route path="/Member" element={<Members />} />

          <Route path="/akhand-path-registration" element={<AkhandPathReg />} />


          {/* <Route path="/unapproved_notebook" element={<UnveryfiedNotebook />} /> */}
        
          {/* <Route
            path="/unapproved_tool_noteBook"
            element={<UnveryfiedToolNotebook />}
          /> */}
        
          {/* <Route path="/unapproved_use_case" element={<UseCaseUnveryfied />} /> */}
          <Route path="/unapproved_use_case" element={<Outlet />}>
            <Route index element={<UseCaseUnveryfied />} />
            <Route path=":useCaseId" element={<SingleUseCase />} />
          </Route>

         

          <Route path="/outreachy" element={<Outreachy />} />

          <Route path="/mile_upload" element={<UploadImageForMile />} />
          
          <Route path="/feedback" element={<Feedback />} />

          <Route path="/logout" element={<LogOut />} />
        </Routes>
      </LeftSideBar>
    </div>
  );
};
export default MainComponent;
