// import React, { useState } from 'react'
// import './CSS/LoginSingup.css'
// const LoginSingup = () => {

//   const [state,setState] = useState("Login");
//   const [formData,setFormData] = useState({
//     username:"",
//     password:"",
//     email:""
//   })

//   const changeHandler = (e) => {
//     setFormData({...formData,[e.target.name]:e.target.value})
//   }

//   const login = async () => {
//      console.log("Login function executed",formData);
//      let responseData;
//      await fetch('http://localhost:4000/login',{
//        method:'POST',
//        headers:{
//          Accept:'application/form-data',
//          'Contact-Type':'application/json',
//        },
//        body:JSON.stringify(formData),
//      }).then((response)=> response.json()).then((data)=>responseData=data)
 
//      if(responseData.success){
//        localStorage.setItem('auth-token',responseData.token);
//        window.location.replace("/")
//      }
//      else{
//        alert(responseData.error);
//      }
//   }



//   const signup = async () => {
//     console.log("Sign Up function executed",formData);
//     let responseData;
//     await fetch('http://localhost:4000/signup',{
//       method:'POST',
//       headers:{
//         Accept:'application/form-data',
//         'Contact-Type':'application/json',
//       },
//       body:JSON.stringify(formData),
//     }).then((response)=> response.json()).then((data)=>responseData=data)

//     if(responseData.success){
//       localStorage.setItem('auth-token',responseData.token);
//       window.location.replace("/")
//     }
//     else{
//       alert(responseData.error);
//     }
//   }



//   return (
//     <div className='loginsignup'>
//       <div className="loginsignup-container">
//         <h1>{state}</h1>
//         <div className="loginsignup-fields">
//           {state==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type='text' placeholder='Your Name' />:<></>}
//           <input name='email' value={formData.email} onChange={changeHandler} type='email' placeholder='Email Address' />
//           <input name='password' value={formData.password} onChange={changeHandler} type='password' placeholder='Your Password' />
//         </div>
//         <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
//         {state==="Sign Up"?
//                 <p className='loginsignup-login'>Already have an account?<span onClick={()=>{setState("Login")}}>Login</span></p>:
//                 <p className='loginsignup-login'>Create an account?<span onClick={()=>{setState("Sign Up")}}>Click</span></p>
//         }
//         <div className="loginsignup-agree">
//           <input type='checkbox' name='' id=''/>
//           <p>By continuing, i agree to the terms of use & privacy policy.</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default LoginSingup



import React, { useState } from 'react';
import './CSS/LoginSingup.css';
const LoginSingup = () => {
  const [state, setState] = useState('Login');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const login = async () => {
    console.log('Login function executed', formData);
    let responseData;
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Contact-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/');
    } else {
      if (responseData.error === 'Email not found. Please sign up.') {
        alert(responseData.error);
      } else {
        setLoginError(responseData.error);
      }
    }
  };

  
  const signup = async () => {
    console.log('Sign Up function executed', formData);
    let responseData;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Contact-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/');
    } else {
      alert(responseData.error);
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === 'Sign Up' ? (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type={showPassword ? 'text' : 'password'}
            placeholder="Your Password"
          />
          <label>
            Show Password
            <input
              type="checkbox"
              checked={showPassword}
              onChange={togglePasswordVisibility}
            />
          </label>
        </div>
        <button onClick={() => (state === 'Login' ? login() : signup())}>
          Continue
        </button>
        {loginError && <p className="error-message">{loginError}</p>}
        {state === 'Sign Up' ? (
          <p className="loginsignup-login">
            Already have an account?
            <span onClick={() => setState('Login')}>Login</span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account?
            <span onClick={() => setState('Sign Up')}>Click</span>
          </p>
        )}
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSingup;