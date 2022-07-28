import { Article } from 'pages/api/data/data';

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

import style from '../../styles/OneArticle.module.css';

interface OneArticleProps {
  data: Article;
}

const OneArticle = (p: OneArticleProps) => {
  return (
    <Card
      variant='outlined'
      sx={{
        width: '100%',
        maxWidth: '333px',
        m: 2,
        border: '1px solid skyblue',
      }}
    >
      <CardActionArea
        sx={{ maxHeight: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <CardMedia component='img' image={p.data.image} alt='product image' />
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant='subtitle1' component='div' sx={{ fontWeight: 'bold' }}>
            {p.data.name}
          </Typography>
          <span className={p.data.discount ? style.discounted : style.price}>{p.data.price}€</span>
          <br />
          {p.data.discount ? (
            <span className={style.discount}>
              {`${p.data.discount}€`}
              {` (-${Math.round((parseInt(p.data.discount) * 100) / parseInt(p.data.price))}%)`}
            </span>
          ) : (
            <span style={{ visibility: 'hidden' }}>hidden</span>
          )}

          {p.data.options ? (
            <Typography component='p' variant='body2' color='text.secondary' gutterBottom>
              {'más colores'}
            </Typography>
          ) : (
            <Typography component='p' variant='body2' sx={{ visibility: 'hidden' }} gutterBottom>
              hidden
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ width: '100%', justifyContent: 'center' }}>
        <Button variant='contained' color='primary'>
          Añadir
        </Button>
      </CardActions>
    </Card>
  );
};

export default OneArticle;
