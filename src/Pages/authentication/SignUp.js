import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { signup,userSelector,clearState } from '../../reducer/userSlice';
const SignUp = () => {
    const dispatch = useDispatch();

    const { isSuccess, isError, errorMessage} =
    useSelector(userSelector);

    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [userName,setUserName]= useState('');

    const onEmailChange =(e)=>{
        console.log(e.target.value);
     setEmail(e.target.value)

    }
    const onUserNameChange =(e)=>{
        console.log(e.target.value);
     setUserName(e.target.value)

    }
    const onPassChange =(e)=>{
     setPassword(e.target.value)

    }

    const onclickSignup =()=>{
    console.log("UserNAme :", userName,"email :",email,"password :",password);
    const obj = {
        username: userName,
        email: email,
        password: password,
      }
    dispatch(signup(obj))

    }
    console.log("hit",isSuccess,isError);
  return (
    <>
    <div className='ParentDiv'>
        <div className='Heading'>
            SignUp Page
        </div>
        <div>
            UserName
        </div>
        <input type="text" placeholder='Enter the UserName' onChange={(e)=>onUserNameChange(e)}/>
        <div>
            Email
        </div>
        <input type="text" placeholder='Enter the Email' onChange={(e)=>onEmailChange(e)}/>
        <div>
            Password
        </div>
        <input type="text" placeholder='Enter the password' onChange={(e)=>onPassChange(e)}/>
        <div className='btn'>
            <button  onClick={onclickSignup}>SignUp</button>
        </div>
    </div>
</>  )
}

export default SignUp