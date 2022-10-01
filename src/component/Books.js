import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  CircularProgressbar,
} from 'react-circular-progressbar';
import { removeBook } from '../redux/books/books';
import Book from './Book';
import Form from './Form';
import 'react-circular-progressbar/dist/styles.css';

const Books = () => {
  const selector = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const removeHandler = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className="flex flex-col gap-4 py-10">
      <div className="w-full">
        {selector.length > 0 ? (
          selector.map((book) => {
            const {
              id, title, author, category,
            } = book;
            return (
              <div
                key={id}
                className="w-11/12 lg:w-10/12 mx-auto bg-white shadow border p-8 flex gap-5 rounded-md mb-20"
              >
                <div className="flex flex-col gap-2 w-1/3">
                  <div className="flex flex-col gap-1">
                    <span className="text-slate-300 text-base">{category}</span>
                    <Book items={{ title, author }} />
                  </div>
                  <ul className="flex gap-1 lg:gap-4 items-center w-8/12 lg:w-full">
                    <li>
                      <button type="button" className="text-sm font-thin">
                        Comments
                      </button>
                    </li>
                    <li className="w-2 text-gray-300">|</li>
                    <li>
                      <button type="button" className="text-sm font-thin" onClick={() => removeHandler(id)}>
                        Remove
                      </button>
                    </li>
                    <li className="w-2 text-gray-300">|</li>
                    <li>
                      <button type="button" className="text-sm font-thin">
                        Edit
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="w-2/3 flex gap-5">
                  <div className="block lg:flex gap-2 justify-center items-center w-1/2">
                    <div className="outer border rounded-full w-20 h-20 justify-center flex items-center mx-auto lg:mx-0">
                      <div className="inner w-16 h-16 rounded-full border" />
                    </div>
                    <div className="block mx-auto w-1/2 lg:mx-0">
                      <p className="text-base text-center lg:text-left">78%</p>
                      <span className="text-slate-300 font-thin text-center lg:text-right">
                        completed
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 b0rder-r border-gray-300 w-1/2">
                    <span className="text-slate-300 uppercase font-thin tracking-wider">
                      Current Chapter
                    </span>
                    <p className="font-thin">Chapter 7</p>
                    <button
                      type="button"
                      className="bg-blue-700 uppercase text-xs lg:text-base font-thin p-2 text-white w-full lg:w-10/12"
                    >
                      update progress
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-white">
            Add books here!!
          </p>
        )}
      </div>
      <Form />
    </div>
  );
};

export default Books;
