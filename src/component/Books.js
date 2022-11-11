import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { getData, removeData } from '../redux/books/books';
import Book from './Book';
import Form from './Form';
import 'react-circular-progressbar/dist/styles.css';

const Books = () => {
  const { books, status } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-2 py-10">
      <div className="w-full">
        {status === 'successful' ? (
          Object.entries(books).map((book) => {
            const [id, bookDetails] = book;
            const { title, author, category } = bookDetails[0];
            return (
              <div
                key={id}
                className="mx-10 bg-white border p-8 flex rounded-md mb-5"
              >
                <div className="flex flex-col w-1/2">
                  <div className="flex flex-col gap-1">
                    <Book items={{ title, author, category }} />
                  </div>
                  <ul className="flex gap-1 lg:gap-4 items-center w-8/12 lg:w-full btns">
                    <li>
                      <button type="button">
                        Comments
                      </button>
                    </li>
                    <li className="w-2 text-gray-300">|</li>
                    <li>
                      <button type="button" onClick={() => dispatch(removeData(id))}>
                        Remove
                      </button>
                    </li>
                    <li className="w-2 text-gray-300">|</li>
                    <li>
                      <button type="button">
                        Edit
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="w-1/2 flex">
                  <div className="block lg:flex justify-center gap-2 items-center w-1/4">
                    <div className="circular flex justify-center items-center">
                      <CircularProgressbar
                        value="23"
                        strokeWidth={8}
                      />
                    </div>
                    <div className="block w-1/4 lg:mx-0">
                      <p className="percentage">23%</p>
                      <span className="text-slate-300 font-thin text-center lg:text-right">
                        completed
                      </span>
                    </div>
                  </div>
                  <div className="line-2" />
                  <div className="flex flex-col gap-1 b0rder-r border-gray-300">
                    <span className="current">
                      CURRENT CHAPTER
                    </span>
                    <p className="font-thin">Chapter 7</p>
                    <button
                      type="button"
                      className="update uppercase p-1 "
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
