import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Details = () => {
  const id=useParams();
  const [people,setPeople]=useState({});
  const getDetail=async()=>{
    const det=await axios.get(`http://localhost:4000/getByID/${id.key}`);
    setPeople(det.data);
  }
  useEffect(() => {
    getDetail();    
});
  return (
    <div className='details_main'>
        <div className='details_heading'>{people.ID}</div>
        <div className='details_heading'>Person Detected</div>

        <div className='details_info'>
            <div className='details_info_content'>Name: {people.Name}</div>
            <div className='details_info_content'>Location: {people.Location}</div>
            <div className='details_info_content'>Date: {people.Date}</div>
            <div className='details_info_content'>Time: {people.Time}</div>
        </div>

        <div className='details_info'>
            <div className='details_info_content'>Description</div>
            <div className='details_info_content'>{people.Name} detected in {people.Location} on <br/> {people.Date}.</div>
        </div>
    </div>
  )
}

export default Details