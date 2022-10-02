import React from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Navigation from './component/Navigation';
import { getData } from './redux/books/books';

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div className="bg-gray-50 w-11/12 lg:w-11/12 mx-14 my-14">
      <Navigation />
      <Outlet />
    </div>
  );
};

export default App;
