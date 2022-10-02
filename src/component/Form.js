import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addData } from '../redux/books/books';

const Form = () => {
  const generateCategory = () => {
    const categories = ['Action', 'Drama', 'Fiction', 'Economy', 'Science Fiction', 'Money'];
    const randomInd = Math.floor(Math.random() * 6);
    return categories[randomInd];
  };

  const dispatch = useDispatch();

  const initialLocalState = { title: '', author: '' };

  const [formData, setFormData] = useState(initialLocalState);

  const addNewBook = () => {
    if (formData.title.trim() && formData.author.trim()) {
      const newBook = {
        item_id: uuidv4(),
        title: formData.title,
        author: formData.author,
        category: generateCategory(),
      };
      dispatch(addData(newBook));
    }
    setFormData(initialLocalState);
  };

  const handleChange = (e) => {
    setFormData((previousState) => {
      const { name, value } = e.target;
      return {
        ...previousState, [name]: value,
      };
    });
  };

  return (
    <form
      action="#!"
      className="w-10/12 mx-auto border-t border-t-gray-300 pt-10 mt-12"
    >
      <span className="text-xl font-semibold text-slate-600 py-4 block uppercase">
        Add New Book
      </span>
      <input
        type="text"
        name="title"
        value={formData.title}
        className="w-5/12 p-2 border rounded mr-4 font-thin"
        placeholder="Enter book title"
        onChange={handleChange}
      />
      <input
        type="text"
        name="author"
        value={formData.author}
        className="w-4/12 p-2 border rounded mr-4 font-thin"
        placeholder="Enter book author"
        onChange={handleChange}
      />
      <button
        type="button"
        className="py-2 px-14 rounded-md text-sm lg:ml-2 sm:mt-4 bg-blue-600 text-white uppercase"
        onClick={() => addNewBook()}
      >
        Add book
      </button>
    </form>
  );
};

export default Form;
