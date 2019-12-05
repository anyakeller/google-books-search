import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon3">
									Enter a book name
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Booky McBookface"
              aria-label="Booky McBookface"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-success"
                type="button"
                id="button-addon2">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
