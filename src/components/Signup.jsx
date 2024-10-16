import React, { useState } from 'react'
import signage from "../assets/WdC-o7ZcZL5WALPSmfUC8H4oYhlhqm1DV45CtHqV06DTRR0rE_P9JXi-J2KXLd9CTyHt_t3ehUm1o_AMltgfAGbvQDku8jsZt0kBSA=h120.png"
import pic from "../assets/Frame 196.png"
import Dashboard from './Dashboard';
const Signup = () => {

    const [acton, setAction] = useState('');

    const signUp = ()=>{
        setAction('active');
    }
  return (
    <nav className={"navbar"}>
    <div className="all">
       <div className="container">
         <div className="one">
          <form action="">
            <div className="sign">
                <h1><span>Create your account</span></h1>
                <p>Let's get your account started with three days free trial</p>
            </div>

            <div className="sign2">
             <button className="signage">
                <img src={signage} alt="Login image" />
                <p className="para">Login with google</p>
             </button>
            </div>
            
            <div className="line">
                <div className="line1"></div>
                <p>or</p>
                <div className="line2"></div>
            </div>

            <div className="mail">
               <p>Email</p>
               <input type="email" placeholder="Enter your email" required/>
            </div>


            <div className="pass">
                <p>Password</p>
                <input type="password" placeholder="Enter your password" required/>
            </div>

            <div className="check">
                <input type="checkbox" required />
                <p>I agree to all the terms and privacy policy</p>
            </div>

            <button className="ton" onClick={signUp}>Sign up</button>

            <p className= "ready">Already have an account? <span className="log">Login</span></p>
         </form>

         </div>

         <div className="imager">
            <img src={pic} alt="" className="pic" />
         </div>
       </div>
      
    </div>

    <Dashboard />
    </nav>
  )
}



export default Signup;
