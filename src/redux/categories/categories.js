const CHECK_STATUS = redux/books/Categories/CHECK_STATUS;

const initialState = [];

const checkBookStatus = () => ({ type: CHECK_STATUS })

const checkReducer = (state = [], action) => {
  switch(action.type){
    case CHECK_STATUS:
      return "Under construction";
    default: 
    return state;
  }
}

export default { checkBookStatus, checkReducer }