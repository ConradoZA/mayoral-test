import MoreIcon from '@mui/icons-material/AddCircleOutlineRounded';
import LessIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import { KeyboardEvent, useRef } from 'react';

import { Search } from './search/Search';
import { SearchIconWrapper } from './search/SearchIconWrapper';
import { StyledInputBase } from './search/StyledInputBase';

const NavBar = () => {
  const inputRef = useRef<HTMLInputElement>();
  const prepareSearch = (e: KeyboardEvent): void => {
    console.log(e);
    console.log(inputRef.current.value);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' color='inherit'>
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, width: '100vw' }}>
            <Box sx={{ flexGrow: 4 }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder='Buscar'
                  inputProps={{
                    'aria-label': 'buscar',
                    ref: (el: HTMLInputElement) => (inputRef.current = el),
                    onKeyUp: (e) => prepareSearch(e),
                  }}
                />
              </Search>
            </Box>
            <Box sx={{ flexGrow: 3 }} />
            <Box sx={{ flexGrow: 1 }}>
              <IconButton
                edge='end'
                color='primary'
                aria-label='less products per row'
                sx={{ mr: 2, mt: -1, mb: 0 }}
              >
                <LessIcon sx={{ fontSize: 40 }} />
              </IconButton>
              <IconButton
                edge='start'
                color='primary'
                aria-label='more products per row'
                sx={{ mt: -1, mb: 0 }}
              >
                <MoreIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'flex', sm: 'none' }, width: '100vw', flexWrap: 'wrap' }}>
            <Box sx={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
              <IconButton
                edge='end'
                color='primary'
                aria-label='less products per row'
                sx={{ mr: 2, mt: -1, mb: 0 }}
              >
                <LessIcon sx={{ fontSize: 40 }} />
              </IconButton>
              <IconButton
                edge='start'
                color='primary'
                aria-label='more products per row'
                sx={{ mt: -1, mb: 0 }}
              >
                <MoreIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </Box>
            <Box sx={{ width: '100vw', mr: 4 }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase placeholder='Buscar' inputProps={{ 'aria-label': 'buscar' }} />
              </Search>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
