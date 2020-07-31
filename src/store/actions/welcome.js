import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';

export const setCards = (cards) => {
    // const updatedCards = cards.map(card => {
    //         return{
    //             ...card
    //         }
    //     })
    // console.log(cards)
    return {
        type: actionTypes.SET_CARDS,
        cards: cards
    }
}

export const setPosts = (posts) => {
    return {
        type: actionTypes.SET_POSTS,
        posts: posts
    }
}

export const initData = () => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            // const cards = response.data.slice(0,4);
            // const posts = response.data.slice(4,10)
            dispatch(setCards(response.data.slice(0,4)));
            dispatch(setPosts(response.data.slice(4,10)));
            // const updatedCards = cards.map(card => {
            //     return{
            //         ...card
            //     }
            // })

            // const updatedPosts = posts.map(post => {
            //     return{
            //         ...post
            //     }
            // })
            // this.setState({cards: updatedCards});
            // this.setState({posts: updatedPosts});  
        });
} 
    }


