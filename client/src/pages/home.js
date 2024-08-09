import React, { useContext, useState, useEffect, useReducer } from "react";
import Navigation from "../components/navigation";
import { AuthContext } from "../context/authContext";
import axios from "axios";
import {Image} from 'cloudinary-react';
import ClothingRecognitionAI from "../components/clothingRecognitionAI";

export default function Home(){
    const [description, setDescription] = useState("");
    const [clothing, setClothing] = useState([]);
    const [image, setImage] = useState("");

    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    const handleImage = (e) => {
        setImage(e.target.files[0]);
    }

    const [rerender, doRerender] = useReducer(x=> x+1, 0);

    const clearForms = () => {
        document.getElementById("clothing-submit").reset();
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "closet");
        try {
            document.getElementById('my_modal_1').close();
            document.getElementById('loading').showModal();
            const res = await axios.post("http://api.cloudinary.com/v1_1/dnldvhhyw/image/upload", formData)
            const imageURL =  res.data.url;
            console.log(imageURL);
            const imgData = {
                "text": imageURL
            }
            try {
                console.log("finding classification")
                const res = await axios.post("http://3.26.221.210/predict", imgData);
                let classification = res.data.clothing;
                if(classification == "shirt" || classification == "pullover" || classification == "dress"
                || classification == "coat" || classification == "bag"){
                    classification = "top" 
                }else if(classification == "pant"){
                    classification = "pant"
                }else if(classification == "ankle boot" || classification == "sandal" || classification == "sneaker" ){
                    classification = "shoe"
                }else if(classification == "dress"){
                    classification = "dress"
                }
                console.log(classification);
                const input = {
                    description: description,
                    img: imageURL,
                    category: classification
                }
                try {
                    const res = await axios.post("/clothing/add", input)
                    console.log("clothing successfully added!")
                    document.getElementById('loading').close();
                    doRerender();
                    clearForms();
                } catch (err){
                    console.log(err.response.data)
                }
            } catch {
    
            }
            
        } catch(err){
        }
        
    }

    useEffect(()=> {
        const fetchAllClothing = async () => {
            try{
                const res = await axios.get("/clothing/all")
                setClothing(res.data)
                console.log(res.data)
            } catch(err){
                console.log(err)
            }
        }
        fetchAllClothing()
    },[rerender])

    const handleTops = async () => {
        try{
            const res = await axios.get("/clothing/tops")
            setClothing(res.data)
            console.log(res.data)
        } catch(err){
            console.log(err)
        }
    }

    const handleBottoms = async () => {
        try{
            const res = await axios.get("/clothing/bottoms")
            setClothing(res.data)
            console.log(res.data)
        } catch(err){
            console.log(err)
        }
    }

    const handleShoes = async () => {
        try{
            const res = await axios.get("/clothing/shoes")
            setClothing(res.data)
            console.log(res.data)
        } catch(err){
            console.log(err)
            console.log(clothing.length)
        }
    }

    
    const {currentUser} = useContext(AuthContext)
    return (
        <div className = "flex flex-col">
            <Navigation/>
            <div className = "pr-3 pl-3 sm:pr-12 sm:pl-12 pt-5 text-2xl"> 
                <h1>{currentUser.firstname}'s Closet</h1>
                <div className="divider"></div>
                <div className = "flex flex-wrap gap-2 sm:gap-4">
                    <button className="flex-initial btn btn-sm lg:w-40 btn-outline text-secondary"onClick = {doRerender}> all </button>
                    <button className="flex-initial btn btn-sm lg:w-40 btn-outline btn-primary" onClick={handleTops}> tops </button>
                    <button className="flex-initial btn btn-sm lg:w-40 btn-outline btn-primary"  onClick={handleBottoms}> bottoms </button>
                    <button className="flex-initial btn btn-sm lg:w-40 btn-outline btn-primary"  onClick={handleShoes}> shoes </button>
                </div>
                <div className="divider"></div>
            </div>
            <div className = "flex flex-wrap pr-3 pl-3 sm:pr-12 sm:pl-12 gap-4 sm:gap-8">
                <div className={`flex card card-compact bg-base-100 w-32 md:w-64 items-center justify-center ${clothing.length === 0 ? 'h-80' : ''}`} >
                    <button className="btn btn-circle btn-outline"  onClick={()=>document.getElementById('my_modal_1').showModal()}>
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
                    <dialog id="my_modal_1" className="modal">
                        <div className="flex flex-col modal-box items-center justify-center">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <ul className="steps steps-horizontal pb-5">
                                <li className="step step-primary"></li>
                                <li className="step"></li>
                            </ul>
                            <form id = "clothing-submit" className = "flex flex-col justify-center items-center">
                                <h1 className = "pb-5"> Add a new clothing item:</h1>
                                <div className = "pb-5 w-full max-w-xs">
                                    <input type="text" placeholder="description" className="input input-bordered w-full max-w-xs rounded-3xl" onChange = {handleDescription} />
                                </div>
                                <div className = "pb-5">
                                    <input
                                    type="file"
                                    className="file-input file-input-bordered file-input-secondary w-full max-w-xs rounded-3xl text-xs" onChange = {handleImage} />
                                </div>
                                <button className="btn bg-secondary rounded-3xl" onClick = {handleSubmit}>submit</button>
                            </form>
                        </div>
                    </dialog>
                    <dialog id="loading" className="modal">
                        <div className="flex flex-col w-1/4 modal-box items-center justify-center">
                            <ul className="steps steps-vertical lg:steps-horizontal">
                                <li className="step step-primary"></li>
                                <li className="step step-primary"></li>
                            </ul>
                            <p className = "pb-8">classifying the image with ai!</p>
                            <span className="loading loading-spinner loading-lg"></span>
                        </div>
                    </dialog>
                </div>
                {clothing.slice(0).reverse().map((item) => (
                    <div className = "card card-compact bg-base-200 w-32 md:w-64" key = {item.id}> 
                        <figure>
                            <Image src = {item.img} alt = ""/>
                        </figure>
                            <div className = "card-body text-nuetral">
                                <h2 className = "text-base text-xs"> {item.description} </h2>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    )

}