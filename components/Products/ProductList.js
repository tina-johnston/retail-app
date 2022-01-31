import React from 'react';
import Product from './Product';
import styles from './ProductList.module.css'

const data = [
  {
    id: 'p1',
    title: 'sunset',
    price: 12.5,
    description: 'somewhere far away',
    image: 'images/sunset.jpg'
  },
  {
    id: 'p1',
    title: 'sunset',
    price: 12.5,
    description: 'somewhere far away',
    image: 'images/sunset.jpg'
  },
  {
    id: 'p1',
    title: 'sunset',
    price: 12.5,
    description: 'somewhere far away',
    image: 'images/sunset.jpg'
  },
  {
    id: 'p1',
    title: 'sunset',
    price: 12.5,
    description: 'somewhere far away',
    image: 'images/sunset.jpg'
  },
  {
    id: 'p1',
    title: 'sunset',
    price: 12.5,
    description: 'somewhere far away',
    image: 'images/sunset.jpg'
  },
  {
    id: 'p1',
    title: 'sunset',
    price: 12.5,
    description: 'somewhere far away',
    image: 'images/sunset.jpg'
  },
  {
    id: 'p1',
    title: 'sunset',
    price: 12.5,
    description: 'somewhere far away',
    image: 'images/sunset.jpg'
  },
  {
    id: 'p1',
    title: 'sunset',
    price: 12.5,
    description: 'somewhere far away',
    image: 'images/sunset.jpg'
  },
  {
    id: 'p1',
    title: 'sunset',
    price: 12.5,
    description: 'somewhere far away',
    image: 'images/sunset.jpg'
  },
];

const ProductList = (props) => {
  return (
    <div className={styles.section}>
      {data.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductList;
