import React from 'react';
import Item from '../Item/Item';
//ItemList obtiene los datos de ItemListContainer y hace el maquetado de como se renderizarán los productos, crea el contenedor y luego hace el mapeo de los productos
const ItemList = ({ products }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-4 mb-4">
          <Item product={product} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
