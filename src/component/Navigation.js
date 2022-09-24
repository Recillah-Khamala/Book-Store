import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <header>
    <nav>
      <h1 className="nav-brand"><Link to="/">Bookstore CMS</Link></h1>
      <ul className="nav-links">
        <li><Link to="/">Books</Link></li>
        <li><Link to="/categories">Categories</Link></li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
