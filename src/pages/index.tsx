import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import NavBar from '../components/NavBar';
import ProductsList from '../components/products/ProductsList';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { server } from '../config';
import { Article } from './api/data/data';

interface HomeProps {
  products: Article[];
}

const HomePage: NextPage = ({ products }: HomeProps): JSX.Element => {
  /* Botones - y + */
  const [nrPerRow, setNrPerRow] = useState<number>(1);
  const lessItems = (): void => {
    setNrPerRow(1);
  };
  const moreItems = (): void => {
    setNrPerRow(2);
  };

  /* Búsqueda */
  const [filteredProducts, setFilteredProducts] = useState<Article[]>([]);
  useEffect(() => {
    setFilteredProducts(products);
  }, []);
  const search = (value: string): void => {
    if (!value) {
      setFilteredProducts(products);
    } else {
      const tempFilter = products.filter((product: Article) =>
        product.name.toUpperCase().includes(value.trim().toUpperCase()),
      );
      setFilteredProducts(tempFilter);
    }
  };

  /* Ordenación */
  // FIXME: no consigo que re-renderice con los valores actuales de las tres cosas: productos/búsqueda, items por fila y ordenación
  const [order, setOrder] = useState<'ASC' | 'DES'>('ASC');

  useEffect(() => {
    const tempOrder = filteredProducts.length > 0 ? filteredProducts : products;

    tempOrder.sort((a, b) => {
      const x = a.discount ? a.discount : a.price;
      const y = b.discount ? b.discount : b.price;
      if (order === 'ASC') {
        return parseInt(x) - parseInt(y);
      } else {
        return parseInt(y) - parseInt(x);
      }
    });
    setFilteredProducts(tempOrder);
  }, [order]);

  /* RENDER */
  const navBarProps = {
    nrPerRow,
    moreItems,
    lessItems,
    search,
  };

  return (
    <div>
      <NavBar {...navBarProps} />
      <ProductsList list={filteredProducts} nrPerRow={nrPerRow} />
    </div>
  );
};

export default HomePage;

/* Llamada al servidor */
export const getStaticProps = async () => {
  const res = await fetch(`${server}/products`);
  const products: Article[] = await res.json();

  return {
    props: {
      products,
    },
  };
};
