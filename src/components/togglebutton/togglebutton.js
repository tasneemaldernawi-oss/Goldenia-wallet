
import "./togglebutton.module.css";
import styles from './togglebutton.module.css';

function Togglebutton(props){
    function switchstate() {
        props.setIsgold(!props.isgold)
    }
    return(

        <div className={styles.container}>
            <button onClick={switchstate} className= {props.isgold ? styles.buttonGold:styles.buttonSilver} >
                View {props.isgold? 'Silver':'Gold'} holdings
            </button>
            
        </div>
    );
}
export default Togglebutton;