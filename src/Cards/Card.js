import React from 'react'
import './Card.css'

export const Card = (props) => {
    return (
        <div className="Cards firstColumn">
            {

                props.menu.map((prod, index) => {
                    return props.showCards ? <div className="Card" key={index}>
                        <p>{prod}</p>
                        <p>{props.price[index]}</p>
                        <button className="btnColor" onClick={() => props.addtoTheBasket(prod, props.price[index])}>
                            Add
                    </button>
                    </div> : null
                })}



        </div>
    )
}

export default Card;