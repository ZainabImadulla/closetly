import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import axios from "axios"
export default function Login(){
    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState(null)

    const navigate = useNavigate();

    const handleInput = e => {
        setInput(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    

    const handleClick = async (e) => {
        try {
            const res = await axios.post("/auth/login", input)
            navigate("/closet");
        } catch(err){
            setError(err.response.data)
        }
    }

    return (
        <div className = "flex justify-center items-center p-3 sm:p-24 h-screen ">
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body flex items-center justify-center">
                    <h2 className="card-title">Login</h2>
                    <form className = "flex flex-col justify-center items-center">
                            <div className = "pt-5 pb-5 w-full max-w-xs">
                                <input type="email" name = "email" placeholder="email" className="input input-bordered w-full max-w-xs rounded-3xl" onChange = {handleInput} />
                            </div>
                            <div className = "pb-5 w-full max-w-xs">
                                <input type="password" name = "password" placeholder="password" className="input input-bordered w-full max-w-xs rounded-3xl" onChange = {handleInput}/>
                            </div>
                           
                            <button className="btn bg-secondary rounded-3xl" onClick = {handleClick}>submit</button>
                    </form>
                    {error && <ErrorMessage error = {error}/>}
                    <div className = "flex justify-center items-center">
                        <NavLink to = '/register' className="btn btn-link text-xs">Sign Up</NavLink>
                    </div>
                 </div>
            </div>
        </div>
    )
}