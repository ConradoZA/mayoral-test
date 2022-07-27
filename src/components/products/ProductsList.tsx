import { Grid } from '@mui/material';
import { Article } from 'pages/api/data/data';
import OneArticle from './OneArticle';

interface ListProps {
  list: Article[];
  nrPerRow: number;
}
const ProductsList = (p: ListProps) => {
  return (
    <Grid
      container
      columnSpacing={1}
      columns={{ xs: p.nrPerRow, sm: p.nrPerRow % 2 == 0 ? 6 : 4 }}
      justifyContent='space-around'
      maxWidth={'95%'}
    >
      {p.list.map((item: Article) => (
        <Grid item xs={1} sm={1} minWidth={{ xs: '45%', sm: '18%' }} key={item.id}>
          <OneArticle data={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsList;
