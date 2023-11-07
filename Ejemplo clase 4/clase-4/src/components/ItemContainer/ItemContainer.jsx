import React from 'react';
import Item from '../Item/Item';

export default function ItemContainer() {
  const productArray = [
    { title: "Arroz", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam fuga dolorum minima error natus quo quae eligendi accusamus est suscipit. Eum aperiam consequatur provident tenetur, hic unde deleniti nam ex.", price: "$500", stock: "40",thumbnail:"https://www.molinos.com.ar/wp-content/uploads/2022/09/Gallo-arroz-preparado-mixdevegetales.webp" },
    { title: "Fideos", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum enim adipisci, impedit tempora placeat voluptas dolore, deserunt nesciunt aliquid itaque recusandae doloribus velit harum? Molestiae illo esse odit laudantium fugit. ", price: "$800", stock: "60",thumbnail:"https://media.f2h.shop/media/catalog/product/cache/ab45d104292f1bb63d093e6be8310c97/7/7/7790070318282.jpg" },
    { title: "Sombrillas", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, ea. Quaerat deserunt, ipsam suscipit sunt libero ipsum, culpa recusandae in amet explicabo hic ad praesentium animi iusto, eveniet quasi nemo!", price: "$1000", stock: "40",thumbnail:"https://acdn.mitiendanube.com/stores/001/338/668/products/sombrilla-200-roja-21-d213cffae397cdde0d16003121394959-640-0.jpg" },
    { title: "Auriculares", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis numquam quod adipisci assumenda tenetur, ab in, velit molestiae porro est vel veniam voluptatum, ipsam commodi beatae excepturi eius. Maxime, quae!", price: "$3500", stock: "40",thumbnail:"https://images.philips.com/is/image/PhilipsConsumer/TAH8506BK_00-IMS-es_AR?wid=420&hei=360&$jpglarge$" }
  ];

  return (
    <div>
      {productArray.map((product) => (
        <Item key={product.title} title={product.title} description={product.description} price={product.price} stock={product.stock} imagen={product.thumbnail} />
      ))}
    </div>
  );
}