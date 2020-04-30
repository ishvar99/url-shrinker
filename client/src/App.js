import React,{useState} from 'react';
import styles from './App.module.css';
import UrlBox from './components/Urlbox/urlBox'
import shortenUrl from './helpers/shortenUrl'
import ShortUrlBox from './components/shortUrlBox/shortUrlBox';
import M from 'materialize-css'

function App() {
 
  const [url,setUrl]=useState('');
  const [shorturl,setShortUrl]=useState('');
  return (
    <div className={styles.container}>
      <h1 className={styles.header}> 
        WELCOME TO URL SHRINKER
      </h1>
      <div className={styles.data}>
      <UrlBox url={setUrl} clicked={()=>{
        shortenUrl(url).then((data)=>{
          if(data.message){
            setShortUrl(data.message.shortUrl)
            M.Toast.dismissAll();
            M.toast({html: 'Success',classes:styles.toast+' '+styles.success})
          }
          else{
            M.Toast.dismissAll();
            M.toast({html: 'Error',classes:styles.toast+' '+styles.error})
            setShortUrl('');
          }
         
                 })
        }}/>
     {shorturl? <ShortUrlBox data={shorturl}/>:<div/>}
      </div>
    </div>
  );
}

export default App;
