import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addData } from '../redux/books/books';
import './Form.css';

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
      className="w-11/12 mx-auto border-t border-t-gray-300 pt-4 mt-1"
    >
      <span className="formTitle block py-4 uppercase">
        Add New Book
      </span>
      <input
        type="text"
        name="title"
        value={formData.title}
        className="w-5/12 mr-8 book"
        placeholder="Book title"
        onChange={handleChange}
      />
      <input
        type="text"
        name="author"
        value={formData.author}
        className="w-3/12  mr-8 book"
        placeholder="Book author"
        onChange={handleChange}
      />
      <button
        type="button"
        className="w-2/12 rounded-md uppercase enter"
        onClick={() => addNewBook()}
      >
        Add book
      </button>
    </form>
  );
};

export default Form;
