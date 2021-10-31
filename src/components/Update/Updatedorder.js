import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';

const Updatedorder = () => {
    const { bokkingId } = useParams()

    const [updated, setUpdated] = useState({})
    useEffect(() => {
        fetch(`https://dreadful-cat-40414.herokuapp.com/booked/${bokkingId}`)
            .then(res => res.json())
            .then(data => setUpdated(data))
    }, [bokkingId])



    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);

        // axios.post('https://dreadful-cat-40414.herokuapp.com/bookedOrder', data)
        //     .then(res => {

        //         if (res.data.insertedId) {
        //             alert('added sucessfully')
        //             reset();
        //         }
        //     })
    }

    const { users } = UseAuth();

    return (
        <div>


            <div>

                <h3 className="text-center mt-5">This is your Update bookingId: {bokkingId}</h3>

                <div className="Shipping-info">
                    <form className="Shipping-form" onSubmit={handleSubmit(onSubmit)}>

                        <input defaultValue={users.displayName} {...register("name", { required: true, maxLength: 20 })} />
                        <input defaultValue={users.email} {...register("email")} />
                        {errors.email && <span>This field is required</span>}

                        <input type="submit" value="Save update" />



                    </form>
                </div>
            </div>
        </div>
    );
};

export default Updatedorder;