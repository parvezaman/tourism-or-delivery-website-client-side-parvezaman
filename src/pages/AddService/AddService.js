import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm({
        defaultValues:{
            status: "pending"
        }
    });
    const onSubmit = data => {
        console.log(data);
    
        axios.post('http://localhost:5000/services', data)
        .then(res => {
            console.log(res);

            if(res.data.insertedId){
                alert("Thank You!!! Service Added Successfully!");
                reset();
            }
        })
        };
    return (
        <div className="add-service">
            <h3 className="text-center">Let's Add A Service</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Add a Name to the Service/Package" required />
                <textarea {...register("description")} placeholder="Would you mind adding a little description" required/>
                <input type="number" {...register("price")} placeholder="Suggest us your desiered price level" required/>
                <input {...register("imageUrl")} placeholder="Give us related image url" required/>
                <input className="btn btn-info" type="submit" />
            </form>
        </div>
    );
};

export default AddService;

