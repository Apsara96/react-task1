import *  as actionTypes from '../actions/actionTypes';


const initialState = {
    cards: [],
    posts: [],
    showTable: true  
}

const reducer = (state= initialState, action) => {
    // console.log('&&&&')
    // console.log(action.cards)
    switch(action) {
        case actionTypes.SET_CARDS:
            return{
                ...state,
                cards: action.cards
            };
        case actionTypes.SET_POSTS:
            return{
                ...state,
                posts: [action.posts]
            };
        default: return state;
    }
}


export default reducer;