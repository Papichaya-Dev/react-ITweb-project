import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const TitleSingIn = styled.div`
	font-family: 'Kanit', sans-serif;
	font-size: 50px;
	color: white;
	text-transform: uppercase;
	font-weight: 500;
	margin-bottom: 10%;
`;
const Slot = styled.input`
	border: 0;
	background: none;
	display: block;
	margin: 20px auto;
	text-align: center;
	border: 2px solid #3498db;
	padding: 14px 10px;
	width: 300px;
	outline: none;
	color: white;
	border-radius: 24px;
	transition: 0.25s;
    margin-left:-30px;
	:focus {
		width: 280px;
		border-color: #a6009b;
	}
`;
const Block = styled.form`
	width: 500px;
	padding: 40px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: rgba(255, 255, 255, 0.1);

	text-align: center;
	border-radius: 5%;
	font-family: 'Kanit', sans-serif;
`;
const ButtonSingIn = styled(Button)`
margin-left:10px;
color:black;
background:rgba(255,255,255, 1);
font-family: 'Source Sans Pro', sans-serif;
`;
const BackgroundSingIn = styled.div`
	width: 100%;
	height: 100vh;
	background-color: black;
	background-image: url("https://thumbs.gfycat.com/IndelibleAcademicHornshark-size_restricted.gif");
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

class Login extends Component {
    constructor(){
        super();
        this.state ={
            email:'',
            password:'',
            errors:{}
        };

        this.onChange = this.onChange.bind(this);
        this.onSummit = this.onSummit.bind(this);
    }

    componentDidMount(){
      if(this.props.auth.isAuthenticated){
        this.props.history.push('/home');
      }
    }
    
    componentWillReceiveProps(nextProps){
      if(nextProps.auth.isAuthenticated) {
        this.props.history.push('/home');
      }
      if(nextProps.errors) {
        this.setState({errors: nextProps.errors});
      }
    }
    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSummit(e){
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password:this.state.password
           
        };
        this.props.loginUser(userData)
    }
    render() {
      const { errors } = this.state;

        return (
          <span>
            <BackgroundSingIn/>
            <Block>
            <div className="login">
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
        <TitleSingIn className="gray-text text-darken-3">Sign In</TitleSingIn>
          <form onSubmit ={this.onSummit}>
           <Slot
              placeholder="Email Address"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.onChange}
              error={errors.email}
              />

            <Slot
              placeholder="Password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.onChange}
              error={errors.password}
              />
<ButtonSingIn variant="dark" type="submit ">
						Enter
					</ButtonSingIn>          </form>
        </div>
      </div>
    </div>
  </div>
  </Block>
  </span>
        );
    }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, {loginUser})(Login);
