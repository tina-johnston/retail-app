import Checkout from '../components/Checkout/Checkout';
import Header from '../components/Layout/Header';
import Layout from '../components/Layout/Layout';
import ProductList from '../components/Products/ProductList';

export default function Home() {
  return (
    <>
      <Header />
      <Layout>
        <ProductList />
        <Checkout />
      </Layout>
    </>
  );
}
