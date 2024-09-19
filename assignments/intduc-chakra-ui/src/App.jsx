import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import TodoApp from './TodoApp'; 

function App() {
  return (
    <ChakraProvider>
      <TodoApp />
    </ChakraProvider>
  );
}

export default App;
