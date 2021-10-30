import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const [details, setDetails] =useState([]);
    const [specificDetail, setSpecificDetail] = useState({});

    console.log(details);
    console.log(specificDetail);

    const {_id} = useParams();
    console.log(_id);
    
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setDetails(data))
    },[]);

    useEffect(()=>{
        if(details.length > 0){
            const matchedService = details.find(detail => detail._id == _id);
            setSpecificDetail(matchedService);
        }
    },[details])
    return (
        <div className="container text-center">
            <h3>Specific Details of your Desired Package/Plan</h3>
            <br />
            <h1>{specificDetail.name}</h1>
            <br /><br />
            <img src={specificDetail.imageUrl} alt="" className="mt-5 mb-5" />
            <p className="mt-5 mb-5">{specificDetail.description}</p>
            <h3>Price: {specificDetail.price} BDT</h3>
            <h5 className="mt-5 mb-5 text-danger">Status: {specificDetail.status}</h5>
        </div>
    );
};

export default Booking;