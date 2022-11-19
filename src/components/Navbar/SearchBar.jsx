import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from './style.module.css';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      // init search
      setSearchTerm('');
    }
  }

  return (
    <Paper
      component='form'
      onSubmit={handleSearch}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
      <input
        className={styles.searchBar}
        placeholder='Search Video'
        value=''
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton
        type='submit'
        sx={{
          p: '10px',
          color: '#f00',
        }}
        area-label='search'
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
