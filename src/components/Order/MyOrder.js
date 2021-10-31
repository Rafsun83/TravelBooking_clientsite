import React, { useEffect, useState } from 'react';
import Myorders from '../Myorder/Myorders';


const MyOrder = () => {
    const [orders, setOrder] = useState([]);
    useEffect(() => {
        fetch('https://dreadful-cat-40414.herokuapp.com/bookedOrder')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])


    return (
        <div>
            <h3 className="text-center mb-5 mt-5">This is my Total orders</h3>
            <h4 className="text-center mb-5 mt-5">Total Order: {orders.length}</h4>
            {
                orders.map(order => <Myorders
                    key={orders._id}
                    order={order}
                >

                </Myorders>)

            }

        </div>
    );
};

export default MyOrder;