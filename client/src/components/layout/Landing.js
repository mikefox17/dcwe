import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">DC Whiskey Exchange</h1>
          <p className="lead">
            Create a profile, share your bottles with the DMV locals. Setup
            bottle trades with other users.
          </p>
          <div className="buttons">
            <Link to="/register" className="button is-primary is-rounded">
              Sign Up
            </Link>
            <Link to="/login" className="button is-rounded">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
