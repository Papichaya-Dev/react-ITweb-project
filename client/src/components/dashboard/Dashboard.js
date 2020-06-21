import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {getCurrentProfile , deleteAccount} from '../../actions/profileActions'
import Spinner from '../common/Spinner';
import { Link } from 'react-router-dom';
import ProfileAction from './ProfileAction';
import Experience from './Experience'
import Education from './Education';
import Navbar from '../Layout/Navbar';
import styled from 'styled-components';

const Background = styled.div`background-image: linear-gradient(to right, #a8caba 0%, #5d4160 120%);;
height: 100vh;`;

const TextTopic = styled.h1`
font-family: "Cormorant Garamond", serif;
font-weight:bolder;
`;

const TextWelcome = styled.p`
font-family: "Cormorant Garamond", serif;
font-weight:bolder;
font-size:25px;
`;

const TextContent = styled.p`
font-family: "Cormorant Garamond", serif;
font-weight:bolder;
font-size:25px;
`;

const ButtonCrete = styled(Link)`
  font-family: "DM Serif Display", serif;
  font-weight: bolder;
  padding: 0.2rem;
  width: 200px;
  height: 55px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1px;
  margin-top: 25px;
  letter-spacing: 0.1rem;
  opacity: 1;
  background-color: black;
  color: white;
`;
class Dashboard extends Component {
    componentDidMount(){
        this.props.getCurrentProfile();
    }

    onDeleteClick(e) {
        this.props.deleteAccount();
    }

    render() {
        const { user } = this.props.auth;
        const { profile, loading } = this.props.profile;

        let dashboardContent;

        if(profile === null || loading) {
            dashboardContent = <Spinner/>

        } else {
            //Check if loggef in user has profile data
            if(Object.keys(profile).length > 0){
                dashboardContent = (
                    <div>
                         <p className="lead text-muted">Welcome <Link to={`/profile/${profile.handle}`}> 
                         {user.name}</Link></p>
                         <ProfileAction/>
                         <Experience experience={profile.experience}/>
                         <Education education={profile.education}/>
                         <div style={{ marginBottom: '60px'}}/>
                         <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger">Delete My Account
                         </button>
                    </div>
                )
            } else {
                //User is logged in but has no profile
                dashboardContent = (
                    <div>
                        <TextWelcome className="lead ">Welcome {user.name}</TextWelcome>
                        <TextContent>You have not yet setup a profile, please add some info</TextContent>
                        <ButtonCrete to="/create-profile" className="btn btn-lg btn-info">
                            Create Profile
                        </ButtonCrete>
                    </div>
                )
            }
            
        }
        return (
            
            <Background className="dashboard">
<Navbar/>
                <div className= "container">
                    <div className="row">
                        <div className="col-md-12">
                            <TextTopic className="display-4">My Profile</TextTopic>
                        {dashboardContent}
                        </div>
                    </div>
                </div>
            </Background>
        )
    }
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired

}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
})
export default  connect (mapStateToProps, {getCurrentProfile, deleteAccount})(Dashboard);