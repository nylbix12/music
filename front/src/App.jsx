import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './styles';
import Header from './components/Header';

import Home from './pages/Home';
import Categories from './pages/Categories';
import Profiles from './pages/Profiles';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Chat from './pages/Chat'


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
       <Header />
        <main style={{ minHeight: '80vh' }}>
          <Routes>
            {/* Page d'accueil */}
            <Route path="/" element={<Home />} />

            {/* Pages principales */}
            <Route path="/categories" element={<Categories />} />
            <Route path="/profiles/:category" element={<Profiles />} />
            <Route path="/Login" element ={<Login/>}  />
            <Route path="/Signup" element ={<Signup />}  />
            <Route path="/chat/:userId" element={<Chat />} />
            

           
          </Routes>
        </main>
      </BrowserRouter>
    </ThemeProvider>
  );
}