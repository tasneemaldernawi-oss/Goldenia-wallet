import React, { useState, useEffect } from "react";
import Togglebutton from "../togglebutton/togglebutton";
import Mockdata from '../mockdata';
import Balancebox from "../balancebox/balancebox";
import VaultTag from "../vaulttag/vaulttag";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from './walletoverview.module.css';



function WalletOverview(){
    // Toggles between gold/silver holdings
    const [isgold, setIsgold] =React.useState(true);
    const data=isgold? Mockdata.gold : Mockdata.silver;

    const currenttime=new Date().toLocaleString();  // to show current date & time
    //

    const [loading, setLoading]=useState(true);
    useEffect(function(){
        const timer=setTimeout(function(){
            setLoading(false);
        }, 1500);
        return function(){clearTimeout(timer);};
    },);


    return(
        <div className={styles.body}>
             <div className={styles.container}>
            {loading? (
                <Skeleton height={25} width="40%" style={{float: "left"}}/>
            ):(

                <h2>Wallet Overview</h2>
            )}
            
            {loading?(
                <Skeleton height={20} width="30%" style={{marginBottom : 10 , float: "right"}} />):(
                <Togglebutton isgold={isgold} setIsgold={setIsgold}/>
                 )}  

            <Balancebox loading={loading} bpc={data.bpc} grams={data.grams}
             usd={data.usd} />
            
            
            {loading? (
                <Skeleton  className={styles.vault}  height={20} width="35%" style={{margin: "5px auto", display:"block", borderRadius:10}} />
            ):(
                <VaultTag vault={data.vault}/>

            )}
        <div className={styles.buttonsContainer}>
            {loading? (
                <>
                <Skeleton className={styles.buttonSkeleton}/>
                <Skeleton className={styles.buttonSkeleton}/>
                <Skeleton className={styles.buttonSkeleton}/>
                <Skeleton className={styles.buttonSkeleton} />
                </>
            ):(
            <>
            <button>Send</button>
            <button>Receive</button>
            <button>Redeem</button>
            <button>Top-Up</button>
            </>
            )}
            
        </div>

            {loading? (
                <Skeleton height={20} width="50%" style={{marginTop:10, float: "left"}}/>
            ):(
                <p className={styles.timestamp}>Last Updated <span>{currenttime}</span> </p>
            )}        
        </div>
        </div>  
    )

}
export default WalletOverview;