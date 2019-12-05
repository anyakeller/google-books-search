import React from 'react';

class HeadThing extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="jumbotron">
            <h3>Book Search</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default HeadThing;
