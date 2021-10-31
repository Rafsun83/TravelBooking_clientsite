import React, { useEffect, useState } from 'react';
import Offerbooked from '../Offers/Offerbooked';

const Traveloffer = () => {
    const [offers, setOffers] = useState([])
    console.log(offers)
    useEffect(() => {
        fetch('http://localhost:5000/traveloffer')
            .then(res => res.json())
            .then(data => setOffers(data))
    }, [])
    return (
        <div id="offer">
            <h2 className="text-center">This is our vacation offer</h2>

            <div className="travel-booked m-5">
                {
                    offers.map(offer => <Offerbooked
                        key={offer.id}
                        offer={offer}
                    ></Offerbooked>)
                }

            </div>






        </div>
    );
};

export default Traveloffer;