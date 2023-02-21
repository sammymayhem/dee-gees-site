import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Tour from './components/Tour';
import Merch from './components/Merch';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='tour' element={<Tour />} />
            <Route path='merch' element={<Merch />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
