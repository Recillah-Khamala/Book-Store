import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './component/Navigation';
import Books from './component/Books';
import Categories from './component/Categories';

const App = () => (
  <div className="App">
    <Navigation />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
