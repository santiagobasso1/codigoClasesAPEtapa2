import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
//ItemListContainer contendrá a ItemList, se encarga de la consulta con la API y la obtención de estos datos
const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    //https://6551e4245c69a7790329376d.mockapi.io/ejemploProductos
    const fetchData = async () => {
      try {
        const response = await fetch('https://6551e4245c69a7790329376d.mockapi.io/ejemploProductos');
        const data = await response.json();


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
