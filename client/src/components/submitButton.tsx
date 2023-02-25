import React, {useState} from 'react';
import styles from '../styles/App.module.css';

const SubmitButton = () => {

    const handleClick = () => {
        console.log('Button clicked');
    };


    return (
        <button className={styles.submitButton} onClick={handleClick}> </button>
    );
};

export default SubmitButton;

