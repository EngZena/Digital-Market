import React from 'react'
import './Basket.css'

export const Basket = (props) => {
    return (
        <div>
            {props ? props.basket.map((prod, index) =>
                <div className="row" key={index}>
                    <div className="column" >
                        <p >{prod.name}</p>
                    </div>
                    <div className="column" >
                        <p >{prod.price}</p>
                    </div>
                    <div className="column" >
                        <button className="deleteBtn" onClick={() => props.removeFromTheBasket(prod.name)}>Delte</button>
                    </div>
                </div>
            )
                : null}
        </div>
    )
}