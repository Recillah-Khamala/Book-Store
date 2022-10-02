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
    <div className="bg-slate-100 w-11/12 mx-auto border border-gray-200 my-3 rounded">
      <div className="bg-gray-50 w-11/12 lg:w-10/12 mx-auto my-10 shadow-xl shadow-gray-400">
        <Navigation />
        <Outlet />
      </div>
    </div>
  );
};

export default App;
