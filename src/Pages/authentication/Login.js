import React, { useState } from 'react'

const Login = () => {

    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');

    const onEmailChange =(e)=>{
        console.log(e.target.value);
     setEmail(e.target.value)

    }
    const onPassChange =(e)=>{
     setPassword(e.target.value)

    }

    const onclickLogin =()=>{
    console.log("email :",email,"password :",password);

    }


    return (
        <>
            <div className='ParentDiv'>
                <div className='Heading'>
                    Login Page
                </div>
                <div>
                    Email
                </div>
                <input type="text" placeholder='Enter the Email' onChange={(e)=>onEmailChange(e)}/>
                <div>
                    Password
                </div>
                <input type="text" placeholder='Enter the password' onChange={(e)=>onPassChange(e)}/>
                <div className='btn'>
                    <button  onClick={onclickLogin}>Login</button>
                </div>
            </div>
        </>
    )
}

export default Login