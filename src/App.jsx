import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Catering from './pages/Catering';
import About from './pages/About';
import Contacts from './pages/Contacts';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<Homepage />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;

