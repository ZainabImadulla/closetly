import React from "react";
import Pant1 from "/Users/zainabimadulla/Desktop/closetly/client/src/images/pants49.jpeg"
import Pant2 from "/Users/zainabimadulla/Desktop/closetly/client/src/images/pants12.jpeg"
import Top from "/Users/zainabimadulla/Desktop/closetly/client/src/images/t-shirt.jpeg"
import Jacket from "/Users/zainabimadulla/Desktop/closetly/client/src/images/jacket1.jpeg"
import Navigation from "../components/navigation";
export default function Home({user}){
    const items = [
        {
            id: 1,
            title: "Dark Wash Jeans",
            type: "pant",
            img: Pant1
        },
        {
            id: 2,
            title: "White Bell Bottom Jeans",
            type: "pant",
            img: Pant2
        },
        {
            id: 3,
            title: "Black Graphic Tee",
            type: "top",
            img: Top
        },
        {
            id: 4,
            title: "White Patagonia Jacket",
            type: "jacket",
            img: Jacket
        }
    ];
    return (
        <div className = "flex flex-col">
            <Navigation user = {user}/>
            <div className = "pr-3 pl-3 sm:pr-12 sm:pl-12 pt-5 text-2xl"> 
                <h1>{user.firstName}'s Closet</h1>
                <div className="divider"></div>
                <div className = "flex flex-wrap gap-2 sm:gap-4">
                    <button className="flex-initial btn btn-sm lg:w-40 btn-outline text-secondary"> all </button>
                    <button className="flex-initial btn btn-sm lg:w-40 btn-outline btn-primary"> tops </button>
                    <button className="flex-initial btn btn-sm lg:w-40 btn-outline btn-primary"> bottoms </button>
                    <button className="flex-initial btn btn-sm lg:w-40 btn-outline btn-primary"> shoes </button>
                    <button className="flex-initial btn btn-sm lg:w-40 btn-outline btn-primary"> jackets </button>
                </div>
                <div className="divider"></div>
            </div>
            <div className = "flex flex-wrap pr-3 pl-3 sm:pr-12 sm:pl-12 gap-4 sm:gap-8 m-auto">
                <div className="flex card card-compact bg-base-100 w-32 md:w-64 justify-center items-center" onClick={()=>document.getElementById('my_modal_1').showModal()}>
                <button className="btn btn-circle btn-outline">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4" />
                    </svg>
                </button>

                </div>
                <dialog id="my_modal_1" className="modal">
                    <div className="flex flex-col modal-box items-center justify-center">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <form className = "flex flex-col justify-center items-center">
                            <h1 className = "pb-5"> Add a new clothing item:</h1>
                            <div className = "pb-5 w-full max-w-xs">
                                <input type="text" placeholder="description" className="input input-bordered w-full max-w-xs rounded-3xl" />
                            </div>
                            <div className = "pb-5">
                                <input
                                type="file"
                                className="file-input file-input-bordered file-input-secondary w-full max-w-xs rounded-3xl text-xs" />
                            </div>
                            <button className="btn bg-secondary rounded-3xl">submit</button>
                        </form>
                    </div>
                </dialog>
                {items.map((item) => (
                    <div className = "card card-compact bg-base-200 w-32 md:w-64" key = {item.id}> 
                        <figure>
                            <img src = {item.img} alt = ""/>
                        </figure>
                            <div className = "card-body text-nuetral">
                                <h2 className = "text-base text-xs"> {item.title} </h2>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    )

}