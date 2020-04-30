import React from 'react'
import styles from './shortUrlBox.module.css'
import ClipboardJS from 'clipboard'
import M from 'materialize-css';

new ClipboardJS('button')
const ShorturlBox=(props)=>{
    return (
        <div className={styles.shorturlbox}>
            
            <input id="foo" value={'localhost:5000/'+props.data} readOnly className={styles.input} type="text"/>
            <button onClick={()=>{  M.Toast.dismissAll(); M.toast({html: 'Copied',classes:styles.toast+' '+styles.copied})}} data-clipboard-target="#foo" className={styles.btn}>Copy</button>
        </div>
    );
}
export default ShorturlBox;