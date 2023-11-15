import React from 'react';
//Item representa un producto individual, renderizaremos varios de estos con el mapeo de el elemento padre (full bootstrap)
const Item = ({ product }) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={product.image} alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <br />
                <p className="card-text"> {product.description} </p>
                <p className='card-text'>${product.price}</p>
                <a onClick={()=>{alert("Proximamente!!!")}} className="btn btn-primary"> Comprar</a>
            </div>
        </div>

    );
};

export default Item;
