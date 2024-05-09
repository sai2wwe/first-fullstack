import {createStore} from 'redux';
let data = fetch('http://localhost:4000/api/books')
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));

const intialState = {
    books: data,
    error: null,
};

const reducer = (state = intialState, action) => {
    switch(action.type){
        case 'ADD_BOOK':
            return {
                ...state,
                books: state.books.concat(action.payload),
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload,
            };
        case 'DELETE_BOOK':
            return {
                ...state,
                books: state.books.filter((book) => book._id !== action.payload),
            };
        default:
            return state;
    }
}

const store = createStore(reducer);
export default store;