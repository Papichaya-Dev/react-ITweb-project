import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
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
const TitleSingInTwo = styled.div`
	font-family: 'Kanit', sans-serif;
	font-size: 15px;
	color: gray;
	font-weight: 500;
	margin-bottom: 10%;
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
const BackgroundSingUp = styled.div`
	width: 100%;
	height: 100vh;
	background-color: black;
	background-image: url("https://thumbs.gfycat.com/IndelibleAcademicHornshark-size_restricted.gif");
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;


class Register extends Component {
    constructor(){
        super();
        this.state ={
            name:'',
            email:'',
            password:'',
            password2:'',
            errors:{}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount(){
      if(this.props.auth.isAuthenticated){
        this.props.history.push('/dashboard');
      }
    }
    

    componentWillReceiveProps(nextProps){
      if(nextProps.errors){
        this.setState({errors: nextProps.errors});
      }
    }
    
    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2:this.state.password2
        };

        this.props.registerUser(newUser,this.props.history);
        // axios
        //     .post('/api/users/register',newUser)
        //     .then(res => console.log(res.data))
        //     .catch(err => this.setState({errors:err.response.data}));
    }

    render() {

        const { errors } = this.state;

  

    return (
      <span>
        <BackgroundSingUp/>
        <Block>
      <div className="register">


      <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
        <TitleSingIn className="gray-text text-darken-3">Sign Up</TitleSingIn>
          <TitleSingInTwo className="gray-text text-darken-3">Create your account :-)</TitleSingInTwo>
          <form noValidate onSubmit={this.onSubmit}>
          <TextFieldGroup
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              error={errors.name}
              autoComplete="off"
              />
            <TextFieldGroup 
              placeholder="Email"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.onChange}
              error={errors.email}
              autoComplete="off"
              info="This site uses Gravatar so if you want a profile image, use a Gravatar email"
              />
             <TextFieldGroup 
              placeholder="Password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.onChange}
              error={errors.password}
              autoComplete="off"
              />
              <TextFieldGroup 
              placeholder="Confirm Password"
              name="password2"
              type="password"
              value={this.state.password2}
              onChange={this.onChange}
              error={errors.password2}
              
              />
    
    <ButtonSingIn variant="dark" type="submit">
								Enter
							</ButtonSingIn>
          </form>
        </div>
      </div>
    </div>
  </div>
  </Block>
  </span>
        )
    }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  erorrs: state.errors
});

export default connect(mapStateToProps ,{ registerUser})(withRouter(Register));
