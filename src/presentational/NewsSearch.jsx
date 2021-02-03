import React from 'react';
import PropTypes from 'prop-types';

const NewsSearch = ({ searchText }) => (
  <div style={{ backgroundColor: 'grey', width: '75vh', height: '75vw', color: 'black' }}>
    <h1 style={{ color: 'yellow' }}> Search the NEWS</h1>
    <input default="search the news" style={{ fontColor: '' }}></input>
    <button> Search </button>
  </div>
);

NewsSearch.PropTypes = {
  search: PropTypes.string.isRequired 
};

export default NewsSearch;
