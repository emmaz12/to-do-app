import React, {useState} from 'react';
import styles from '../styles/input.module.css';

const Input = () => {
 
    const [text, setText] = useState('');
    const [tagText, setTagText] = useState('');
    const [list, setList] = useState<string[]>([]);

    const changeTag = (newText:string) => {
        setList([...list, newText]);
    }

    return (
        <>
        <div className = {styles.input}>
            <form onSubmit={(e) => {e.preventDefault(); setTagText(text); changeTag(text)}}>

                <input className={styles.text} type="text" placeholder="  I need to..." value = {text} onChange = {(e) => setText(e.target.value)}/>
                <button className={styles.submitButton}> </button>

            </form>
        </div>

        <br></br>

        {list.map((value, key) => {
            return (
    
                <div className = {styles.task}>
                    {value}
                </div>
            )
        })}
        </>
            
   
    );
};

export default Input;
