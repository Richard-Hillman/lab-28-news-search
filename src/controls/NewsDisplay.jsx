/* eslint-disable max-len */
import React from 'react';
import NewsSearch from '../presentational/NewsSearch';
import NewsList from '../presentational/NewsList';
import { getArticles } from '../services/Services';

export default class NewsDisplay extends React.Component {
    
    state= {
      searchText: '',
      searchResults: []
    }

    componentDidMount() {
      getArticles()
        .then(searchResults => this.setState({ searchResults }));
    }

    handleClick = (e) => {
      this.setState({ searchText: e.target.value });
    }  

    handleSubmit = async(e) => {
      e.preventDefault();
      await getArticles(this.state.searchText)
        .then(searchResults => this.setState({ searchResults }));
    } 

    render() {
      return (
      // eslint-disable-next-line max-len
        <div style={{ backgroundColor: 'black', width: '90vh', height: '90vw', color: 'white' }}>
    
          <h1> Welcome to the NEWS</h1>

          <NewsSearch  
            searchText = {this.state.searchText } 
            handleClick = { this.handleClick } 
            handleSubmit = { this.handleSubmit } 
          /> 
  
          <NewsList searchResults = { this.state.searchResults } />

        </div>
      );
    }
}


