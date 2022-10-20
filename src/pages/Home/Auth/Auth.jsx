import React, {useState} from 'react'
import './Auth.css'
import Logo from '../../../img/logo.png'

const Auth = () => {
    const [isSignup,setSignup] = useState(true)
    return (
        <div className='Auth'>
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="Webname">
                    <h1>AbC</h1>
                    <h6>avassjkd jkdkjc</h6>
                </div>
            </div>
          {/* <SignUp/> */}
          <div className="a-right">
          <form className="infoForm authForm">
            <h3>{isSignup?"Sign up":"Login"}</h3>

            {isSignup &&
            
            <div>
            <input
              type="text"
              placeholder="First Name"
              className="infoInput"
              name="firstname"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="infoInput"
              name="lastname"
            />
          </div>
            
            
            }
    
           
    
            <div>
              <input
                type="text"
                className="infoInput"
                name="username"
                placeholder="User name"
              />
            </div>
    
            <div>
              <input
                type="text"
                className="infoInput"
                name="password"
                placeholder="Password"
              />
              {isSignup &&
                <input
                type="text"
                className="infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
              />
              }
            
            </div>
    
            <div>
                <span style={{fontSize: '12px', cursor: "pointer",}} onClick={()=>setSignup((prev=>!prev))}
                >
                {isSignup
                ? "Already have an account Login"
                : "Don't have an account Sign up"}
                </span>
            </div>
            <button className="button infoButton" type="submit">{isSignup?"Signup":"Login"}</button>
          </form>
        </div>
        </div>
    )
}


function SignUp() {
    return (
        <div className="a-right">
          <form className="infoForm authForm">
            <h3>Sign up</h3>
    
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
              />
            </div>
    
            <div>
              <input
                type="text"
                className="infoInput"
                name="username"
                placeholder="User name"
              />
            </div>
    
            <div>
              <input
                type="text"
                className="infoInput"
                name="password"
                placeholder="Password"
              />
              <input
                type="text"
                className="infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
              />
            </div>
    
            <div>
                <span style={{fontSize: '12px'}}>Already have an account. Login!</span>
            </div>
            <button className="button infoButton" type="submit">Signup</button>
          </form>
        </div>
      );
    
    
}
export default Auth
