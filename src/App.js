import React from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navigation from './component/Navigation';
import { getData } from './redux/books/books';

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div className="bg w-11/12 lg:w-10/12 mx-auto my-10 shadow shadow-gray-400">
      <Navigation />
      <Outlet />
    </div>
  );
};

export default App;
