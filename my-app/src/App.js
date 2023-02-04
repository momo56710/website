import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import About from './About';
import Hero from './Hero';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Navbar />
        <Hero/>
        <About />
      </Box>
    </ChakraProvider>
  );
}

export default App;
