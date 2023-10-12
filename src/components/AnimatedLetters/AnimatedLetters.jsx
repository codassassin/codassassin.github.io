import React, { useContext } from 'react';
import './AnimatedLetters.scss';
import { ApplicationContext } from '../../context/ApplicationContext';

const AnimatedLetters = ({ strArray, idx }) => {
    const {letterClass} = useContext(ApplicationContext);

    return (
        <span>
        {
            strArray.map((char, i) => (
                <span key={i} className={`${letterClass} _${i + idx}`}>
                    {char}
                </span>
            ))
        }
        </span>
    )
}

export default AnimatedLetters