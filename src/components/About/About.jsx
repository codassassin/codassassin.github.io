import React from 'react';
import './About.scss';
import '../../pages/pages.scss';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import AboutCont from './AboutCont/AboutCont';

const About = () => {
    return (
        <div className='container'>
            <div className='about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>I am a hard working and well-rounded individual who likes to keep busy. I am willing to try new things and always looking for opportunities to expand my skills, knowledge, and abilities. My current goal is to explore new avenues and learn new skills.</p>
                </div>
                <div className='about-cont'>
                    <AboutCont />
                </div>
            </div>
        </div>
    )
}

export default About