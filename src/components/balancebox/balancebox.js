import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import styles from './balancebox.module.css';
import Skeleton from "react-loading-skeleton";

//Display balance information based on selected metal
function Balancebox(props){

    return(
// Asumption-> based on the gold/selver context, BPC likely stands for "Bullion Payment Cryptocurrency"
        <div className={styles.balanceContainer}>
                   <div className={styles.balanceItem}>
                    {props.loading? (
                        <Skeleton height={20} width={50}/>
                    ):(

                    <span className={styles.balanceLabel}>
                    Balance
                   <span className={styles.tooltip} data-tooltip="Bullion Payment Cryptocurrency - 
                    Digital token packed by real physical gold">
                    i
                   </span> 
                   </span>
                    )}

                    {props.loading? (
                        <Skeleton height={15} width={70} style={{marginTop: 5}}/>
                    ):(
                         <span className={styles.units}> {props.bpc} BPC</span>

                    )}
                   </div>

                    <div className={styles.balanceItem}>
                        {props.loading? (
                            <Skeleton height={20} width={50}/>
                        ):(
                            <span className={styles.balanceLabel}>Total Weight</span>

                        )}

                        {props.loading? (
                            <Skeleton height={15} width={70} style={{marginTop: 5}}/>
                        ):(

                           <span className={styles.units}>{props.grams}g</span>
                        )}
                       
                    </div>

                   <div className={styles.balanceItem}>
                    {props.loading? (
                        <Skeleton height={20} width={50}/>
                    ):(
                        <span className={styles.balanceLabel}>Fiat</span>
                    )}
                    {props.loading? (
                        <Skeleton height={15} width={70} style={{marginTop: 5}}/>
                        
                    ):(
                    <span className={styles.units}>${props.usd}</span>
                    )}
                   
                   </div>
                
                
            </div>
                
       
    );
}

export default Balancebox;