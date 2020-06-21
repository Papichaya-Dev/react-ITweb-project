import React, { Component } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import {
  deleteEducation,
  deleteExperience,
} from "../../actions/profileActions";

// Redux
import { connect } from "react-redux";

class ProfileCreds extends Component {
  render() {
    const { experience, education } = this.props;

    const expItems = experience.map((exp) => (
      <li key={exp._id} className="list-group-item">
        <h4>Email: {exp.company}</h4>
        <p>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
          {exp.to === null ? (
            "Your birthday"
          ) : (
            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
          )}
        </p>
        <p>
          <strong>Contact number</strong> {exp.title}
        </p>
        <p>
          {exp.location === "" ? null : (
            <span>
              <strong>Location: </strong>
              {exp.location}
            </span>
          )}
        </p>
        <p>
          {exp.description === "" ? null : (
            <span>
              <strong>Description: </strong>
              {exp.description}
            </span>
          )}
        </p>

        <p>
          <button
            onClick={() => {
              this.props.deleteExperience(exp._id);
            }}
            className="btn btn-danger"
          >
            Delete
          </button>
        </p>
      </li>
    ));

    const eduItems = education.map((edu) => (
      <li key={edu._id} className="list-group-item">
        <h4>{edu.school}</h4>
        <p>
          <Moment format="YYYY/MM/DD">{edu.from}</Moment> -
          {edu.to === null ? (
            "Now"
          ) : (
            <Moment format="YYYY/MM/DD">{edu.to}</Moment>
          )}
        </p>
        <p>
          <strong>Degree:</strong> {edu.degree}
        </p>
        <p>
          <strong>Field of Study:</strong> {edu.fieldofstudy}
        </p>
        <p>
          {edu.description === "" ? null : (
            <span>
              <strong>Description: </strong>
              {edu.description}
            </span>
          )}
        </p>
        <p>
          <button
            onClick={() => {
              this.props.deleteEducation(edu._id);
            }}
            className="btn btn-danger"
          >
            Delete
          </button>
        </p>
      </li>
    ));
    return (
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center text-dark">Contact us</h3>
          {expItems.length > 0 ? (
            <ul className="list-group">{expItems}</ul>
          ) : (
            <p className="text-center">No Contact Listed</p>
          )}
          <div className="btn-group mb-4" role="group">
            <Link to="/add-experience" className="btn btn-light">
              <i className="fab fa-black-tie text-info mr-1"></i>
              Add more info
            </Link>
          </div>
        </div>

        <div className="col-md-6">
          <h3 className="text-center text-dark">Education</h3>
          {eduItems.length > 0 ? (
            <ul className="list-group">{eduItems}</ul>
          ) : (
            <p className="text-center">No Education Listed</p>
          )}
          <div className="btn-group mb-4" role="group">
            <Link to="/add-education" className="btn btn-light">
              <i className="fas fa-graduation-cap text-info mr-1"></i>
              Add Education
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { deleteEducation, deleteExperience })(
  ProfileCreds
);