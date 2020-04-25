import React,{useState} from 'react';
import './App.css';
import UrlBox from './components/Urlbox/urlBox'
import shortenUrl from './helpers/shortenUrl'

function App() {
  const [url,setUrl]=useState('');
  return (
    <div className="container">
      <h1>
        WELCOME TO URL SHRINKER
      </h1>
      <UrlBox url={setUrl} clicked={()=>shortenUrl(url)}/>
    </div>
  );
}

export default App;
