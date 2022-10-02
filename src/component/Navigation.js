import React from 'react';
import { NavLink } from 'react-router-dom';
import User from '../User';
import './Nav.css';

const Navigation = () => (
  <div className="flex justify-between items-center px-10 lg:px-16 py-5 bg-white border">
    <div className="flex items-center gap-6 lg:gap-8">
      <span className="text-xl lg:text-4xl font-bold name">Bookstore CMS</span>
      <ul className="flex gap-8">
        <li>
          <NavLink to="/" className="font-light text-sm uppercase leading-3 tracking-wider booksLink">Books</NavLink>
        </li>
        <li>
          <NavLink to="Categories" className="uppercase cate">Categories</NavLink>
        </li>
      </ul>
    </div>
    <div className="rounded-full border border-blue-600">
      <User />
    </div>
  </div>
);

export default Navigation;
