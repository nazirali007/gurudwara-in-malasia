
import React  from "react";
import "./colleges.css";
import {Link} from "react-router-dom";

import BannerUsable from "../reusableComponents/BannerUsable";
import { gurudwaraCollege } from "../reusableComponents/DataApi"


 const Colleges =()=>{
    return(
        <>
<BannerUsable data={gurudwaraCollege}/>
{/* <div className="backgroundImage d-flex justify-content-center align-items-center ">
          <h2 className="clzheading text-center">Sikh Colleges in India</h2>
        </div> */}
        <div className="container mt-5 mb-5">
          <div className="row">
            <table className="table table-striped clz-div">
              <thead className="thead">
                <tr style={{backgroundColor: '#F97201', color: 'white'}}>
                  <th scope="col">Name</th>
                  <th scope="col">Url</th>
                </tr>
              </thead>
              <tbody>
                <tr> 
                  <td>Guru Tegh Bahadur Institute of Technology</td>

                  <td className="urlclz" onClick={()=> window.open("http://www.gtbit.com/", "_blank")}>www.gtbit.org</td>   
                </tr>
                <tr>   
                  <td>Guru Hargobind Institute of Management &amp; Information Technology</td>
                  <td className="urlclz" onClick={()=> window.open("http://www.gtbpi.in/", "_blank")}>www.gtbpi.in</td>    

                </tr>
                <tr>
                  <td>Guru Tegh Bahadur Polytechnic Institute</td>
                  <td className="urlclz" onClick={()=> window.open("http://www.gtbpi.in//", "_blank")}>www.gtbpi.in</td>    
                </tr>
                <tr>
                  <td>Sri Guru Tegh Bahadur Institute of Management &amp; Information Technology</td>
                  <td className="urlclz" onClick={()=> window.open("https://www.sgtbimit.com/", "_blank")}>/www.sgtbimit.com</td>    
                  
                </tr>
                <tr>
                  <td>Sri Guru Harkrishan Private I.T.I.</td>
                  <td className="urlclz" onClick={()=> window.open("http://sghiti.weebly.com/", "_blank")}>sghiti.weebly.com</td>    
                </tr>

                <tr>
                  <td>Sri Guru Tegh Bahadur Services Training Institute</td>
                 
                
                  <td className="urlclz" onClick={()=> window.open(" https://www.sgtbimit.com//", "_blank")}>/www.sgtbimit.com</td>    
                </tr>
                <tr>
                  <td>Guru Nanak Institute of Management</td>
                  <td className="urlclz" onClick={()=> window.open("http://gnim.ac.in/", "_blank")}>http://gnim.ac.in</td>    
                </tr>
                
                <tr>
                  <td>Punjabi University</td>
                  
                  <td className="urlclz" onClick={()=> window.open("http://punjabiuniversity.ac.in/", "_blank")}>punjabiuniversity.ac.in</td>   
                </tr>
                <tr>
                  <td>Sri Guru Granth Sahib World University</td>
                  <td className="urlclz" onClick={()=> window.open("https://sggswu.edu.in//", "_blank")}>sggswu.edu.in</td> 
                </tr>
                <tr>
                  <td>Khalsa college</td>
                  <td className="urlclz" onClick={()=> window.open("https://khalsacollege.edu.in/", "_blank")}>khalsacollege.edu.in</td> 

                </tr>
                <tr>
                  <td>Sri Guru Nanak dev khalsa college</td>
                  <td className="urlclz" onClick={()=> window.open("https://www.sgndkc.org/sk/", "_blank")}>sgndkc.org</td>      
                </tr>
                <tr>
                  <td>Punjabi University Guru kashi college </td>
                  <td className="urlclz" onClick={()=> window.open("http://punjabiuniversity.ac.in/", "_blank")}>punjabiuniversity.ac.in</td> 
                </tr>
                <tr>
                  <td>Mata Sundri College of women </td>
                  <td className="urlclz" onClick={()=> window.open("https://mscw.ac.in/", "_blank")}>mscw.ac.in</td> 
              
                </tr>
                <tr>
                  <td>Guru Nanak khalsa college of art, science & commerce</td>
                  <td className="urlclz" onClick={()=> window.open("https://www.gnkhalsa.edu.in/", "_blank")}>www.gnkhalsa.edu.in</td> 
                </tr>
                <tr>
                  <td>Sikh National college </td>
                  <td className="urlclz" onClick={()=> window.open("https://sncbanga.ac.in//", "_blank")}>sncbanga.ac.in</td> 
                </tr>
                <tr>
                  <td>Sri Guru Ram Dass Medical College</td>
                  <td className="urlclz" onClick={()=> window.open("https://sgrdimsr.in/", "_blank")}>sgrdimsr.in</td> 
                </tr>
                <tr>
                  <td>Sri Guru Ram Dass Dental College</td>
                 
                  <td className="urlclz" onClick={()=> window.open(" http://www.sgrdidsr.in/", "_blank")}>www.sgrdidsr.in</td> 
                </tr>
                <tr>
                  <td>Guru Nanak Institute of Research and Development</td>
                  <td className="urlclz" onClick={()=> window.open("https://gnithyd.ac.in//", "_blank")}>www.sgrdidsr.in</td> 
             
                </tr>
                <tr>
                  <td>Sikh Inter College</td>
                  <td className="urlclz" onClick={()=> window.open("https://sikhintercollege.com/", "_blank")}>sikhintercollege.com</td> 
                </tr>
                <tr>
                  <td>Guru Harkishan Sahib Khalsa College</td>
                  <td className="urlclz" onClick={()=> window.open("https://sghskhalsacollege.com/", "_blank")}>sikhintercollege.com</td>
                 
                </tr>
                <tr>
                  <td>Guru Nanak dev engineering College</td>
                  <td className="urlclz" onClick={()=> window.open("https://gndec.ac.in/", "_blank")}>gndec.ac.in</td>
              
                </tr>
                <tr>
                  <td>Guru Nanak college for girls sri Muktsar Sahib</td>
                  <td className="urlclz" onClick={()=> window.open("https://gncmkt.ac.in/", "_blank")}>gncmkt.ac.in</td>
                </tr>
                <tr>
                  <td>Babbar Akali Memorial khalsa college</td>
                  <td className="urlclz" onClick={()=> window.open("https://bamkc.edu.in/", "_blank")}>bamkc.edu.in</td>
             
                </tr>
                <tr>
                  <td>Baba Ajay Singh Khalsa college for Girls</td>

                  <td className="urlclz" onClick={()=> window.open("https://babaajaysinghcollege.org/", "_blank")}>babaajaysinghcollege.org</td>
                </tr>
                <tr>
                  <td>Mata Sahib Kaur Khalsa Girls college</td> 
                  <td className="urlclz" onClick={()=> window.open("https://schools.org.in/", "_blank")}>https://schools.org.in/</td>
                 
                </tr>
                <tr>
                  <td>Shaheed Baba jivan Singh Khalsa college</td>
                  <td className="urlclz" onClick={()=> window.open("https://sbjscollege.org//", "_blank")}>sbjscollege.org</td>
                </tr>
                <tr>
                  <td>Dashmesh Institute of research & dental science</td>
                  <td className="urlclz" onClick={()=> window.open("http://dashmeshinstitutes.com/", "_blank")}>dashmeshinstitutes.com</td>
                </tr>
                <tr>
                  <td>Mata Gujri Memorial medical college</td>
                  <td className="urlclz" onClick={()=> window.open("https://www.mgmmckishanganj.in//", "_blank")}>mgmmckishanganj.in</td>
                
                </tr>
                <tr>
                  <td>Guru Nanak Khalsa college , jalandhar</td>
                  <td className="urlclz" onClick={()=> window.open("https://gnkcdk.org/", "_blank")}>gnkcdk.org</td>
  
                </tr>
                <tr>
                  <td>Trai Shatabdi Guru Gobind Singh Khalsa college</td>
                  <td className="urlclz" onClick={()=> window.open("https://tscollege.org/", "_blank")}>tscollege.org</td> 
                </tr>
                <tr>
                  <td>General Shivdev Singh Diwan Gurbachan Singh Khalsa college</td>
                  <td className="urlclz" onClick={()=> window.open("https://khalsacollegepatiala.org//", "_blank")}>khalsacollegepatiala.org</td> 
                 
                </tr>
                <tr>
                  <td>Mata Sahib Kaur Girls college gehal</td>
                  <td className="urlclz" onClick={()=> window.open("http://sahibkaurgirlscollege.com/", "_blank")}>sahibkaurgirlscollege.com</td> 
                </tr>
              </tbody>
            </table>  
          </div>
        </div>
      


 </>
 );
};
export default Colleges;