import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { Article } from 'pages/api/data/data';

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
      }}
    >
      <CardActionArea sx={{ height: 407 }}>
        <CardMedia component='img' image={p.data.image} alt='product image' />
        <CardContent>
          <Typography variant='subtitle1' component='div' sx={{ fontWeight: 'bold' }}>
            {p.data.name}
          </Typography>
          <Typography variant='body2' color='text.secondary' gutterBottom>
            {p.data.price}
            {p.data.discount && p.data.discount}
            {p.data.options?.length > 0 && 'Más colores'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ width: '100%', justifyContent: 'center' }}>
        <Button size='small' color='primary'>
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default OneArticle;
