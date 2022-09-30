import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { everyCategory, status } from '../redux/categories/categories';

const Categories = () => {
  const selector = useSelector(everyCategory);
  const dispatch = useDispatch();

  const clickHandler = () => {
    const text = 'Under Construction';
    dispatch(status(text));
  };

  return (
    <div className="flex justify-center items-center">
      {selector ? (
        <p className="text-center bg-blue-600 text-white font-semibold capitalize p-4 my-8">
          {selector.display}
        </p>
      ) : (
        <button
          type="button"
          className="bg-blue-600 text-white tracking-wider font-thin px-16 py-4 my-12 rounded-md uppercase"
          onClick={() => clickHandler()}
        >
          Check Status
        </button>
      )}
    </div>
  );
};

export default Categories;
