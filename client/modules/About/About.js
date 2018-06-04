import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class About extends Component {
	render() {
		return (
			<div>
				<h2>About us</h2>
				<p>Lorem ipsum</p>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {};
}

const mapDispatchToProps = (dispatch) => {
  return {};
};

About.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);