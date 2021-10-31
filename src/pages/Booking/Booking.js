import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './Booking.css';
import axios from 'axios';


const Booking = () => {
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            status: "Pending"
          }
    });

    const [details, setDetails] = useState([]);
    const [specificDetail, setSpecificDetail] = useState({});
    const { name, imageUrl, description, price, status } = specificDetail;

    console.log(details);
    console.log(specificDetail);

    const { _id } = useParams();
    console.log(_id);

    useEffect(() => {
        fetch('https://eerie-treat-99297.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);

    useEffect(() => {
        if (details.length > 0) {
            const matchedService = details.find(detail => detail._id == _id);
            setSpecificDetail(matchedService);
        }
    }, [details]);

    const onSubmit = data => {
        console.log(data);

        axios.post('https://eerie-treat-99297.herokuapp.com/bookings', data)
        .then(res => {
            console.log(res);

            if(res.data.insertedId){
                alert("Thank You!!! Your booking is now under processing!");
                reset();
            }
        })
    };

    return (
        <div className="container text-center">
            <h3>Specific Details of your Desired Package/Plan</h3>
            <br />
            <h1>{name}</h1>
            <br /><br />
            <img src={imageUrl} alt="" className="mt-5 mb-5 img-fluid" />
            <p className="mt-5 mb-5">{description}</p>
            <h3>Price: {price} BDT</h3>
            <h5 className="mt-5 mb-5 text-danger">Status: {status}</h5>
            <br /><br /><br />
            <h3>Please conform your Booking</h3>
            <br />
            <div className="submit-address">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("packageName")} placeholder="Please enter the name of your desired package" required />
                    <input {...register("name")} placeholder="Tell us your Name Please" required />
                    <input {...register("email")} placeholder="Tell us your email Please" required />
                    <textarea {...register("reasonOfChosing")} placeholder="What made you to choose this package. Your opinion will be used to improve our services" required />
                    <textarea {...register("address")} placeholder="Please share your address" required />
                    
                    <input {...register("imageUrl")} placeholder="Help us identifying you with your image url" required />
                    <input className="btn btn-info" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Booking;