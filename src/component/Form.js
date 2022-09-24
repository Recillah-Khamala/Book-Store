import React from 'react';

const Form = () => (
  <section>
    <h2 className="form-title">ADD NEW BOOK</h2>
    <form className="add-form">
      <input className="input title-input" placeholder="Book title" type="text" required />
      <input className="input author-input" placeholder="Book author" type="text" required />
      <select className="input category-input">
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Economy">Economy</option>
      </select>
      <button type="submit" className="primary-button-big">ADD BOOK</button>
    </form>
  </section>
);

export default Form;
