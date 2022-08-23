import { Component } from 'solid-js';
import { Routes, Route } from "@solidjs/router"

import { createTheme, ThemeProvider } from '@suid/material/styles';

import Default from './layouts/Default';
import Home from './pages/Home';
import Faq from './pages/Faq';

const theme = createTheme({
  palette: {
    background: {
      default: '#F8F7F1',
      paper: '#F8F7F1'
    },
    primary: {
      main: '#051E28'
    },
    secondary: {
      main: '#CEC89D'
    },
    error: {
      main: '#E93C0C'
    },
    warning: {
      main: '#FA7921'
    },
    info: {
      main: '#5DA9E9'
    },
    success: {
      main: '#0EAD69'
    }
  }
});

const App: Component = () => {
  return (
    <ThemeProvider theme={theme}>
	  <Default>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/faq" component={Faq} />
        </Routes>
	  </Default>
    </ThemeProvider>
  );
};

export default App;
