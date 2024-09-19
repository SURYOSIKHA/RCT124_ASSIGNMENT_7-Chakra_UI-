import React from 'react';
import { ThemeProvider } from './ThemeContext';
import { UserProvider } from './UserContext';
import MainComponent from './MainComponent';

const App = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <MainComponent />
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
