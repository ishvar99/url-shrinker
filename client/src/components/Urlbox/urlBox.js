import React from 'react'
import './urlBox.css'
const UrlBox=(props)=>{
    return (
        <div className="url-box">
            <input className="input-field" onChange={(e)=>props.url(e.target.value)} placeholder="Enter the link here" type="text"/>
            <button onClick={props.clicked} className="create-btn">Shrink</button>
        </div>
    );
}
export default UrlBox;