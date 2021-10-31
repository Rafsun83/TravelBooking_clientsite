import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Myorder/Myorders.css'



const Myorders = ({ order }) => {
    const { _id, name, bookedId, Adress, phone } = order
    // const [Order, setOrder] = useState();

    // Delete an
    const handledelete = id => {
        const url = `https://dreadful-cat-40414.herokuapp.com/bookedOrder/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('delete succesfully')
                    // const remainigOrdes = order.filter(order => order._id !== id)
                    // setOrder(remainigOrdes)


                }
            })

    }





    return (
        <div className="total_orders">
            <div className="myorders">


                <p><strong>BookedId:</strong> {bookedId}</p>
                <p> <strong>Name:</strong> {name}</p>
                <p> <strong>Adress:</strong> {Adress}</p>
                <p> <strong>Phone:</strong> {phone}</p>
                <Button onClick={() => handledelete(_id)} variant="danger" className="p-2">Delete order</Button>
                <Link to={`/update/${_id}`}>
                    <Button >Update</Button>
                </Link>
            </div>

        </div>
    );
};

export default Myorders;
