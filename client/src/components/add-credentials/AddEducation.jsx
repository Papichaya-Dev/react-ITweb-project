import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import TextFieldGroup from "../common/TextFieldGroup";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  addEducation,
  getProfiles,
  getProfileByHandle,
} from "../../actions/profileActions";
import styled from "styled-components";

const Background = styled.div`
  background: linear-gradient(-180deg, #bcc5ce 0%, #929ead 98%),
    radial-gradient(
      at top left,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
  background-blend-mode: screen;
  width: 100%;
`;

const ButtonSubmit = styled.input`
  font-family: "DM Serif Display", serif;
  font-weight: bolder;
  padding: 0.2rem;
  width: 150px;
  height: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 250px;
  margin-top: 10px;
  letter-spacing: 0.1rem;
  opacity: 1;
  background-color: black;
  color: white;
`;
const ButtonBack = styled(Link)`
  font-family: "DM Serif Display", serif;
  font-weight: bolder;
  padding: 0.2rem;
  width: 130px;
  height: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -330px;
  margin-top: 30px;
  letter-spacing: 0.1rem;
  opacity: 1;
  background-color: black;
  color: white;
`;
const TextTopic = styled.h1`
  font-weight: bold;
`;

class AddEducation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: "",
      degree: "",
      fieldofstudy: "",
      from: "",
      to: "",
      current: false,
      description: "",
      errors: {},
      disabled: false,
      handle: "none",
      haveProfile: false,
      profileHandle: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const eduData = {
      school: this.state.school,
      degree: this.state.degree,
      fieldofstudy: this.state.fieldofstudy,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description,
    };

    this.props.addEducation(
      eduData,
      this.props.history,
      this.props.profile.profile.handle
    );
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    if (this.state.profileHandle === false) {
      this.props.getProfileByHandle(this.state.handle);
      this.setState({ profileHandle: true });
    }
  }

  onCheck(e) {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current,
    });
  }

  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    const { errors } = this.state;

    if (this.state.handle === "none" && this.state.haveProfile === false) {
      if (this.props.profiles) {
        this.props.profiles.map((profile) => {
          if (this.props.auth.user.id === profile.user._id) {
            this.setState({ handle: profile.handle });
            this.setState({ haveProfile: true });
          }
        });
      }
    }

    return (
      <Background className="add-education">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <ButtonBack to="/dashboard" className="btn btn-light">
                Go back
              </ButtonBack>
              <h1 className="display-4 text-center">Add Education</h1>
              <p className="lead text-center">Add any school</p>
              <small className="d-block pb-3">* = required field</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* School"
                  name="school"
                  value={this.state.school}
                  onChange={this.onChange}
                  error={errors.school}
                />
                <TextFieldGroup
                  placeholder="Degree"
                  name="degree"
                  value={this.state.degree}
                  onChange={this.onChange}
                  error={errors.degree}
                />
                <TextFieldGroup
                  placeholder="* Field of Study"
                  name="fieldofstudy"
                  value={this.state.fieldofstudy}
                  onChange={this.onChange}
                  error={errors.fieldofstudy}
                />
                <h6>From Date</h6>
                <TextFieldGroup
                  name="from"
                  type="date"
                  value={this.state.from}
                  onChange={this.onChange}
                  error={errors.from}
                />
                <h6>To Date</h6>
                <TextFieldGroup
                  name="to"
                  type="date"
                  value={this.state.to}
                  onChange={this.onChange}
                  error={errors.to}
                  disabled={this.state.disabled ? "disabled" : ""}
                />
                <div className="form-check mb-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="current"
                    value={this.state.current}
                    checked={this.state.current}
                    onChange={this.onCheck}
                    id="current"
                  />
                  <label htmlFor="current" className="form-check-label">
                    Current Job
                  </label>
                </div>
                <TextAreaFieldGroup
                  placeholder="Program Description"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  error={errors.description}
                  info="Tell us about the the program"
                />
                <ButtonSubmit
                  className="btn btn-dark"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
      </Background>
    );
  }
}

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors,
  auth: state.auth,
  profiles: state.profile.profiles,
});

export default connect(mapStateToProps, {
  addEducation,
  getProfiles,
  getProfileByHandle,
})(withRouter(AddEducation));