import { useState } from 'react';

const Set = () => {
  const [values, setValue] = useState({ title: '', author: '' });

  const onChange = (e) => {
    setValue({ ...values, [e.target.name]: e.target.value });
  };

  return {
    values,
    onChange,
    setValue,
  };
};
export const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ue4FbdxlCfd3J4RtI1uF/books';
export default Set;
