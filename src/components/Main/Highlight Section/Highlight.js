import React from 'react';
import './Highlight.css'
import Card from './Card.js';

function Highlight() {
    return (
        <div className='highlight-container'>
            <div className='highlight-left'>
                <h2 className='highlight-title'>Our specials of the week!</h2>
                <div className='highlight-button'>Order Online</div>
            </div>
            <div className='highlight-card-container'>
                <div className='highlight-card'><Card price='$24.99' description="Tender chicken breast baked to perfection with a tangy lemon sauce, served over a bed of creamy roseto pasta. 
                The zesty lemon flavor perfectly complements the richness of the sauce for a delicious and balanced dish." name="Lemon Chicken Roseto" /></div>
                <div className='highlight-card'><Card price='$14.99' description="Thinly sliced potatoes grilled to crispy perfection, seasoned with lemon, garlic and rosemary. A simple yet 
                flavorful side dish that pairs perfectly with any grilled meat or fish." name="Lemon Grilled Potatoes"/></div>
                <div className='highlight-card'><Card price='$28.99' description="Succulent chicken breast and tender potatoes oven-roasted with lemon, olive oil and Mediterranean spices. 
                A classic dish that brings the flavors of the Mediterranean to your table, featuring a bright and zesty lemon taste that will awaken your taste buds." name="Mediterranean Lemon Chicken and Potatoes"/></div>
            </div>
        </div>
    )
}

export default Highlight;