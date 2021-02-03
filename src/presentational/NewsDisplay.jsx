import React from 'react';
import PropTypes from 'prop-types';
import NewsSearch from './NewsSearch';

const NewsDisplay = () => (
  <div style={{ backgroundColor: 'black', width: '90vh', height: '90vw', color: 'white' }}>
    
    <h1> Welcome to the NEWS</h1>

    <NewsSearch /> 
    
    <input default="search the news" style={{ fontColor: '' }}></input>
  
  </div>
);

NewsDisplay.PropTypes = {
  search: PropTypes.string.isRequired 
};

export default NewsDisplay;
