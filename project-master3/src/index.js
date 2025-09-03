import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';

const darktheme= {
  textColor:"whiteSmoke",
  backgroundColor:"#1c1c1c"
}

const lighttheme= {
  textColor:"#1c1c1c",
  backgroundColor:"whiteSmoke"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darktheme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);