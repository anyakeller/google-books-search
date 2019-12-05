import React from 'react';
import BookCard from './BookCard';

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  populateResults() {
    let results = [1, 2, 3, 4, 5];
    return results.map((element, index) => <BookCard />);
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="mx-auto shadow p-3 mb-5 bg-white rounded">
            <h3>Results</h3>
            {this.populateResults()}
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
