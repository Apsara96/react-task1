import *  as actionTypes from '../actions/actionTypes';


const initialState = {
    username: '',
    password: '',
    pass_word:"123"
}

const reducer = (state = initialState, action) => {
    // console.log(action.userData);
    switch(action.type) {
        case actionTypes.SUBMIT_NAME:
            return{
                ...state,
                username:[action.userData],
            };
        case actionTypes.SUBMIT_PASSWORD:
            return{
                    ...state,
                    password:[action.userData]
                };
        default:
            return state;
    }
};

export default reducer;