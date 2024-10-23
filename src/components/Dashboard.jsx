import React, { useState } from 'react'; 
import Toggle from './Todo';
import Dashboard2 from './Dashboard2';
import pomo from "../assets/Pomodoro Icon.png" 
import frame1 from "../assets/Frame 202.png"
import frame2 from "../assets/Frame 203.png"
import frame3 from "../assets/Vector.png"
import { useRef } from 'react';
import splash from "../assets/unsplash_fB6df3RqS10 (1).png"
// import Model from "react-modal"
// import App from './Todo';


 

const Dashboard = () => { 
  
  

  const [Modal, setModal] = useState(false);

  const togglemodal = () => {
      setModal(!Modal)
  }
    
  <Toggle />

  
  return ( 
    
    <div className="first">  
    {/* <App /> */}
      <div>  
        <img src={pomo} alt="Pomodoro" />  
      </div> 

      
    

      <div className="cons">  
        <img src={frame1} alt="" />  
        <img src={frame2} alt="" />  
        <img 
        onClick={togglemodal}
        src={frame3} 
        alt=""
        className="btn-modal" />

        {
            Modal && (
                <div className="modal">
                   <div className="overlay"></div>
                         <div className="modal-content h-96">
                               <img src={frame3} alt="" className=" absolute h-28 top-20" />
                               <h2>User profile settings</h2>
                               <div>
                                    <img src={splash} alt="" className="splash " />
                                   <div className='relative mt-3 ml-2'>
                                        <p>Username</p>
                                       <input type="text" placeholder="" className="outline-none"/> 
                                    </div> 
                                </div>     
                            
                         </div>
                         <button
                         onClick={togglemodal} 
                         className="close-modal bg-gray-600">
                         Close
                         </button>  
                      </div>           
            )
        }
{/* <Dashboard2 /> */}
      </div>
      </div> 
     
    ); 
    
   
};  

export default Dashboard;