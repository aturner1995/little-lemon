import React from 'react';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard.js';

function Testimonials() {
    return (
        <>
            <h1 className='testimonials-title'>Testimonials</h1>
            <div className='testimonial-container'>
                <TestimonialCard name='Doug Wilson' review='Best food in town! Love the potatoes'/>
                <TestimonialCard name='Aaron Smith' review='My new fav spot. Great food!'/>
                <TestimonialCard name='Ben Perez' review='Great atmosphere and even better food'/>
                <TestimonialCard name='Adam Wilson' review='A must stop for their outdoor patio.'/>
            </div>
        </>
    )
}

export default Testimonials;