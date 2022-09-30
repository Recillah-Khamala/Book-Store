import { useState } from 'react';

const Set = () => {
  const [values, setValue] = useState({});

  const onChange = (e) => {
    setValue({ ...values, [e.target.name]: e.target.value });
  };

  return {
    values,
    onChange,
  };
};

export default Set;
