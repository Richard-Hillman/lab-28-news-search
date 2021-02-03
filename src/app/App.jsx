import React from 'react';

import NewsDisplay from '../presentational/NewsDisplay';


export default class App extends React.Component { 
  render() {
    return (
      <>
        <div className="NewsDisplay">
          <NewsDisplay />
        </div>
      </>
    );
  }
}
