import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Booked/travel.css'





const Booked = ({ users }) => {
    const { name, description, img } = users

    return (
        <div>
            <div className="travel">
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>{description}</p>
                <Link to="/confirm">
                    <Button>Booking</Button>
                </Link>
            </div>



        </div>
    );
};

export default Booked;