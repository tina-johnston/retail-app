import React from 'react';
import { HeaderCart } from '../Cart/HeaderCart';
import styles from './Header.module.css'

const Header = () => {
  return <header className={styles.header}>
    <h1>products</h1>
    <HeaderCart />
  </header>;
};

export default Header;
