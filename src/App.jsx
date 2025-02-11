import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<Homepage />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;

