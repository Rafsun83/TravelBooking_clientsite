import React, { useEffect, useState } from 'react';
import Booked from '../Booked/Booked';
import '../Booking/Bokking.css'


const Bokking = () => {
    const [booking, setBooking] = useState([])
    useEffect(() => {
        fetch('https://dreadful-cat-40414.herokuapp.com/booked')
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])
    return (
        <div id="services">

            <h3 className="text-primary mt-5 text-center mb-5">This is Our Service</h3>

            <div className="travel-booked m-5" >
                {
                    booking.map(booked => <Booked
                        key={booked.id}
                        users={booked}
                    ></Booked>)
                }
            </div >
        </div >
    );
};

export default Bokking;