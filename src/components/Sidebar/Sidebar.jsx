/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import './Sidebar.scss';
import LogoS from '../../assets/images/logo-lines10p.png';
import LogoSubtitle from '../../assets/images/souvik_white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBlog, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import { ApplicationContext } from '../../context/ApplicationContext';

const Sidebar = () => {
    const {activeSection, handleSectionClick} = useContext(ApplicationContext);

    return (
        <div className='sidebar'>
            <div className='logo'>
                <img src={LogoS} alt='logo'/>
                {/* <img src={LogoSubtitle} alt='logo name' className='sub-logo'/> */}
            </div>
            <nav>
                <Link activeClass='active' className={activeSection === 'home' ? 'active' : ''} smooth={true} spy to='home' href='#home'>
                    {/* <FontAwesomeIcon icon={faHome} color='#4d4d4e'/> */}
                    {/* <FontAwesomeIcon icon={faHome} color='#fff'/> */}
                    <FontAwesomeIcon icon={faHome} color='lightblue'/>
                </Link>
                <Link activeClass='active' className={`about-link ${activeSection === 'about' ? 'active' : ''} `} smooth={true} spy to='about' href='#about'>
                    <FontAwesomeIcon icon={faUser} color='lightblue'/>
                </Link>
                <Link activeClass='active' className={`blog-link ${activeSection === 'blog' ? 'active' : ''} `} smooth={true} spy to='blog' href='#blog'>
                    <FontAwesomeIcon icon={faBlog} color='lightblue'/>
                </Link>
                <Link activeClass='active' className={`contact-link ${activeSection === 'contact' ? 'active' : ''} `} smooth={true} spy to='contact' href='#contact'>
                    <FontAwesomeIcon icon={faEnvelope} color='lightblue'/>
                </Link>
            </nav>

            <ul>
                <li>
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://www.linkedin.com/in/codassassin/'
                    >
                        <FontAwesomeIcon icon={faLinkedinIn}/>
                    </a>
                </li>
                <li>
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://github.com/codassassin'
                    >
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                </li>
                <li>
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://www.instagram.com/souvik.lv.am/'
                    >
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                </li>
                <li>
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://twitter.com/mad4souvik'
                    >
                        <FontAwesomeIcon icon={faTwitter}/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar