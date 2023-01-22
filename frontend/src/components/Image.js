import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../style/Image.css';


const Image = () => {
  const id=useParams();
  console.log(id.key);
  const [image,setImage]=useState("");
  const [gender,setGender]=useState("");
  const getImage=async()=>{
    const det=await axios.get(`http://localhost:4000/getByID/${id.key}`);
    console.log(det.data);
    setImage(det.data.Image);
    setGender(det.data.Gender);
  }
  useEffect(() => {
    getImage();    
});
  return (
    <div className='image_main'>
        <div className='image_heading'>{gender}</div>
        <div className='image_image'>
            <img className='image_image_sizing' src={image} alt="" srcset="" />
        </div>
    </div>
  )
}

export default Image