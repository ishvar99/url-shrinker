import React,{useEffect} from 'react'
import './shortUrlBox.css'
import ClipboardJS from 'clipboard'
new ClipboardJS('.copy-btn')
const ShorturlBox=(props)=>{
    return (
        <div className="short-url-box">
            <input id="foo" value={'localhost:3000/'+props.data} readOnly className="input-field" type="text"/>
            <button data-clipboard-text="It worked!" data-clipboard-target="#foo" className="copy-btn">Copy</button>
        </div>
    );
}
export default ShorturlBox;