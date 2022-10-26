import React, { useState } from 'react'
import './Auth.css'
import Logo from '../../../img/logo.png'

const Auth = () => {
  const [isSignup, setSignup] = useState(true)
  const [data, setData] = useState({ firstname: "", lastname: "", password: "", confirmpass: "", username: "" })
  const [confirmPass, setConfirmPass] = useState(true)

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      if (data.password !== data.confirmpass) {
        setConfirmPass(false)
      }


    }
  }
  const resetForm = () => {
    setConfirmPass(true);
    setData({
      firstname: "", lastname: "", password: "", confirmpass: "", username: ""

    })
  }


  return (
    <div className='Auth'>
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Meeter</h1>
          <h6>Explore Now!</h6>
        </div>
      </div>
      {/* <SignUp/> */}
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignup ? "Sign up" : "Login"}</h3>

          {isSignup &&

            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onChange={handleChange}
                value={data.lastname}
              />
            </div>


          }



          <div>
            <input
              type="text"
              className="infoInput"
              name="username"
              placeholder="User name"
              onChange={handleChange}
              value={data.username}
            />
          </div>

          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={data.password}
            />
            {isSignup &&
              <input
                type="password"
                className="infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={data.confirmpass}
              />
            }

          </div>
          <span
            style={{
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
              display: confirmPass ? "none" : "block",
            }}
          >
            *Confirm password is not same
          </span>
          <div>
            <span style={{ fontSize: '12px', cursor: "pointer", }}
              onClick={() => {
                resetForm();
                setSignup((prev) => !prev);
              }}
            >
              {isSignup
                ? "Already have an account Login"
                : "Don't have an account Sign up"}
            </span>
          </div>
          <button className="button infoButton" type="submit">{isSignup ? "Signup" : "Login"}</button>
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
          <span style={{ fontSize: '12px' }}>Already have an account. Login!</span>
        </div>
        <button className="button infoButton" type="submit">Signup</button>
      </form>
    </div>
  );


}
export default Auth
