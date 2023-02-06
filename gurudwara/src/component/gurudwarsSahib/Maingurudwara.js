
import React  from "react";
import Banners from "../reusableComponents/Banners";
import BannerUsable from "../reusableComponents/BannerUsable";
import { gurudwara } from "../reusableComponents/DataApi";
import "./maingurudwara.css";

 const Maingurudwara =()=>{
    return(
        <>
  <BannerUsable data={gurudwara}/>
{/* <div className="backgroundImage1 d-flex justify-content-center align-items-center ">
          <h2 className="guruheading text-center">Gurudwara Sahib in India</h2>
        </div> */}
        <div className="container mt-5 mb-5">
          <div className="row">
            <table className="table table-striped guru-div">
              <thead className="thead">
                <tr style={{backgroundColor: '#F97201', color: 'white'}}>
                  <th scope="col">Name</th>
                  <th scope="col">Url</th>
                </tr>
              </thead>
              <tbody>
                <tr> 
                  <td>Gurudwara Sri Guru Tegh Bahadur Sahib</td>
                  <td className="urlguru" style={{color: '#F97201'}} />   
                </tr>    
                <tr>
                  <td>Takht Sri Patna Sahib</td>
                  <td className="urlclz" onClick={()=> window.open("https://takhatpatnasahib.in/en/", "_blank")}>https://takhatpatnasahib.in/en/</td>   
                </tr>
              
                <tr>
                  <td>Gurudwara Guru ka Bagh</td>
                  <td className="urlguru" />
                </tr>
                <tr>
                  <td>Gurudwara Ghai Ghat</td>
                  <td className="urlguru" />
                </tr>
                <tr>
                  <td>Gurudwara Handi Sahib</td>    
                  <td className="urlclz" onClick={()=> window.open("https://www.historicalgurudwaras.com/", "_blank")}>historicalgurudwaras.com</td>    
                </tr>
                <tr>
                  <td> Gurudwara Gobind Ghat</td>  
                  <td className="urlclz" ></td>    
                </tr>
                <tr>
                  <td>Gurudwara Bal Lila Maini Sangat</td>
                  <td className="urlclz" onClick={()=> window.open("http://gurudwaraballeela.com/", "_blank")}>http://gurudwaraballeela.com/</td>      
                    
                </tr>
                <tr>
                  <td> Gurudwara Koohni Sahib</td>  
                  <td className="urlclz" ></td>    
                </tr>
                <tr>
                  <td>Gurudwara Bangla Sahib</td>
                  <td className="urlclz" onClick={()=> window.open("https://dsgmc.in/", "_blank")}>dsgmc.in</td>      
                    
                </tr>
                <tr>
                  <td>Gurudwara Dam Dama Sahib</td>
                  <td className="urlclz" onClick={()=> window.open("https://sggswu.edu.in/", "_blank")}>https://sggswu.edu.in/</td>            
                </tr>
                <tr>
                  <td>Gurudwara Sri Guru Singh Sabha</td>  
                  <td className="urlclz" ></td>    
                </tr>
                <tr>
                  <td>Gurudwara Mata Sundri</td>
                  <td className="urlclz" onClick={()=> window.open("https://www.sgndkc.org/sk/", "_blank")}>https://www.sgndkc.org</td>            
                </tr>
                <tr>
                  <td>Gurudwara Nanak Piao</td>
                  <td className="urlclz" onClick={()=> window.open("https://dsgmc.in/", "_blank")}>dsgmc.in</td>            
                </tr>
                <tr>
                  <td>Gurudwara Mata Sundri</td>
                  <td className="urlclz" onClick={()=> window.open("https://dsgmc.in/", "_blank")}>dsgmc.in</td>            
                </tr>
                <tr>
                  <td>Gurudwara Mata Sundri</td>
                  <td className="urlclz" onClick={()=> window.open("https://dsgmc.in/", "_blank")}>dsgmc.in</td>            
                </tr>
                <tr>
                  <td>Lakhpat Gurudwara Sahib</td>  
                  <td className="urlclz" ></td>    
                </tr>
                <tr>
                  <td>Gurudwara Nadha Sahib</td>  
                  <td className="urlclz" ></td>    
                </tr>
                <tr>
                  <td>Gurudwara Toka Sahib</td>
                  <td className="urlclz" onClick={()=> window.open("https://www.sikhiwiki.org/index.php/Main_Page", "_blank")}>https://www.sikhiwiki.org</td>            
                </tr>
                <tr>
                  <td> Chail Gurudwara </td>  
                  <td className="urlclz" ></td>    
                </tr>
                <tr>
                  <td>Dera Baba Vadbhag Singh Gurudwara</td>  
                  <td className="urlclz" ></td>    
                </tr>
                <tr>
                  <td>Gurudwara Guru Singh Sabha</td>  
                  <td className="urlclz" ></td>    
                </tr>
                <tr>
                  <td>Guru Nanak Jhira Sahib</td>
                  <td className="urlclz" onClick={()=> window.open("http://gurunanakjhirabidar.com/", "_blank")}>gurunanakjhirabidar.com</td>            
                </tr>
                <tr>
                  <td> Gurudwara Guru Nanak Dharamsal Puraatan</td>  
                  <td className="urlclz" ></td>    
                </tr>
                <tr>
                  <td> Gurudwara Khalsa Sabha,Matunga</td>
                  <td className="urlclz" onClick={()=> window.open("https://igurudwara.com/", "_blank")}>igurudwara.com</td>              
                    
                </tr>
                <tr>
                  <td>Gurudwara Baba Atal</td>
                  <td className="urlclz" onClick={()=> window.open("https://igurudwara.com/", "_blank")}>igurudwara.com</td>              
                    
                </tr>
                <tr>
                  <td>Sri Akal Takth Sahib</td>
                  <td className="urlclz" onClick={()=> window.open("https://sgpc.net/", "_blank")}>sgpc.net.com</td>                 
                </tr>
                <tr>
                  <td>Gurudwara Guptasar Sahib</td>
                  <td className="urlclz" ></td>                 
                </tr>
                <tr>
                  <td> Gurudwara Nagiana Sahib</td>
                  <td className="urlclz" onClick={()=> window.open("http://nagianasahib.org/", "_blank")}>nagianasahib.org</td>          
                </tr>
                <tr>
                  <td> Gurudwara Naulakha Sahib</td>
                  <td className="urlclz" ></td>
                </tr>
                <tr>
                  <td>Gurudwara Parivar Vichhora</td>
                  <td className="urlclz" ></td>
                </tr>
                <tr>
                  <td>Gurudwara Patal Puri Sahib</td>
                  <td className="urlclz" ></td>
                </tr>
                <tr>
                  <td>Harmandir Sahib</td>
                  <td className="urlclz" onClick={()=> window.open("https://sgpc.net/", "_blank")}>sgpc.net</td>          
                </tr>
               
              </tbody>
            </table>  
          </div>
        </div>
     


 </>
 );
};
export default Maingurudwara;