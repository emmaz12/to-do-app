import React, {useState} from 'react';
import styles from '../styles/input.module.css';

const TaskSubmit= () => {

    //const[text, setTest] = useState('Default); --> text "Default"
    //const [tagText, setTagText] = useState('');

    //show up on screen --> <div> {tagText} </div>

    //function to hook into input text
        // const changeTag = (newText) =>
            //setTagText(newText);

    //<input type = "text" value = {text} onChange= {(e) => setText(e.target.value)}/>
        //empty pointer function calls changeTag only when onChange happens
        //e.target.value shows each letter being typed

    // onSubmit= {() => {e.preventDefault(); setTagText(text)}
        //prevent form from refreshing everytime you submit



    
    //localStorage --> key value pairs. can only store strings/ints/booleans
    //localStorage.setItem()
    //localStorage.removeItem
    //localStorage.getItem()

    //useEffect(()=> {}, [])   --> stuff in {} will happen when stuff in [] changes
    //JSON.stringify --> turns objects to strings
    //JSON.parse() --> turns strings back to objects


    return (
        <div>
            
        </div>
    );
};

export default TaskSubmit;

