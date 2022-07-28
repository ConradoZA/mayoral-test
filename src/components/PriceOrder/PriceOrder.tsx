import { Stack, Switch, Typography } from '@mui/material';
import style from '../../styles/PriceOrder.module.css';

interface PriceOrderProps {
  order: 'ASC' | 'DES';
  setOrder: (value: 'ASC' | 'DES') => void;
}

const PriceOrder = (p: PriceOrderProps) => {
  return (
    <Stack className={style.order} direction='row' spacing={1} alignItems='center'>
      <Typography>Orden: </Typography>
      <Typography>Más barato 1º</Typography>
      <Switch
        checked={p.order === 'DES'}
        onChange={(el) => {
          el.target.checked ? p.setOrder('DES') : p.setOrder('ASC');
        }}
      />
      <Typography>Más caro 1º</Typography>
    </Stack>
  );
};

export default PriceOrder;
