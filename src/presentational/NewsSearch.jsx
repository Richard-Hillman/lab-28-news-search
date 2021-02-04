/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const NewsSearch = ({ handleClick, handlesubmit }) => (
 
  // eslint-disable-next-line max-len
  <div style={{ backgroundColor: 'grey', width: '80vh', height: '20vw', color: 'black' }}>
   
    {/* ------------------------ */}
   
    <form handleSubmit = { handlesubmit }>

      <h1 style={{ color: 'yellow' }}> Search the NEWS</h1>
      <input default="search the news"  onChange = { handleClick }></input>    
      <button> Search </button>
    
    </form>

    {/* ------------------------ */}

  </div>
);

NewsSearch.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handlesubmit:PropTypes.func.isRequired
};

export default NewsSearch;
