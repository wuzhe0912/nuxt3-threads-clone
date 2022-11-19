import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
// styles
import styles from './style.module.css';
import Logo from 'assets/logo.png';

function Navbar() {
  return (
    <Stack
      direction='row'
      alignItems='center'
      p={2}
      sx={{
        position: 'sticky',
        background: '#000',
        top: 0,
        justifyContent: 'space-between',
      }}
    >
      <Link to='/' className={styles.navbarLogo}>
        <img src={Logo} alt='Logo' height={45} />
      </Link>
      <SearchBar></SearchBar>
    </Stack>
  );
}

export default Navbar;
