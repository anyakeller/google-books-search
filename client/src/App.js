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

  async handleSearch(query) {
    let results = await API.search(query);
    console.log(results);
  }

  render() {
    return (
      <>
        <HeadThing />
        <SearchBar handleSearch={this.handleSearch}/>
        <Results />
      </>
    );
  }
}

export default App;
