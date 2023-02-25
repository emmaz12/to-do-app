import React from 'react';
import {Route, Routes} from 'react-router-dom';
import styles from './styles/App.module.css';
import Input from './components/input';
import SubmitButton from './components/submitButton';


const App = () => {
    return (
        <>
        <div className={styles.main}>
            <div className = {styles.inputField}>
                <Input/>
            </div>
        </div>

        <div className = {styles.buttonPosition}>
            <SubmitButton/>
        </div>

        </>
    );
};

export default App;