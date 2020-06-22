import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { getProfiles } from "../../actions/profileActions";
import { clearCurrentProfile } from "../../actions/profileActions";
import styled from "styled-components";
import logo from "../image/logo.png";
import Search from '../../components/search';

const NavbarBackground = styled.nav`
  height: 20vh;
  background-image: url("https://i.imgur.com/sJS1H8y.gif?noredirect");
`;

const ImageLogo = styled.img`
  width: 80px;
  margin-left: -180px;
  color: white;
`;

const NavText = styled(Link)`
  font-family: "Source Sans Pro", sans-serif;
  font-family: "IM Fell French Canon SC", serif;
  font-size: 25px;
  color: white;
  margin-left: 25px;
  /* letter-spacing: 0.10rem; */
`;

const NavTextUsers = styled(Link)`
  font-family: "IM Fell French Canon SC", serif;
  font-size: 25px;
  color: white;
  margin-left: 100px;
  /* letter-spacing: 0.10rem; */
`;

const NavTextProfile = styled(Link)`
  font-family: "IM Fell French Canon SC", serif;
  font-size: 25px;
  color: white;
  margin-left: 30px;
  margin-right: 55px;
  /* letter-spacing: 0.10rem; */
`;

const NavLogout = styled.a`
  font-family: "IM Fell French Canon SC", serif;
  font-size: 25px;
  color: white;
  margin-left: -50px;
  margin-right: -100px;
`;

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
    window.location.href = "/";
  }
  state = {
    handle: "none",
    haveProfile: false,
  };

  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    // const { profile } = this.props;
		// console.log(profile);

		// if (!profile.user) {
		// 	return false;
		// }
    const { isAuthenticated, user } = this.props.auth;
    if (this.state.handle === "none" && this.state.haveProfile === false) {
      if (this.props.profiles) {
        this.props.profiles.map((profile) => {
          if (this.props.auth.user.id === profile) {
            this.setState({ handle: profile.handle });
            this.setState({ haveProfile: true });
          }
        });
      }
    }

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        {/* <Search/> */}
        <li className="nav-item">
          {this.props.status === "admin" && (
            <NavTextUsers className="nav-link" to="/profiles">
              Users
            </NavTextUsers>
          )}
        </li>
        <Search/>
        <li className="nav-item">
          {this.state.handle !== "none" ? (
            <NavTextProfile
              className="nav-link"
              to={`/profile/${this.state.handle}`}
            >
              My Profile
            </NavTextProfile>
          ) : (
            <NavTextProfile className="nav-link" to="dashboard">
              My Profile
            </NavTextProfile>
          )}
        </li>
       
        <li className="nav-item">
          <NavLogout
            href=""
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: "40px", marginRight: "10px" }}
              title="You must have a Gravatar connected to your email to display an image"
            />
            {""}
            Logout
          </NavLogout>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );
    return (
      <NavbarBackground className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <ImageLogo src={logo} alt="logoo" />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavText className="nav-link" to="/home">
                  {" "}
                  Home
                </NavText>
              </li>
              <li className="nav-item">
                <NavText className="nav-link" to="/news">
                  {" "}
                  News
                </NavText>
              </li>
              <li className="nav-item">
                <NavText className="nav-link" to="/article">
                  {" "}
                  Article
                </NavText>
              </li>
              <li className="nav-item">
                <NavText className="nav-link" to="/review">
                  {" "}
                  Review
                </NavText>
              </li>
              <li className="nav-item">
                <NavText className="nav-link" to="/feed">
                  {" "}
                  Post Feed
                </NavText>
                
              </li>
            </ul>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </NavbarBackground>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  status: PropTypes.string,
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profiles: state.profile.profiles,
  status: state.auth.user.status,
  profile: state.profile,

});

export default connect(mapStateToProps, {
  logoutUser,
  clearCurrentProfile,
  getProfiles,
})(Navbar);