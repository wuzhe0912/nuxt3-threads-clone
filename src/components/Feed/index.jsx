import { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import SideBar from './SideBar';
import styles from './style.module.css';

function Feed() {
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar />
        <Typography
          className={styles.copyRight}
          variant='body2'
          sx={{
            mt: 1.5,
            color: '#fff',
          }}
        >
          Copyright © 2022 Pitt Media
        </Typography>
      </Box>
      <Box>
        <Typography
          variant='h4'
          fontWeight='bold'
          mb={2}
          sx={{
            color: '#fff',
          }}
        >
          <span className={styles.videosText}>videos</span>
        </Typography>
      </Box>
    </Stack>
  );
}

export default Feed;
