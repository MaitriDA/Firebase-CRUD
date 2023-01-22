import React, { useState } from 'react';
import '../style/Event.css';
import { useNavigate } from 'react-router-dom';


const Event = ({detail}) => {
  const navigate = useNavigate();
  return (
      <div className='event_main' onClick={() => navigate (`/detail/${detail.id}`)}>
        <div className='event_top'>
          <div>{detail.ID}: {detail.Location}</div>
          <div>{detail.Date} {detail.Time}</div>
        </div>
        <div className='event_botton'>Person Detected</div>
      </div>
  )
}

export default Event