import React from 'react';

class BookCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className="list-group-item">
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">asdfasf</div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default BookCard;
