import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const ShowBookingDetails = (props) => {
    const {packageName,status} = props.booking;

    return (
        <div className="container d-flex justify-content-between mb-3">
            {/* <h3> {props.booking.packageName}</h3> */}
        <div>
            <h3>{packageName}</h3>
            {/* <br /> */}
            <h6>Status: {status}</h6>
        </div>
        <div>
            <button className="btn btn-danger">Cancel Order</button>
        </div>
            
        </div>
    );
};

export default ShowBookingDetails;