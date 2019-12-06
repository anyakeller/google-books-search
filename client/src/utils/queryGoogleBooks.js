import axios from 'axios';
const path = require('path');

const BASEURL = 'https://www.googleapis.com/books/v1/volumes?';
const APIKEY = 'key=' + process.env.REACT_APP_API_KEY;

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return new Promise((res, rej) => {
      axios
        .get(
          'https://www.googleapis.com/books/v1/volumes?' +
            APIKEY +
            '&q=' +
            query
        )
        .then(function(response) {
          // handle success
          res(response.data.items);
        })
        .catch(function(error) {
          // handle error
          rej(error);
        });
    });
  }
};
