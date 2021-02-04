import React from 'react';
import PropTypes from 'prop-types';

const NewsSearchControls = ({ searchText, onClick }) => {
  <>
    <input type="text" value={searchText} onChange={ onClick } /> 
  </>;
};

NewsSearchControls.propTypes = {
  searchText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired 
};

export default NewsSearchControls;
