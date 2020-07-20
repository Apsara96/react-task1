import React, { Component } from 'react';
import axios from 'axios';
// import { Route } from 'react-router-dom';

import classes from './Welcome.css';
import Cards from '../../components/Cards/Cards';
// import CardDetails from '../../components/CardDetails'; 

// import DisplayTable from '../../components/DisplayTable/DisplayTable';


class Welcome extends Component {
    state = {
        cards: []
    }
    componentDidMount (){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const cards = response.data.slice(0, 4);
                const updatedCards = cards.map(card => {
                    return{
                        ...card
                    }
                })
                this.setState({cards: updatedCards});
                 
            });
    }

    showMoreHandler = () => {
        this.props.history.replace('/DisplayTable');
    }

    clickCardHandler = (id, title, body) => {
        // console.log(body)
        this.setState = ({
            id : id,
            title :title,
            body :body
            })
        }
    

    render () {
        const cards = this.state.cards.map(card => {
            return <Cards 
            key={card.id} 
            title={card.title} 
            id={card.id} 
            body={card.body}
            clicked={this.clickCardHandler}/>
        })
        
        return (
            <div>
                <div className={classes.Text}>
                    <h2 text='center'>Welcome Admin</h2>
                </div>
                <div className={classes.Cards}>
                    {cards}
                </div>
                <div className={classes.Text}>
                    <button onClick={this.showMoreHandler}>Show More</button>
                </div>
                <div>
                    {/* <CardDetails id={this.state.selectedCardId}/> */}
                <div className={classes.CardDetails}>
                    <h3>Card Details</h3>
                <div className="col-md-6"> 
                    <label>Id  -</label>
                    <input type="textarea" value={this.state.id} />
                </div>
                <div>
                    <label>Title</label>
                    <input type="textarea" value={this.state.title} />
                </div>
                <div>
                    <label>Content</label>
                    <input type="textarea" value={this.state.body}/>
                </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Welcome;