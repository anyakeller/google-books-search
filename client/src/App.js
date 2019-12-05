import React from 'react';
import HeadThing from "./components/HeadThing"
import SearchBar from "./components/SearchBar"
import Results from "./components/Results"
import API from "./utils/queryGoogleBooks";
//test

class App extends React.Component {
  render(){
	API.search();
		console.log(process.env.REACT_APP_REST_API_LOCATION);
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
