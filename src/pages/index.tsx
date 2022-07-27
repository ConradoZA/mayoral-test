import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { server } from '../config';

import { NextPage } from 'next';
import ProductsList from 'components/products/ProductsList';
import { Article } from './api/data/data';

interface HomeProps {
  products: Article[];
}

const HomePage: NextPage = ({ products }: HomeProps): JSX.Element => {
  return (
    <div>
      <ProductsList list={products} />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${server}/products`);
  const products: Article[] = await res.json();

  return {
    props: {
      products,
    },
  };
};

export default HomePage;
