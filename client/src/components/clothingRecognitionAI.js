import React, { useReducer, useState } from "react";
import axios from "axios";

export default function ClothingRecognitionAI() {
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    const handleImage = (e) => {
        setImage(e.target.files[0]);
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
                    window.location.reload();
                } catch (err){
                    console.log(err.response.data)
                }
            } catch {
    
            }
            
        } catch(err){
        }
        
    }
    
    return (
        <div>
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
                    <form className = "flex flex-col justify-center items-center">
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
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            </dialog>


            <dialog id="ai-screen" className="modal">
                <div className="flex flex-col w-1/4 modal-box items-center justify-center">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            </dialog>
        </div>
        
    )
}