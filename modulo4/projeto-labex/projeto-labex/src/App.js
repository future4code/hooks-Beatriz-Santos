import React from 'react'
import Router from './Pages/Router/Router';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/theme'

function App() {
  return (
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
  );
}

export default App;
