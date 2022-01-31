import Image from 'next/image';
import styles from './Product.module.css';
import Button from '../../UI/Button'



const Product = (props) => {
  const {title, image, description, price} = props
  return (
    <div className={styles.product}>
      <Image className={styles.image} src={'/' + image} alt={title} width={100} height={250} />
      <h1>{title}</h1>
      <h3>{price}</h3>
      <p>{description}</p>
      <Button>add to cart</Button>
    </div>
  );
};

export default Product;
