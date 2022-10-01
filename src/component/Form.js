import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addData } from '../redux/books/books';
import Set from './Sticker';

const Form = () => {
  const { values, onChange, setValue } = Set();
  const dispatch = useDispatch();

  const { title, author } = values;
  const onSubmit = () => {
    const plusBook = {
      id: uuidv4(),
      title,
      author,
      categoty: 'Any',
    };
    dispatch(addData(plusBook));
    setValue({ title: '', author: '' });
  };

  return (
    <form
      action="#!"
      className="w-10/12 mx-auto border-t border-t-gray-300 pt-10"
    >
      <span className="text-xl font-semibold text-slate-300 block uppercase">
        Add New Book
      </span>
      <input
        type="text"
        name="title"
        value={title}
        className="w-5/12 p-2 border rounded mr-4 font-thin"
        placeholder="Enter book title"
        onChange={(e) => onChange(e)}
      />
      <input
        type="text"
        name="author"
        value={author}
        className="w-4/12 p-2 border rounded mr-4 font-thin"
        placeholder="Enter book author"
        onChange={(e) => onChange(e)}
      />
      <button
        type="button"
        className="py-2 px-14 rounded-md text-sm ml-2 bg-blue-600 text-white uppercase"
        onClick={onSubmit}
      >
        Add book
      </button>
    </form>
  );
};

export default Form;
