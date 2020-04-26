import React,{useState} from 'react';
import './App.css';
import UrlBox from './components/Urlbox/urlBox'
import shortenUrl from './helpers/shortenUrl'
import ShortUrlBox from './components/shortUrlBox/shortUrlBox';

function App() {
 
  const [url,setUrl]=useState('');
  const [shorturl,setShortUrl]=useState('');
  return (
    <div className="container-box">
      <h1> 
        WELCOME TO URL SHRINKER
      </h1>
      <div className="data">
      <UrlBox url={setUrl} clicked={()=>{
        shortenUrl(url).then((data)=>{
          if(data.message){
            setShortUrl(data.message.shortUrl)
          }
          else
          setShortUrl('');
                 })
        }}/>
     {shorturl? <ShortUrlBox data={shorturl}/>:<div/>}
      </div>
    </div>
  );
}

export default App;
