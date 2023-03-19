import React from 'react';
import {Route, Routes} from 'react-router-dom';
import styles from './styles/App.module.css';
import Input from './components/input';
import tastSubmit from './components/tastSubmit';


const App = () => {
    return (
        <>
        <div className = {styles.header}>
            My To-Do List
        </div>

        <div className={styles.main}>
            <div className = {styles.inputField}>
                <Input/>
            </div>
        </div>
        </>
    );
};

export default App;