import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Routes>

        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;

