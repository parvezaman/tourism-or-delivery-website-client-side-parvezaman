import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const ShowBookingDetails = (props) => {
    
    return (
        <div>
            {props.booking.packageName}
        </div>
    );
};

export default ShowBookingDetails;