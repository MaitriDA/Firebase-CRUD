import React, { useEffect, useState } from 'react';
import '../style/Events.css';
import Event from './Event.js';
import axios from 'axios';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Events = () => {
    const [people, setPeople] = useState([]);
    const [value, setValue] = useState(null);

    const getPeople = async () => {
        const details = await axios.get('http://localhost:4000/');
        setPeople(details.data);
    }
    useEffect(() => {
        getPeople();
    }, []);


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const getByLocation = async (e) => {
        const details = await axios.get(`http://localhost:4000/getByLocation/${e}`);
        setPeople(details.data);
    }
    const handleCloseLocation = (e) => {
        if (e == 'hyd') {
            getByLocation('Hyderabad');
        }
        else if (e == 'ben') {
            getByLocation('Bangalore');
        }
        else if (e == 'chen') {
            getByLocation('Chennai');
        }
        setAnchorEl(null);
    }

    const getByGender = async (e) => {
        const details = await axios.get(`http://localhost:4000/getByGender/${e}`);
        setPeople(details.data);
    }
    const handleCloseGender = (e) => {
        if (e == 'male') {
            getByGender('Male');
        }
        else if (e == 'female') {
            getByGender('Female');
        }
        setAnchorEl(null);
    }

    const handleCloseDate=async()=>{
        const d=String(value.$D);
        const m=value.$M;
        const y=String(value.$y);
        var date1;
        if(m===0){
            date1=d+'-Jan-'+y[2]+y[3];
        }
        console.log(date1);
        const details = await axios.get(`http://localhost:4000/getByDate/${date1}`);
        setPeople(details.data);
        setAnchorEl(null);
    }

    return (
        <div className='events_main'>
            <div className='events_heading_main'>
                <div className='events_heading'>Events</div>
                <div className='event_menu'>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        Dashboard
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem>
                            <Button
                            >
                                Location
                            </Button>
                            <MenuItem onClick={() => handleCloseLocation('hyd')}>Hyderabad</MenuItem>
                            <MenuItem onClick={() => handleCloseLocation('ben')}>Bangalore</MenuItem>
                            <MenuItem onClick={() => handleCloseLocation('chen')}>Chennai</MenuItem>
                        </MenuItem>
                        <MenuItem>
                            <Button
                            >
                                Gender
                            </Button>
                            <MenuItem onClick={() => handleCloseGender('male')}>Male</MenuItem>
                            <MenuItem onClick={() => handleCloseGender('female')}>Female</MenuItem>
                        </MenuItem>
                        <MenuItem >
                            <Button>
                                Date
                            </Button>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Basic example"
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                            <Button onClick={handleCloseDate}>
                                DONE
                            </Button>
                        </MenuItem>
                    </Menu>
                </div>
            </div>
            <div className='event_content'>
                {
                    people.map((e) => (
                        <Event detail={e} />
                    ))
                }
            </div>
        </div>
    )
}

export default Events
