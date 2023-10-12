import React, { useContext } from 'react';
import './Home.scss';
import '../../pages/pages.scss';
import { ApplicationContext } from '../../context/ApplicationContext';
import { Link } from 'react-scroll';
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import Logo from '../Logo/Logo';

const Home = () => {
    const {activeSection, letterClass} = useContext(ApplicationContext);

    const nameArray = ['o', 'u', 'v', 'i', 'k'];
    const jobArray = ['a', 'p', 'p', 'l', 'i', 'c', 'a', 't', 'i', 'o', 'n',
                        ' ',
                        'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

    return (
        <div className='container home'>
            <div className='header'>
                <span className='top-tags'>
                    &lt;html&gt;
                    <br/>
                    <span className='top-tags-body'>
                        &lt;body&gt;
                    </span>
                </span>
            </div>
            <div className='home-page'>
                <div className='text-zone'>
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i</span>
                        <span className={`${letterClass} _13`}>,</span>
                        <br />
                        <span className={`${letterClass} _14`}>I</span>
                        <span className={`${letterClass} _15`}>'</span>
                        <span className={`${letterClass} _16`}>m</span>
                        <img src={LogoTitle} alt='developer'/>
                        <AnimatedLetters
                            strArray={nameArray}
                            idx={15}
                        />
                        <br />
                        <AnimatedLetters
                            strArray={jobArray}
                            idx={22}
                        />
                    </h1>
                    <h2> Frontend Developer / Micro-services / Spring Boot </h2>
                    <Link
                        activeClass='active'
                        className={`flat-button
                                ${activeSection === 'contact' ? 'active' : ''} `}
                        smooth={true} spy href='#contact' to='contact'
                    >
                        CONTACT ME
                    </Link>
                </div>
                <div className='logo-container'>
                    <Logo />
                </div>
            </div>
        </div>
    )
}

export default Home