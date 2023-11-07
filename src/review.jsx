import React, { useState } from 'react';
import reviews from './data.js';
import './index.css';

export default function Card() {
    const [index, setIndex] = useState(1);

    function Inc() {
        setIndex(index === reviews.length ? 1 : index + 1);
    }

    function Dec() {
        setIndex(index === 1 ? reviews.length : index - 1);
    }

    function SupriseIndex() {
        setIndex(Math.floor(Math.random() * reviews.length) + 1);
    }

    let review = null;

    reviews.forEach((reviewItem) => {
        if (reviewItem.id === index) {
            review = (
                <div 
                className="flex flex-col justify-between items-center gap-4 p-4 px-10 bg-white w-1/2 shadow-slate-600 shadow-2xl " 
                key={index}>
                    <div className='bg-purple-400 rounded-full'>
                        <img className='relative right-3 top-2 w-44 h-44 object-cover rounded-full' src={reviewItem.image} alt={reviewItem.name} />
                    </div>
                    <div className="flex flex-col justify-center items-center capitalize">
                        <h1 className='text-2xl text-center' >{reviewItem.name}</h1>
                        <h2 className='text-xl text-purple-600 text-center' >{reviewItem.job}</h2>
                    </div>
                    <p className="font-serif text-center">{reviewItem.text}</p>
                    <div className="flex justify-between gap-5 items-center text-purple-600">
                        <button className='text-3xl' onClick={()=>Dec()}> &lt; </button>
                        <button className='text-3xl' onClick={()=>Inc()}> &gt; </button>
                    </div>
                    <button className='text-xl bg-purple-400 text-white p-1 ' onClick={()=>SupriseIndex()}>Suprise Me</button>
                </div>
            );
        }
    });

    return review;
}
