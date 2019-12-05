import React from 'react';
import HeadThing from "./components/HeadThing"
import SearchBar from "./components/SearchBar"
import Results from "./components/Results"
//test
import API from "./utils/queryGoogleBooks";

class App extends React.Component {
  render(){
	API.search();
	return (
		<>
		<HeadThing />
		<SearchBar />
		<Results />
		</>
  );
	}
}

export default App;
