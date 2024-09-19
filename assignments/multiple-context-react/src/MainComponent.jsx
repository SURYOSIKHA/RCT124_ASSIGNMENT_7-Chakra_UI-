import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { UserContext } from './UserContext';

const MainComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, isLoggedIn, login, logout } = useContext(UserContext);

  return (
    <div>
      <h1>Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>

      {isLoggedIn ? (
        <div>
          <h2>Welcome, {user.name}!</h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Please login</h2>
          <button onClick={() => login({ name: 'User' })}>Login</button>
        </div>
      )}
    </div>
  );
};

export default MainComponent;
