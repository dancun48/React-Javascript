
import React, {useState} from 'react';
import PropTypes from 'prop-types'

function MyComponent(){

    const [name, setName] = useState('Guest');
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState('');

    //dropdown menu for payment using <select></select>

    const [payment, setPayment] = useState('');

    //delivery mode using <radio></radio>

    const [delivery, setDelivery] = useState('Delivery');


    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value)
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }

    const handlePaymentChange = (event) => {
        setPayment(event.target.value);
    }

    const handleDeliveryChange = (event) => {
        setDelivery(event.target.value);
    }

    return(
            <>
                <div>

                    <label>Name: </label>
                    <input value={name} onChange={handleNameChange}/>
                    <p>Your name is {name}</p>

                    <input value={quantity} onChange={handleQuantityChange} type='number'/>
                    <p>Your quantity is {quantity}</p>

                    <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructions'/>
                    <p>Comment: {comment}</p>

                    <select value={payment} onChange={handlePaymentChange}>
                        <option value=''>Select an option</option>
                        <option>Visa</option>
                        <option>M-Pesa</option>
                        <option>MasterCard</option>
                        <option>PayPal</option>
                        <option>GiftCard</option>
                    </select>

                    <p>Payment: {payment}</p>

                    <label>
                        <input type='radio' value='Pick Up' checked={delivery === 'Pick Up'} onChange={handleDeliveryChange}></input>
                        Pick Up
                    </label>

                    <label>
                        <input type='radio' value='Delivery' checked={delivery === 'Delivery'} onChange={handleDeliveryChange}></input>
                        Delivery
                    </label>

                    <p>Shipping Mode: {delivery}</p>

                </div>

                <p>{name} has ordered {quantity} quantities, your mode of payment is {payment} and your shipping mode is {delivery}</p>

            </>)
}

MyComponent.PropTypes = {
    name: PropTypes.string,
}

export default MyComponent