import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import ShowBookingDetails from '../ShowBookingDetails/ShowBookingDetails';

const MyBookings = () => {
    const {user} = useAuth();
    console.log(user.email);
    
    const [bookings, setBookings] = useState([]);
    const [specificDetails, setSpecificDetails] = useState([]);


    useEffect(()=>{
        fetch('https://eerie-treat-99297.herokuapp.com/bookings')
        .then(res => res.json())
        .then(data => setBookings(data));
    },[])

    useEffect(()=>{
        if (bookings.length > 0) {
            const matchedService = bookings.filter(detail => detail.email == user.email);
            setSpecificDetails(matchedService);
        }
    },[bookings])
    console.log(specificDetails);
    return (
        <div>
            <h1 className="text-center">Showing all bookings of <span className="text-danger">{user.displayName}</span></h1>
            <br /><br /><br />
            {
                specificDetails.map(booking=> <ShowBookingDetails
                key={booking._id}
                booking={booking}
                />)
            }
        </div>
    );
};

export default MyBookings;