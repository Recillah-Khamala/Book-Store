const CHECK_STATUS = 'redux / books / Categories / CHECK_STATUS';

const initialState = '';

const checkBookStatus = () => ({ type: CHECK_STATUS, payload: 'Under Construction' });

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return action.payload;
    default:
      return state;
  }
};

export default { checkBookStatus, categoryReducer };
