import { Grid } from '@mui/material';
import { Article } from 'pages/api/data/data';
import OneArticle from './OneArticle';
import styles from './productsStyles.module.css';

interface ListProps {
  list: Article[];
}
const ProductsList = ({ list }: ListProps) => {
  const nrPerRow = 2;
  return (
    <Grid
      container
      columnSpacing={1}
      columns={{ xs: nrPerRow, sm: nrPerRow % 2 == 0 ? 6 : 4 }}
      justifyContent='space-around'
      maxWidth={'95%'}
    >
      {list.map((item: Article) => (
        <Grid item xs={1} sm={1} minWidth={{ xs: '45%', sm: '18%' }} key={item.id}>
          <OneArticle data={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsList;
