import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import UseAuth from '../../Hooks/UseAuth';
import '../Confirmbooked/Confirmbooked.css'
import axios from 'axios';

const Confirmbooking = () => {
    const { bokkingId } = useParams()
    const [service, setSerevice] = useState({})
    useEffect(() => {
        fetch(`https://dreadful-cat-40414.herokuapp.com/booked/${bokkingId}`)
            .then(res => res.json())
            .then(data => setSerevice(data))
    }, [bokkingId])


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://dreadful-cat-40414.herokuapp.com/bookedOrder', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added sucessfully')
                    reset();
                }
            })
    }

    const { users } = UseAuth();
    return (
        <div>

            <h3 className="text-center mt-5">This is your confirm bookingId: {bokkingId}</h3>

            <div className="Shipping-info">
                <form className="Shipping-form" onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={bokkingId} {...register("bookedId")} />
                    <input defaultValue={users.displayName} {...register("name", { required: true, maxLength: 20 })} />
                    <input defaultValue={users.email} {...register("email")} />
                    {errors.email && <span>This field is required</span>}
                    <input placeholder="Adress" {...register("Adress",)} />
                    <input placeholder="City" {...register("City",)} />
                    <input placeholder="Phone number" {...register("phone")} />

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Confirmbooking;