import React,{Component} from "react";
import { connect } from 'react-redux';

import classes from './Login.css';
import {Input as NewInput, Form, FormGroup,Button, Container, Row} from 'reactstrap';
import User from '../../assets/user.png';
import '../Welcome/Welcome'; 
import * as actionTypes from '../../store/actions/actionTypes';


class Login extends Component{ 

  // state = { 
  //   pass_word:"123",
  //   // username: '',
  //   // password: ''
  // }

  onChangeAction=(event)=>{ 
      this.setState({
        [event.target.name]:event.target.value
      });
      if(event.target.name === "username"){
        this.props.onNameSubmit(event.target.value);
      }
      if(event.target.name === "password"){
        this.props.onPasswordSubmit(event.target.value);
      }
      // console.log(event.target.name === "password")
    
  }
  
  loginHandler = () => {
    // let newPw = this.props.pswrd;
    // let st = JSON.stringify(newPw);
    console.log(this.props.pswrd[0]);
    console.log(this.props.pass_wrd);
    if(this.props.pass_wrd === this.props.pswrd[0]){
      this.props.history.push("./welcomepage")
    }else{
      alert("Invalid User")
    }
    // this.props.onDetailsSubmit()
    // this.state.User ? this.props.history.push("./WelcomePage") : alert("Unautorized")
  }

  render() {
    // console.log(this.state.password)
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
            value={this.props.uname}
            onChange={this.onChangeAction} />
        </FormGroup>
        <FormGroup className={classes.loginformgroup}>
          <NewInput
            type="password"
            name="password"
            placeholder="Password"
            value={this.props.pswrd}
            onChange={this.onChangeAction} />
        </FormGroup>
      <FormGroup className={classes.textL}>
      <Button color="primary" onClick={this.loginHandler}> Login</Button>
      </FormGroup>
      </Form>
      </Row>
      </Container> 
      
      )
      };
}

const mapStateToProps = state => {
  return{
   uname: state.log.username,
   pswrd: state.log.password,
   pass_wrd: state.log.pass_word
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onNameSubmit: (name) => dispatch({type: actionTypes.SUBMIT_NAME, userData:name}),
    onPasswordSubmit: (pwd) => dispatch({type: actionTypes.SUBMIT_PASSWORD, userData:pwd})
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);