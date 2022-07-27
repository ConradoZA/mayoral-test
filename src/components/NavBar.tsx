import { useRef } from 'react';

import MoreIcon from '@mui/icons-material/AddCircleOutlineRounded';
import LessIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';

import { Search } from './search/Search';
import { SearchIconWrapper } from './search/SearchIconWrapper';
import { StyledInputBase } from './search/StyledInputBase';

interface NavBarProps {
  search: (value: string) => void;
  lessItems: () => void;
  moreItems: () => void;
  nrPerRow: number;
}

const NavBar = (p: NavBarProps) => {
  /* Valor de búsqueda */
  const inputBigRef = useRef<HTMLInputElement>();
  const inputSmallRef = useRef<HTMLInputElement>();
  const prepareBigSearch = (): string => {
    p.search(inputBigRef.current.value);
    return inputBigRef.current.value;
  };
  const prepareSmallSearch = (): string => {
    p.search(inputSmallRef.current.value);
    return inputSmallRef.current.value;
  };

  /* RENDER */
  const ButtonsBar = (): JSX.Element => {
    return (
      <>
        <IconButton
          disabled={p.nrPerRow % 2 !== 0}
          edge='end'
          color='primary'
          onClick={p.lessItems}
          sx={{ mr: 2, mt: -1, mb: 0 }}
        >
          <LessIcon sx={{ fontSize: 40 }} />
        </IconButton>
        <IconButton
          disabled={p.nrPerRow % 2 === 0}
          edge='start'
          color='primary'
          onClick={p.moreItems}
          sx={{ mt: -1, mb: 0 }}
        >
          <MoreIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </>
    );
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' color='inherit'>
        <Toolbar disableGutters>
          {/* Versión "desktop" */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, width: '100vw' }}>
            <Box sx={{ flexGrow: 4 }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder='Buscar'
                  inputProps={{
                    ref: (el: HTMLInputElement) => (inputBigRef.current = el),
                    onKeyUp: () => prepareBigSearch(),
                  }}
                />
              </Search>
            </Box>
            <Box sx={{ flexGrow: 3 }} />
            <Box sx={{ flexGrow: 1 }}>{ButtonsBar()}</Box>
          </Box>

          {/* Versión "mobile" */}
          <Box sx={{ display: { xs: 'flex', sm: 'none' }, width: '100vw', flexWrap: 'wrap' }}>
            <Box sx={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
              {ButtonsBar()}
            </Box>
            <Box sx={{ width: '100vw', mr: 4 }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder='Buscar'
                  inputProps={{
                    ref: (el: HTMLInputElement) => (inputSmallRef.current = el),
                    onKeyUp: () => prepareSmallSearch(),
                  }}
                />
              </Search>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
