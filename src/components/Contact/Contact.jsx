import React, { useContext } from 'react';
import './Contact.scss';
import '../../pages/pages.scss';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { ApplicationContext } from '../../context/ApplicationContext';
import ContactForm from './ContactForm/ContactForm';
import FormImage from '../../assets/images/form-image.jpg';

const Contact = () => {
    const {letterClass} = useContext(ApplicationContext);

    return (
        <div className='container contact'>
            <div className='contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't',
                                        ' ',
                                        'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <div className='contact-text'>I'm always interested about cool stuff.</div>
                    <div className='contact-text'>Are you minding a project?</div>
                    <div className='contact-text'>Let's talk.</div>
                </div>
                <div className='contact-form'>
                    <ContactForm />
                </div>
            </div>
            <div className='footer'>
                <span className='bottom-tags'>
                    &lt;/body&gt;
                    <br/>
                    <span className='bottom-tags-html'>
                        &lt;/html&gt;
                    </span>
                </span>
            </div>
        </div>
    )
}

export default Contact