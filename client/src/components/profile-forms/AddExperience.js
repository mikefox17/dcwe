import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addExperience } from "../../actions/profile";

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: ""
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { company, title, location, from, to, current, description } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <div className="container">
        <h1 className="large has-text-primary">Add An Experience</h1>
        <p className="lead">
          <i className="fas fa-code-branch"></i> Add any developer/programming
          positions that you have had in the past
        </p>
        <small>* = required field</small>
        <form
          className="form"
          onSubmit={e => {
            e.preventDefault();
            addExperience(formData, history);
          }}
        >
          <div className="form-group">
            <input
              className="input"
              type="text"
              placeholder="* Job Title"
              name="title"
              required
              value={title}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              className="input"
              type="text"
              placeholder="* Company"
              name="company"
              required
              value={company}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              className="input"
              type="text"
              placeholder="Location"
              name="location"
              value={location}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <h4>From Date</h4>
            <input
              className="input"
              type="date"
              name="from"
              value={from}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <p>
              <input
                className="input"
                type="checkbox"
                name="current"
                checked={current}
                value={current}
                onChange={e => {
                  setFormData({ ...formData, current: !current });
                  toggleDisabled(!toDateDisabled);
                }}
              />
              {""}
              Current Job
            </p>
          </div>
          <div className="form-group">
            <h4>To Date</h4>
            <input
              className="input"
              type="date"
              name="to"
              value={to}
              onChange={e => onChange(e)}
              disabled={toDateDisabled ? "disabled" : ""}
            />
          </div>
          <div className="form-group">
            <textarea
              className="text-area"
              name="description"
              cols="30"
              rows="5"
              placeholder="Job Description"
              value={description}
              onChange={e => onChange(e)}
            ></textarea>
          </div>
          <input type="submit" className="button is-primary is-rounded my-1" />
          <Link to="/dashboard" className="button is-light is-rounded my-1">
            Go Back
          </Link>
        </form>
      </div>
    </Fragment>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired
};

export default connect(
  null,
  { addExperience }
)(withRouter(AddExperience));
