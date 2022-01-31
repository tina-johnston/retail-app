import React from 'react';
import Button from '../../UI/Button'
import styles from './checkout.module.css';

const Checkout = () => {
  return (
    <div className={styles.checkout}>
      <h2>Total</h2>
      <h3>Sub-total<span>12.50</span></h3>
      <Button className={styles.Button}>checkout</Button>
    </div>
  );
};

export default Checkout;
