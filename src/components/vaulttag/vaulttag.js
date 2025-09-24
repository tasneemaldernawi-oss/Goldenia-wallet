import React from "react";
import styles from './vaulttag.module.css';

function VaultTag(props){
    return(
        <div className={styles.container}>
            <p className={styles.vault}>📍{props.vault}</p>
        </div>
    );

}
export default VaultTag;