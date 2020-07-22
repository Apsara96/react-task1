import React, { Component } from 'react';
import axios from 'axios';
// import { Route } from 'react-router-dom';

import classes from './Welcome.css';
import Cards from '../../components/Cards/Cards';
import {Table} from 'reactstrap'
// import DisplayTable from '../../components/DisplayTable/DisplayTable';


class Welcome extends Component {
    state = {
        cards: [],
        posts: [],
        showTable: true
    }
    componentDidMount (){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const cards = response.data.slice(0,4);
                const posts = response.data.slice(5,10)
                const updatedCards = cards.map(card => {
                    return{
                        ...card
                    }
                })

                const updatedPosts = posts.map(post => {
                    return{
                        ...post
                    }
                })
                this.setState({cards: updatedCards});
                this.setState({posts: updatedPosts});  
            });
    }

    showMoreHandler = () => {
    //     this.props.history.replace('/displaytable');
        const showData = this.state.showTable;
        this.setState({showTable: !showData});
    }

    clickCardHandler = (id, title, body) => {
        // console.log(body)
        this.setState({
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
        const posts = this.state.posts.map(post =>{
            return <tr key={post.id}>
            <td className={classes.td}>{post.id}</td>
            <td className={classes.td}>{post.title}</td>
            <td className={classes.td}>{post.body}</td>
          </tr> 
        })
        
        return (
            <div> 
                <div className={classes.Text}>
                    <h2 text='center'>Welcome Admin</h2>
                </div>
                <div className={classes.Cards}>
                    {cards}
                </div>
                {this.state.showTable===true ?
                    <div className={classes.Text}>
                    <button onClick={this.showMoreHandler}>Show More</button>
                    </div> :
                    <div>
                    <Table className={classes.table}>
                        <thead>
                            <tr> 
                                <th className={classes.th}>Id</th>
                                <th className={classes.th}>Title</th>
                                <th className={classes.th}>Body</th>
                            </tr>
                        </thead>
                        <tbody>
                        {posts}
                        </tbody>
                    </Table>
                    <div className={classes.Text}>
                    <button onClick={this.showMoreHandler}>Hide</button>
                    </div>
                    </div>
            }
                
                <div>
                    {/* <CardDetails id={this.state.selectedCardId}/> */}
                    {/* {console.log(this.state)} */}
                
                <div className={classes.CardDetails}>
                    <h3>Card Details</h3>
                <div className="col-md-6"> 
                    <label>Id  -</label>
                    <input type="textarea" value={this.state.id} />
                </div>
                <div>
                    <label>Title</label>
                    <textarea type="textarea" value={this.state.title} />
                </div>
                <div>
                    <label>Content</label>  
                    <textarea type="textarea" value={this.state.body}/>
                </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Welcome;