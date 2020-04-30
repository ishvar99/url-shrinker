const shortenUrl=(url)=>{
   return fetch('/shorten',{
        method:'POST',
        body:JSON.stringify({url}),
        headers: {
            'Content-Type': 'application/json'
          }
    }).then(res=>res.json())
}

export default shortenUrl;