import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';


const API_KEY = 'AIzaSyDRSKyBw3TbaenthoJlfAWAwq9Wm3TvOSU';
YTSearch({ key: API_KEY, term: 'surfboards' }, (data) => {
  console.log(data);
});

const App = () => {
  return <div>Hi</div>
}

ReactDOM.render(<App />, document.querySelector('.container'));