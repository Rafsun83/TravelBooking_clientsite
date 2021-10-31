import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import '../Addservice/Addservice.css'


const Addservice = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://dreadful-cat-40414.herokuapp.com/booked', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added sucessfully')
                    reset();
                }
            })

    }
    return (
        <div className="add-service">
            <h2 className="text-center mb-5">Please add service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
                <textarea placeholder="description" {...register("description")} />
                <input placeholder="img url" {...register("img")} />

                <input type="submit" />
            </form>


        </div>
    );
};

export default Addservice;