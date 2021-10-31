import React, { useEffect, useState } from 'react';
import ShowAllBookings from '../ShowAllBookhings/ShowAllBookings';

const AllBookings = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/bookings')
        .then(res => res.json())
        .then(data => setBookings(data))
    },[])

    

    return (
        <div>
            <h3 className="text-center m-5">All Bookings ({bookings.length} bookings avaiable)</h3>
            {
                bookings.map(booking => <ShowAllBookings
                key={booking._id}
                booking={booking}
                />)
            }
        </div>
    );
};

export default AllBookings;