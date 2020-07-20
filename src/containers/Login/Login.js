import React,{Component} from "react";

import classes from './Login.css';
import {Input as NewInput, Form, FormGroup,Button, Container, Row} from 'reactstrap';
import User from '../../assets/user.png';
import '../Welcome/Welcome'; 

class Login extends Component{ 

  state = { 
    User:"Admin",
    Pass_word:"123",
    username: '',
    password: ''
  }

  onChangeAction=(event)=>{ 
      this.setState({
        [event.target.name]:event.target.value
      });

  }
  
  loginHandler = () => {
    if(this.state.password === this.state.Pass_word){
      this.props.history.push("./WelcomePage")
    }else{
      alert("Invalid User")
    }
    // this.state.User ? this.props.history.push("./WelcomePage") : alert("Unautorized")
  }

  render() {
    console.log(this.state.password)
    return(
      <Container className={classes.containerL}>
        <Row>
        <img src={User} alt="Userlogin" className={classes.img}/>
        <Form className={classes.loginform}>
        <h3 className={classes.textL}>LogIn</h3>
        <FormGroup className={classes.loginformgroup}>
          <NewInput
            type="text"
            name="username"
            placeholder="User name"
            value={this.state.username}
            onChange={this.onChangeAction} />
        </FormGroup>
        <FormGroup className={classes.loginformgroup}>
          <NewInput
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onChangeAction} />
        </FormGroup>
      <FormGroup className={classes.textL}>
      <Button color="primary" onClick={this.loginHandler}> Login</Button>{' '}
      </FormGroup>
      </Form>
      </Row>
      </Container> 
      
      )
      };
}
 
export default Login;