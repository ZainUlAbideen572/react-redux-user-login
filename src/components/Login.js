import React, { useState } from "react";
import {useDispatch} from "react-redux"
import {login} from "./features/userslice"
const Login=()=>{
     const[name,setname]=useState("")
     const[email,setemail]=useState("")
     const[password,setpassword]=useState("")
     const dispatch=useDispatch()
        const Submit=(e)=>{
        e.preventDefault();
        dispatch(login({
            name:name,
            email:email,
            password:password,
            loggedin:true
        }))
     }
    return<div>
    <form className="form-control" onSubmit={Submit}>
       <label for="name">name</label>
        <input type="name" name="name" className="form-control" id="name" placeholder="Enter name" value={name} onChange={(e)=>setname(e.target.value)}/>
        <label for="email">Email address</label>
        <input type="email" name="email" className="form-control" id="Email" placeholder="Enter email" value={email} onChange={(e)=>setemail(e.target.value)}/>    
        <label for="password">password</label>
        <input type="password" name="password" className="form-control" id="Email" placeholder="Enter password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
        <button className="btn btn-secondary">Login</button>
    </form>
    </div>
}
export default Login;