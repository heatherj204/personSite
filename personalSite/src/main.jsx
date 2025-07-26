import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css';
import App from './App';
import NotFound from "./pages/NotFound";
import Nav from "./components/Base";
import Building from "./pages/Building";


import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00838f',
    },
    secondary: {
      main: '#84ffff',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
  <BrowserRouter>
  <Nav />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/test" element={<Building />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  </ThemeProvider>
);