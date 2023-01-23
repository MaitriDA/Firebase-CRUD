import React, { useEffect, useState } from 'react';
import '../style/Events.css';
import Event from './Event.js';
import axios from 'axios';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Events = () => {
    const [people,setPeople]=useState([]);
    const getPeople=async()=>{
        const details=await axios.get('http://localhost:4000/');
        setPeople(details.data);
    }
    useEffect(() => {
        getPeople();    
    });
    /*const people=[
        {
            id:191091006,
            name:'Maitri Amin',
            mobile:9324689206
        },
        {
            id:1563289,
            name:'Dipak Amin',
            mobile:9764953140
        }
    ]*/
  return (
    <div className='events_main'>
        <div className='events_heading'>Events</div>
        <div className='event_content'>
            {
                people.map((e)=>(
                    <Event detail={e}/>
                ))
            }
        </div>
    </div>
  )
}

export default Events