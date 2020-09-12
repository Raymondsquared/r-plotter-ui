import axios from 'axios';
import React from 'react';

import PlotterPage from './components/plotter/PlotterPage';

import './App.css';

// TODO: Use environment variables to change the URL for local, staging and production
const plotterAPIURL = 'https://did9hrg18lno9.cloudfront.net/api/v1/plotter/numbers';
const defaultSourceURL =
  'https://en.wikipedia.org/wiki/Women%27s_high_jump_world_record_progression';

function App() {
  const [errorMessage, setErrorMessage] = React.useState('');

  const urlSearchParams = new URLSearchParams(window.location.search);
  const urlQueryString = urlSearchParams.get('url') || defaultSourceURL;
  const finalAPIURL = `${plotterAPIURL}?url=${urlQueryString}`;
  console.log('finalAPIURL', finalAPIURL);
  const [url] = React.useState(finalAPIURL);
  React.useEffect(() => {
    const getEvents = async () => {
      try {
        const getNumbersOutput = await axios(url);
        if (getNumbersOutput.error) {
          console.log('error', getNumbersOutput.error);
          setErrorMessage(getNumbersOutput.error.message || getNumbersOutput.error.code);
        } else {
          setNumbers(getNumbersOutput.data.data);
        }
      } catch (error) {
        console.log('Failed getting numbers, Error:', error);
        alert(error.message);
      }
    };

    // console.log('getting events data from:', url);
    getEvents();
  }, [url]);

  const [numbers, setNumbers] = React.useState([]);

  return (
    <div className="App">
      <h1>Plot</h1>
      <PlotterPage numbers={numbers} url={urlQueryString} />
      <span>{errorMessage}</span>
    </div>
  );
}

export default App;
