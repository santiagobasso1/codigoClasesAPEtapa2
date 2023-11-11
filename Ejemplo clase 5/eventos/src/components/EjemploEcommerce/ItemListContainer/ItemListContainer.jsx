import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
//ItemListContainer contendrá a ItemList, se encarga de la consulta con la API y la obtención de estos datos
const ItemListContainer = () => {
  //Este estado es donde guardaré mis productos
  const [products, setProducts] = useState([]);
  //UseEffect porque sino se renderizaría infinitamente porque cambio el estado, al cambiar un estado recordemos que renderiza nuevamente el elemento, entonces
  //la linea de "setProducts(data)" se ejecutaría infinitamente
  useEffect(() => {
    //Creamos un fetch simple para traer los datos de una api de prueba gratuita (recordemos que es una función asincrona, por eso el async y los await)
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data)

        setProducts(data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
