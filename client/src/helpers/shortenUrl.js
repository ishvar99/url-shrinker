const shortenUrl=(url)=>{
    fetch('/shorten',{
        method:'POST',
        body:JSON.stringify({url}),
        headers: {
            'Content-Type': 'application/json'
          }
    })
    .then(res=>res.json())
    .then((data)=>console.log(data));
}

export default shortenUrl;