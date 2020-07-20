import React, {Component} from 'react';
import axios from 'axios';
// import ReactTable from "react-table"; 
import { Table } from 'reactstrap';
import classes from './DisplayTable.css';

 class DisplayTable extends Component {
  state = {
    posts : []
  }

  componentDidMount (){
    axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0,10);
                const updatedPosts = posts.map(post => {
                    return{
                        ...post
                    }
                })
                this.setState({posts: updatedPosts});
                // console.log(response);
            });
}

   render() {
    const posts = this.state.posts.map(post => {
      return <tr className={classes.table}>
        <td className={classes.td}>{post.id}</td>
        <td className={classes.td}>{post.title}</td>
        <td className={classes.td}>{post.body}</td>
      </tr> 
  })
       return(
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
        //  <div>
        //    {posts}
        //  </div>
       )
   }
 }

 export default DisplayTable;