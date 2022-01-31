import React from 'react';
import Button from '../../UI/Button';
import Cart from '../../icons/Cart';
import styles from './HeaderCart.module.css';
export const HeaderCart = () => {
  return (
    <div className={styles.cart}>
      <Button>
        <span className={styles.icon}>
          <Cart />
        </span>
        <span className={styles.count}>3</span>
      </Button>
    </div>
  );
};
