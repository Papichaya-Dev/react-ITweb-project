import React, { Component} from 'react'
import { Link } from 'react-router-dom';
import ProfileItem from '../profiles/ProfileItem';
import styled from 'styled-components';

const Buttonname = styled.i`
  font-family: "DM Serif Display", serif;
  font-weight: bolder;
  padding: 0.2rem;
  width: 180px;
  height: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 385px;
  margin-top: -63px;
  letter-spacing: 0.1rem;
  opacity: 1;
  background-color: #EB3A3A;
  color: white;
`;
const ProfileActions = () => {
    return (
              <div className="btn-group mb-4" role="group">
                <Link to ="/edit-profile" className="btn btn-light">
                  <i className="fas fa-user-circle text-info mr-1"></i> Edit Profile
                </Link>
                <Link to ="/add-experience" className="btn btn-light">
                  <i className="fab fa-black-tie text-info mr-1"></i>
                  Add more info
                </Link>
                <Link to="/add-education" className="btn btn-light">
                  <i className="fas fa-graduation-cap text-info mr-1"></i>
                  Add Education
                </Link>
              </div>
    );
};

export default ProfileActions;




