import { alpha, styled } from '@mui/material/styles';

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 10,
  borderColor: alpha(theme.palette.common.black, 0.15),
  borderWidth: 2,
  borderStyle: 'solid',
  backgroundColor: alpha(theme.palette.common.black, 0.01),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.05),
  },
  marginLeft: theme.spacing(2),
  marginRight: 0,
  width: '100%',
}));
