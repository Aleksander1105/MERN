import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './About.css';

class About extends Component {
  render() {
    return (
    	<div>
    		<h2>About us</h2>
    		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    			Nullam in leo nec erat tincidunt convallis sed a libero. Sed id.
    		</p>
    	</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

About.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
