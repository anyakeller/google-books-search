import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSearch(this.state.query);
  };

  handleTextInput = event => {
    const {name, value} = event.target;
    this.setState({
      query: value
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col">
          <form>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">
                  Enter a book name
                </span>
              </div>
              <input
                type="text"
                name="query"
                onChange={this.handleTextInput}
                className="form-control"
                placeholder="Booky McBookface"
                aria-label="Booky McBookface"
                aria-describedby="searchbtn"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-success"
                  type="submit"
                  id="searchbtn"
                  onClick={this.handleSubmit}>
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
