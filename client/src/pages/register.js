import React from "react";
import { NavLink } from "react-router-dom";
export default function Register(){
    return (
        <div className = "flex justify-center items-center p-3 sm:p-24 h-screen ">
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body flex items-center justify-center">
                    <h2 className="card-title">Register</h2>
                    <form className = "flex flex-col justify-center items-center">
                            <div className = "flex justify-center items-center pt-5 space-x-5">
                                <input type="text" placeholder="first name" className="input input-bordered w-full max-w-xs rounded-3xl" />
                                <input type="text" placeholder="last name" className="input input-bordered w-full max-w-xs rounded-3xl" />
                            </div>
                            <div className = "pt-5 pb-5 w-full max-w-xs">
                                <input type="text" placeholder="email" className="input input-bordered w-full max-w-xs rounded-3xl" />
                            </div>
                            <div className = "pb-5 w-full max-w-xs">
                                <input type="text" placeholder="password" className="input input-bordered w-full max-w-xs rounded-3xl" />
                            </div>
                           
                            <button className="btn bg-secondary rounded-3xl">Sign Up</button>
                    </form>
                    <div className = "flex justify-center items-center">
                        <NavLink to = '/login' className="btn btn-link text-xs">Log In</NavLink>
                    </div>
                 </div>
            </div>
        </div>
    )
}