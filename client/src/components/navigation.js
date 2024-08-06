import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";

export default function Navigation() {

    const {currentUser} = useContext(AuthContext)
    return (
        <div className = "p-1 pr-2 pl-2 font-calistoga">
            <div className="navbar bg-secondary rounded-xl ">
                <div className="flex-1 sm:pl-1">
                    <a className = "btn btn-ghost">
                        <img className = "w-6 sm:w-9 pb-.5"src = "/closetly.png" ></img>
                        <p className= "text-md sm:text-xl">closetly</p>
                    </a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-2 text-xs sm:text-sm">
                        <p className="pr-1">{currentUser.firstname}</p>
                        <p>{currentUser.lastname}</p>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}