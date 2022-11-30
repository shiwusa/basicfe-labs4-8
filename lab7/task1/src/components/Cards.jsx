import React from 'react';
import { BOOKS } from '../db';
import '../cards.css'

function Cards () {
    return (
        <div className='container'>
            {BOOKS.map(data => <Card info={data} key={data.title} />)}
        </div>
    );
};

function Card ({ info }) {
    const { img, title, price } = info;
    return (
        <div className='product'>
            <img src={img} alt='Product' />
            <p><b>Title:</b> {title}</p>
            <p><b>Price:</b> {price} $</p>
        </div>
    );
};
export default Cards;