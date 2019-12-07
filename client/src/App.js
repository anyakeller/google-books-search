import React from 'react';
import HeadThing from './components/HeadThing';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import API from './utils/queryGoogleBooks';
//test

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      searchQuery: ''
    };
  }

  handleSearch = query=> {
    API.search(query).then(results => {
      this.setState({
        searchResults: results
      });
    });
  }

  render() {
    return (
      <>
        <HeadThing />
        <SearchBar handleSearch={this.handleSearch} />
        <Results books={this.state.searchResults} />
      </>
    );
  }
}

export default App;
