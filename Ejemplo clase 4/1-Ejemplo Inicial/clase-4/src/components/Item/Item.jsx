import React from 'react'
import './Item.css'
export default function Item({title, description, price, stock,imagen}) {
    return (
        <div className="card espacio customCard" style={{ width: "18rem" }}>
            <img className="card-img-top" src={imagen} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    Descripcion:
                    {description}
                </p>
                <p>Price: {price}</p>
                <p>Stock: {stock}</p>
                <a href="#" className="btn btn-primary">
                    Comprar
                </a>
            </div>
        </div>


    )
}
