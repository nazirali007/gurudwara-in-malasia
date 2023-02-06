import React from "react";
import Banners from "../reusableComponents/Banners";
import { 
  PersonBoundingBox ,
  TelephoneOutbound,
  Signpost,
  


} from "react-bootstrap-icons";
import SingleUpComingEvent from "../reusableComponents/SingleUpComingEvent";
import { aboutGurudwara  } from "../reusableComponents/DataApi";
const About = () => {
  return (
    <>
      <Banners title="" />

      <div className="container-fluid">
        <div className="row justify-content-md-start p-2 p-md-5 ">
          <div className="col-md-8 text-start">
            <h3 className="text-color-orange pt-3 mb-5">Executive Committee Members</h3>

            <table className="table table-striped table-hover  shadow mt-3 mb-5">
              <thead className="text-white" style={{ backgroundColor: "#E7740A" }}>
                <tr>
                  <th scope="col">
                    {" "}
                    <PersonBoundingBox /> <span className="ms-2">
                      Name
                    </span>{" "}
                  </th>
                  <th scope="col">
                    {" "}
                    <TelephoneOutbound /> <span className="ms-2">
                    Contact Number
                    </span>{" "}
                   
                  </th>
                  <th scope="col">
                    {" "}
                    <Signpost /> <span className="ms-2">
                    Post
                    </span>{" "}
                  
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr >
                  <td>Gursharan Singh</td>
                  <td>+91 9839976331</td>
                  <td>President</td>
                </tr>
                <tr>
                  <td>Jorawar Singh Kolhi</td>
                  <td>+91 9839964837</td>
                  <td>Vice President</td>
                </tr>
                <tr>
                  <td>Amardev Singh Saggu</td>
                  <td>+91 9451735173</td>
                  <td>General Secretary</td>
                </tr>
                <tr>
                  <td>Virender Singh</td>
                  <td>+91 9793304432</td>
                  <td>Joint Secretary First</td>
                </tr>
                <tr>
                  <td>Gagandeep Singh</td>
                  <td>+91 9415013828</td>
                  <td>Joint Secretary Second</td>
                </tr>
                <tr>
                  <td>Bhuander Kaur</td>
                  <td>+91 9935729766</td>
                  <td>Dharmic Secretary</td>
                </tr>
                <tr>
                  <td>Manjeet Singh Bindra</td>
                  <td>+ 91 9839119980</td>
                  <td>Treasurer</td>
                </tr>
                <tr>
                  <td>Tarjinder Singh</td>
                  <td>+ 91 9839119980</td>
                  <td>Store Incharger</td>
                </tr>
                <tr>
                  <td>Jaswant Singh</td>
                  <td>+91 9919806816</td>
                  <td>Executive Member</td>
                </tr>
                <tr>
                  <td>Daljeet Singh</td>
                  <td>+91 9839122442</td>
                  <td>Executive Member</td>
                </tr>
                <tr>
                  <td>Tejpal Singh</td>
                  <td>+91 9415408967</td>
                  <td>Executive Member</td>
                </tr>
                <tr>
                  <td>Kultaran Singh</td>
                  <td>+91 9450396818</td>
                  <td>Executive Member</td>
                </tr>
                <tr>
                  <td>Parminder Kaur</td>
                  <td>+91 8756893927</td>
                  <td>Executive Member</td>
                </tr>
                <tr>
                  <td>G.S.Kalsi</td>
                  <td>+91 9415782730</td>
                  <td>Executive Member</td>
                </tr>
                <tr>
                  <td>Paramjeet Singh</td>
                  <td>+91 9889332776</td>
                  <td>Executive Member</td>
                </tr>
                <tr>
                  <td>N.P.S.Chamana</td>
                  <td>+91 983991762</td>
                  <td>Executive Member</td>
                </tr>
                
              </tbody>
            </table>
              
            <h3 className="text-color-orange pt-3 mb-5">Staff</h3>
            <table className="table table-striped table-hover  shadow mt-3 pt-5">
              <thead className="text-white" style={{ backgroundColor: "#E7740A" }}>
                <tr>
                  <th scope="col">
                    {" "}
                    <PersonBoundingBox /> <span className="ms-2">
                      Name
                    </span>{" "}
                  </th>
                  <th scope="col">
                    {" "}
                    <TelephoneOutbound /> <span className="ms-2">
                    Contact Number
                    </span>{" "}
                   
                  </th>
                  <th scope="col">
                    {" "}
                    <Signpost /> <span className="ms-2">
                    Post
                    </span>{" "}
                  
                  </th>
                </tr>
              </thead>

              <tbody>
                {/* <tr>
                  <td>N.P.S.Chamana</td>
                  <td>+91 983991762</td>
                  <td>Executive Member</td>
                </tr> */}
                <tr>
                  <td>Gyani Manjeet Singh</td>
                  <td>+91 98899671120</td>
                  <td>Head Raagi</td>
                </tr>
                <tr>
                  <td>Bhai. Arvind Singh</td>
                  <td>+91 7786019406</td>
                  <td>Raagi</td>
                </tr>
                <tr>
                  <td>Bhai. Gurdeep Singh</td>
                  <td>+91 7409206512</td>
                  <td>Tabla Vadak</td>
                </tr>
                <tr>
                  <td>S. Gurmeet Singh</td>
                  <td>+91 7007947796</td>
                  <td>Sevadar</td>
                </tr>
                <tr>
                  <td>Kulvinder Singh</td>
                  <td>+91 7985743403</td>
                  <td>Sevadar</td>
                </tr>
                <tr>
                  <td>Kailash Mishra</td>
                  <td>+91 9369112020</td>
                  <td>Caretaker</td>
                </tr>
               
                
              </tbody>
            </table>
          </div>
        </div>
      </div>

<div className="container-fluid">
  <div className="row text-start pt-0 p-2 p-md-5 pt-md-2">
  <h3 className="text-color-orange pt-3 mb-4 mb-md-5">By Laws/Objectives</h3>
 <p style={{"fontSize":"21px",'fontWeight':'530'}}>गुरूनानक सत्संग सभा मुख्यतः एक धार्मिक समिति है जो सिख समुदाय के सदस्यों के साथ-साथ पंजाबी नागरिकों में सर्व धर्म, प्रचार-प्रसार, नगरवासियों के बच्चों के लिए चिकित्सा सुविधायें उपलब्ध कराने के लक्ष्य से गठित की गई है । इसके अन्य उद्देश्य इस प्रकार है - </p>
 <p style={{"fontSize":"19px"}}>1. सभी नागरिकों मुख्यतः सिख समुदाय व पंजाबी समुदाय का सामाजिक, सांस्कृतिक, नैतिक, शैक्षिक, वौद्धिक, चारित्रिक, रचनात्मक और तकनीकी विकास और प्रगति हेतु समुचित प्रयास करना।</p>
 <p style={{"fontSize":"19px"}}>2. समुदाय के लिए कल्याण कार्यों की स्थापना, चिकित्सा की सेवायें उपलब्ध कराना, धार्मिक विचार धर्म ग्रन्थों का पठन-पाठन और उन पर विचार व्याख्यान माला और आवश्यकता अनुसार अन्य कार्यक्रम आयोजित करना ।
</p>
<p style={{"fontSize":"19px"}}>3. धार्मिक पर्वो के अवसर पर विशेष धार्मिक कार्यक्रम आयोजित करना ।</p>
 <p style={{"fontSize":"19px"}}>4. देश के सभी निवासियों के बीच सद्भावना / भाई चारे की भावना को प्रोत्साहित करना ।</p>
 <p style={{"fontSize":"19px"}}>5. राष्ट्रीय एकता को प्रोत्साहित करने के उद्देश्य से विशेषकार्यक्रमों को आयोजित करना ।</p>
 <p style={{"fontSize":"19px"}}>6. धार्मिक ज्ञान पंचाबी साहित्य एवं कला के विकास हेतु उपयोगी ज्ञान के प्रचार-प्रसार हेतु निःशुल्क पुस्तक पत्र पत्रिकाओं का भण्डारन करना और पुस्कालय / वाचनालय की स्थापना करना</p>
 <p style={{"fontSize":"19px"}}>7. धार्मिक ज्ञान एवं पंजाबी साहित्य सृजन कर मुद्रण एवं प्रकाशन करना और उसका वितरण करना ।</p>
  </div>
</div>

  <h3 className="text-center mb-4 fw-bold text-color-orange-dark">Other</h3>
<div className="container-fluid  py-2 bg-color-yellow" >
        <div className="row d-flex flex-wrap justify-content-evenly">
          {
            /* console.log(events) */
            aboutGurudwara.map((data) => {
              return <SingleUpComingEvent data={data} />;
            })
          }
        </div>
      </div>

    </>
  );
};

export default About;
