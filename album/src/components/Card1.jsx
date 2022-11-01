import React from 'react';
import '../style-sheets/Card1.css';

function Card1 ({name, number, cromo}) {
    return (
        <div className="card-info-container">
            
            <p>Character: <b>{name}</b></p>
            <p className="figurine">Figurine Number: <b>{number}</b></p>
            <div className="cromo">
            <small>{cromo ? "⭐ This figurine is cromo " : "❌ This figurine isn't cromo"}</small>
            </div>
        </div>
    )
}

export default Card1;