import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addData } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const addNewBook = () => {
    if (!title || !category || !author) return;

    const newBook = {
      item_id: uuidv4(),
      category,
      title,
      author,
    };
    dispatch(addData(newBook));
    setAuthor('');
    setCategory('');
    setTitle('');
  };

  const titleChange = (event) => setTitle(event.target.value);
  const authorChange = (event) => setAuthor(event.target.value);
  const categoryChange = (event) => setCategory(event.target.value);

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
        className="w-3/12 p-2 border rounded mr-4 font-thin"
        placeholder="Enter book title"
        onChange={titleChange}
      />
      <input
        type="text"
        name="author"
        value={author}
        className="w-3/12 p-2 border rounded mr-4 font-thin"
        placeholder="Enter book author"
        onChange={authorChange}
      />
      <select
        required
        className="w-3/12 p-2 border rounded mr-4 font-thin"
        name="categoryList"
        value={category}
        onChange={categoryChange}
      >
        <option>Select Category</option>
        <option>Drama</option>
        <option>Fiction</option>
        <option>Action</option>
        <option>Economy</option>
        <option>Science Fiction</option>
      </select>
      <button
        type="button"
        className="py-2 px-14 rounded-md text-sm ml-2 bg-blue-600 text-white uppercase"
        onClick={addNewBook}
      >
        Add book
      </button>
    </form>
  );
};

export default Form;
