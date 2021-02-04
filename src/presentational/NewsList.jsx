import React from 'react';
import propTypes from 'prop-types';

const NewsList = ({ searchResults }) => (
  // eslint-disable-next-line max-len
  <div style={{ backgroundColor: 'black', width: '50vh', height: '70vw', color: 'white' }}>
    
    <h1> Results </h1>
  
    {
      searchResults.map((result) => (
        <p key="i">{ result.author }</p>
      )
      )};


  </div>
);

NewsList.propTypes = {
  searchResults: propTypes.string.isRequired,
 
};

export default NewsList;
