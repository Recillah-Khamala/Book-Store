import React from 'react';
import './Book.css';

const Book = (info) => {
  const { items } = info;
  const { title, author, category } = items;

  return (
    <div className="flex flex-col gap-1">
      <span className="text-slate-500 capitalize category">{ category }</span>
      <span className="text-xl font-bold tracking-wider capitalize title">{ title }</span>
      <span className="capitalize author">{ author }</span>
    </div>
  );
};

export default Book;
