import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from 'components';
// styles
import 'normalize.css';
import 'App.css';
// Roboto font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const BoxBackgroundColor = '#000';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ background: BoxBackgroundColor }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
