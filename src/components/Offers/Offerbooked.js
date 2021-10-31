import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Offerbooked = ({ offer }) => {
    const { _id, location, description, Price, img } = offer
    return (
        <div className="travel">
            <img src={img} alt="" />
            <h4>{location}</h4>
            <h5>{description}</h5>
            <h5>{Price} BDT</h5>
            <Link to={`/confirm/${_id}`}>
                <Button>Booking</Button>
            </Link>

        </div>
    );
};

export default Offerbooked;