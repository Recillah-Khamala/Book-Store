import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <div className="flex justify-between items-center px-10 lg:px-16 py-5 shadow-sm shadow-gray-200">
    <div className="flex items-center gap-6 lg:gap-8">
      <span className="text-xl lg:text-4xl text-blue-600 font-semibold">Bookstore CMS</span>
      <ul className="flex gap-8">
        <li>
          <NavLink to="/" className="font-extralight text-slate-600 text-sm uppercase leading-3 tracking-wider">Books</NavLink>
        </li>
        <li>
          <NavLink to="Categories" className="font-extralight text-slate-600 text-sm uppercase leading-3 tracking-wider">Category</NavLink>
        </li>
      </ul>
    </div>
    <div className="rounded-full border border-blue-600">
      soon
    </div>
  </div>
);

export default Navigation;
