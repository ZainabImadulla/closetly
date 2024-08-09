import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export default function Navigation() {

    const {currentUser, logout} = useContext(AuthContext)

    const navigate = useNavigate()
    const handleLogout = () => {
        logout();
        navigate("/")
    }
    return (
        <div className = "p-1 pr-2 pl-2 font-calistoga">
            <div className="navbar bg-secondary rounded-xl ">
                <div className="flex-1 sm:pl-1">
                    <a className = "btn btn-ghost">
                        <img className = "w-6 sm:w-9 pb-.5"src = "/closetly.png" ></img>
                        <p className= "text-md sm:text-xl">closetly</p>
                    </a>
                </div>
             
                <ul className="menu menu-horizontal px-2 text-xs sm:text-sm flex items-center">
                    <p className="pr-1">{currentUser.firstname}</p>
                    <p>{currentUser.lastname}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" onClick = {handleLogout}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                    </svg>
                    
                </ul>
             
            </div>
        </div>
        
    )
}