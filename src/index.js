import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Books from './component/Books';
import Categories from './component/Categories';
import Store from './redux/configureStore';
import { getData } from './redux/books/books';

Store.dispatch(getData());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Books />} />
            <Route path="/categories" element={<Categories />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
);
