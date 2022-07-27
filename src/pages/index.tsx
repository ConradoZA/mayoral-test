import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import NavBar from 'components/NavBar';
import ProductsList from 'components/products/ProductsList';
import { NextPage } from 'next';

import { server } from '../config';
import { Article } from './api/data/data';

interface HomeProps {
  products: Article[];
}

const HomePage: NextPage = ({ products }: HomeProps): JSX.Element => {
  return (
    <div>
      <NavBar />
      <ProductsList list={products} nrPerRow={2} />
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
