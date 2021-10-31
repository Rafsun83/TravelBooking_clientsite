import React, { useEffect, useState } from 'react';
import Offerbooked from '../Offers/Offerbooked';

const Traveloffer = () => {
    const [offers, setOffers] = useState([])
    console.log(offers)
    useEffect(() => {
        fetch('https://dreadful-cat-40414.herokuapp.com/traveloffer')
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