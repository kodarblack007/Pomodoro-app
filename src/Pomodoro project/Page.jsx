import React from "react";
import './login.css'



const Page = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        {/* Left side: Login Form */}
        <div className="login-form">
          {/* <h2>Promodoro Project</h2> */}
          <h3 className="h3">Log in to your account</h3>
          <p className="p">Welcome back! Select method to log in</p>
          
          <button className="google-login"> <img className="me" src="data:image/png;base64,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" alt="" />Google </button> 
          <div className="seperator">
                    <div className="line"></div>
                    <span className="span">or continue with email</span>
                    <div className="line"></div>
                </div>

          <form>
          <h1 className="text">Email</h1>
            <input type="email" placeholder="Enter your email" className="login-input" />
            <h1 className="text">Password</h1>
            <input type="password" placeholder="Enter your password" className="login-input" />

            <div className="remember-me">
              <input type="checkbox" className="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>

            <button type="submit" className="login-btn">Log in</button> 
          </form>

          <p className="create-account">
            Don’t have an account? <a href="/signup" target="blank">Create an account</a>
          </p>
        </div>

        {/* Right side: Image Section */}
        <div className="login-image">
          <img 
            src="https://s3-alpha-sig.figma.com/img/0a06/2a3e/2eed929653188d8241c2af0bb98c716a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EqbJiDq1QUVNcsIGH1IWByPYzY7wETBK8YXuyEMldJ0jRjKIG0x92n7mm1lwmRLYS1T5oIqjrqHdxg-YHGMggKxDFzCx73W1w3uRrQLbIgnmW22B-S0S~B3wzPuOM6UmZmE0iCVqREL00Zg~B0bCHnLdFsTleE48SeeESXj8vxxhIQg03kN1qQoViKhmD1N-V0ukqfA0zEr3nrIOkuGaREGQCZ4qEbkHffVGDclKB23AQDBIM~V6PT~WoaAHvcHGlcdjydsdjPy8O-yRrJebwSnDEYduwgIa-YnISg9fM4hSZBp~6Y1Tid5V~XpV2yqz4qhscJUY~56AaYck0LHseA__ "
            alt="Login Visual"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
