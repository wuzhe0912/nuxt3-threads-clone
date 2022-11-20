import React from 'react';
import { Stack } from '@mui/material';
import { categories } from 'utils/constants';
import styles from './style.module.css';

function SideBar({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack
      direction='row'
      sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
      }}
    >
      {categories.map((category) => (
        <button
          key={category.name}
          className={styles.categoryButton}
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background: selectedCategory === category.name && '#fc1503',
          }}
        >
          <span
            style={{
              // color: selectedCategory === category.name ? '#fff' : '#fc1503',
              marginRight: '15px',
            }}
          >
            {category.icon}
          </span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
}

export default SideBar;
