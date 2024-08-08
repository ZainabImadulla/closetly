import React from "react";
import "/Users/zainabimadulla/Desktop/closetly/client/src/index.css"
import Pant1 from "/Users/zainabimadulla/Desktop/closetly/client/src/images/pants49.jpeg"
import Pant2 from "/Users/zainabimadulla/Desktop/closetly/client/src/images/pants12.jpeg"
import Top from "/Users/zainabimadulla/Desktop/closetly/client/src/images/t-shirt.jpeg"
import Jacket from "/Users/zainabimadulla/Desktop/closetly/client/src/images/jacket1.jpeg"
import { NavLink } from "react-router-dom";
import ClothingRecognitionAI from "../components/clothingRecognitionAI";


export default function Landing(){
    return (
        <div className = 'h-screen'>
            <div className="navbar bg-base-200">
                <div className="flex-1 pl-1">
                    <a className = "btn btn-ghost">
                        <img className = "w-9 pb-.5"src = "/closetly.png" ></img>
                        <p className= "text-xl font-calistoga">closetly</p>
                    </a>
                </div>
            </div>
            <div className = "flex flex-col lg:flex-row items-center justify-center">
                <div className = "basis-2/6 flex-col space-y-12 pt-16 sm:pt-20 w-4/6 md:pt-32 w-4/6 lg:pt-80 sm:items-center justify-center">
                    <div className = "text-center lg:text-left">
                        <h1 className = "font-calistoga text-4xl sm:text-6xl sm:text-nowrap"> Welcome to</h1>
                        <h1 className = "font-calistoga text-4xl sm:text-6xl"> Closetly</h1>
                        <p className = "pt-5"> an easy-to-use virtual closet to keep track of
                            all your clothes and make outfit planning that much
                            easier!
                        </p>
                    </div>
                    <div className=" flex w-full flex-col items-center justify-center lg:justify-start lg:flex-row">
                       <NavLink to = '/login' className=" bg-secondary btn lg:w-2/6  md:btn-md ">login</NavLink>
                        <div className="text-xs divider lg:divider-horizontal"></div>
                        <NavLink to = '/register' className=" bg-secondary btn  lg:w-2/6  md:btn-md">register </NavLink>
                    </div>
                </div>
                <div className = "basis-3/6 w-5/6 pt-10 sm:p-10 md:p-16 lg:pr-0 lg:pb-0 lg:pt-12 lg:pl-12 ">
                    <div className="mockup-browser bg-secondary borde">
                        <div className="mockup-browser-toolbar">
                            <div className="input">https://closetly.com</div>
                        </div>
                        <div className="bg-base-200 flex justify-center">
                            <img className = "w-full h-full"src = "/examplehome.png" ></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}