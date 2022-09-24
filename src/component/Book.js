import React from "react";
import { TbMinusVertical } from 'react-icons/tb';

import PropTypes from 'prop-types';

function Book(props) {
  const { title, author } = props;

  return (
    <>
      <div className="book">
        <div className="book-content">
          <div className="book-info">
            <h4 className="book-category">Genre</h4>
            <h2 className="book-title">{ title }</h2>
            <h6 className="book-author">{ author }</h6>
            <div className="action-buttons">
              <button 
                className="button-outline"
                type="button"
              >
                Comments
              </button>
              <div>< TbMinusVertical /></div>
              <button 
                className="button-outline"
                type="button"
              >
                Remove
              </button>
              <div><TbMinusVertical /></div>
              <button 
                className="button-outline"
                type="button"
              >
                Edit
              </button>
            </div>
          </div>
          <div className="progress-container">
            <div className="circular-progress-container">
              <div className="circular-progress"></div>
            </div>
            <div className="progress-stat">
              <div>
                <p className="percentage-complete">64%</p>
                <p className="completed">Completed</p>
              </div>
              <div className="progress-divider"><TbMinusVertical /></div>
            </div>
            <div className="current-chapter-container">
              <div>
                <p className="current-chapter-label">CURRENT CHAPTER</p>
                <p className="current-chapter">Chapter 17</p>
              </div>
              <div>
              <button 
                type="button" 
                className="primary-button"
              >
                UPDATE PROGRESS
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
