import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import axios from "axios"

export default function Register(){
    const [input, setInput] = useState({
        firstname: "", 
        lastname: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState(null)

    const handleInput = e => {
        setInput(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("/auth/register", input)
            
            navigate("/login");
        } catch(err){
            setError(err.response.data)
        }
    }

    return (
        <div className = "flex justify-center items-center p-3 sm:p-24 h-screen ">
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body flex items-center justify-center">
                    <h2 className="card-title">Register</h2>
                    <form className = "flex flex-col justify-center items-center">
                            <div className = "flex justify-center items-center pt-5 space-x-5">
                                <input type="text" name = "firstname" placeholder="first name" className="input input-bordered w-full max-w-xs rounded-3xl"  onChange = {handleInput}/>
                                <input type="text" name = "lastname" placeholder="last name" className="input input-bordered w-full max-w-xs rounded-3xl"  onChange = {handleInput}/>
                            </div>
                            <div className = "pt-5 pb-5 w-full max-w-xs">
                                <input type="text" name = "email" placeholder="email" className="input input-bordered w-full max-w-xs rounded-3xl"  onChange = {handleInput} />
                            </div>
                            <div className = "pb-5 w-full max-w-xs">
                                <input type="text" name = "password" placeholder="password" className="input input-bordered w-full max-w-xs rounded-3xl"  onChange = {handleInput} />
                            </div>
                           
                            <button className="btn bg-secondary rounded-3xl" onClick = {handleClick}>Sign Up</button>
                    </form>
                    {error && <ErrorMessage error = {error}/>}
                    <div className = "flex justify-center items-center">
                        <NavLink to = '/login' className="btn btn-link text-xs">Log In</NavLink>
                    </div>
                 </div>
            </div>
        </div>
    )
}