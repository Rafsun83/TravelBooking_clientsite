import React, { useEffect, useState } from 'react';
import Booked from '../Booked/Booked';
import '../Booking/Bokking.css'


const Bokking = () => {
    const [booking, setBooking] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/booked')
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])
    return (
        <div id="services">

            <h3 className="text-primary mt-5 text-center mb-5">This is Our Service</h3>

            <div div className="travel-booked m-5" >
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