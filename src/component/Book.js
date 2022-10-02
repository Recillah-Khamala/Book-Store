import React from 'react';

const Book = (info) => {
  const { items } = info;
  const { title, author, category } = items;

  return (
    <div className="flex flex-col gap-1">
      <span className="text-slate-500 capitalize">{ category }</span>
      <span className="text-xl font-semibold tracking-wider capitalize">{ title }</span>
      <span className="text-blue-400 font-light capitalize">{ author }</span>
    </div>
  );
};

export default Book;
