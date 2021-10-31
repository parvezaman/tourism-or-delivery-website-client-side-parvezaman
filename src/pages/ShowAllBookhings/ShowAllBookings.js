import React from 'react';

const ShowAllBookings = (props) => {
    const {name, packageName, email, status} = props.booking;
    return (
        <div className="container d-flex justify-content-between bg-light mb-2 justify-content-center align-items-center rounded p-3 border border-secondary">
            <div>
                <h3>{packageName}</h3>
                <h5><span>{name}</span>, <span>{email}</span></h5>
                <h6>Status: {status}</h6>
            </div>
            <div>
                <button className="btn btn-danger">Delete Order</button>
                <button className="btn btn-info ms-3">Conform Booking</button>
            </div>
        </div>
    );
};

export default ShowAllBookings;