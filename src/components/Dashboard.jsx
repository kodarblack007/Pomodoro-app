import React, { useState } from 'react'; 
import pomo from "../assets/Pomodoro Icon.png" 
import frame1 from "../assets/Frame 202.png"
import frame2 from "../assets/Frame 203.png"
import frame3 from "../assets/Vector.png"
 

const ProfileEditor = () => {  
  const [isOpen, setIsOpen] = useState(false);  
  const [name, setName] = useState('');  
  const [email, setEmail] = useState('');  

  const handleToggleDropdown = () => {  
    setIsOpen(!isOpen);  
  };  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    // Handle profile update logic here  
    console.log('Profile Updated:', { name, email });  
    setIsOpen(false); // Close dropdown after submit  
  };  

  return (  
    <div className="first">  
      <div>  
        <img src={pomo} alt="Pomodoro" />  
      </div>  

      <div className="cons">  
        <img src={frame1} alt="" />  
        <img src={frame2} alt="" />  
        <img src={frame3} alt="" />  
      </div>  

        
 
      </div> 
  );  
};  

export default ProfileEditor;