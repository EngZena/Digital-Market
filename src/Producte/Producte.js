import React from 'react'
import Card from '../Cards/Card'
import './Producte.css'
export const Producte = (props) => {
    let btn = props.showCards ? '-' : '+';
    return (
        <div>
            {props.elements.map((prod, index) => {
                return <div key={index}>
                    <div className='container' >
                        <div className="Producte"  >
                            <h2>{prod.name}</h2>
                        </div>
                        <div className="btn">
                            <button className="btnColor" onClick={props.toggleCards}>{btn}</button>
                        </div>
                    </div>
                    <Card
                        menu={prod.menu}
                        price={prod.price}
                        showCards={props.showCards}
                        basket={props.basket}
                        callBasket={props.callBasket}
                        addtoTheBasket={props.addtoTheBasket}
                    />
                </div>
            })}

        </div>
    );
}
export default Producte;
