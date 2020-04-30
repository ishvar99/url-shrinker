import React from 'react'
import styles from './urlBox.module.css'
const UrlBox=(props)=>{
    return (
        <div className={styles.urlbox}>
            <input className={styles.input} onChange={(e)=>props.url(e.target.value)} placeholder="Enter the link here" type="text"/>
            <button onClick={props.clicked} className={styles.btn}>Shrink</button>
        </div>
    );
}
export default UrlBox;