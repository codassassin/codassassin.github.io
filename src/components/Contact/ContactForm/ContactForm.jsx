import React, { useContext, useEffect, useRef, useState } from 'react';
import './ContactForm.scss';
import { ids } from '../../../lib/emailJsSources';
import emailjs from '@emailjs/browser';
import Sending from '../../../assets/animations/Sending/Sending';
import ContactError from '../../../assets/animations/ContactError/ContactError';
import Success from '../../../assets/animations/Success/Success';
import { ApplicationContext } from '../../../context/ApplicationContext';

const ContactForm = () => {
    const form = useRef();

    const {latitude, longitude, ip} = useContext(ApplicationContext);

    const [sendText, setSendText] = useState(true);
    const [messageLoading, setMessageLoading] = useState(undefined);
    const [messageSuccess, setMessageSuccess] = useState(undefined);
    const [messageError, setMessageError] = useState(undefined);
    const [formDetails, setFormDetails] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [nullError, setNullError] = useState(null);

    const handleChange = (e) => {
        const value = e.target.value;
        setFormDetails({ ...formDetails, [e.target.name]: value });
    };

    const handleMessageSubmit = async (e) => {
        e.preventDefault();
        const serviceId = ids.SERVICE_ID;
        const templateId = ids.TEMPLATE_ID;
        const publicKey = ids.PUBLIC_KEY;

        if(formDetails.name === "") {
            setNullError('name');
        } else if(formDetails.email === "") {
            setNullError('email');
        } else if(formDetails.subject === "") {
            setNullError('subject');
        } else if(formDetails.message === "") {
            setNullError('message');
        } else {
            resetStatus();
            setSendText(false);
            setNullError(null);

            let userGeoDetails = `[ IP address of the sender: ${ip}, Probable Sender Location: https://www.google.com/maps?q=${latitude},${longitude} ]`;

            let templateParams = {
                from_name: formDetails.name,
                to_name: "Souvik",
                reply_to: formDetails.email,
                message: formDetails.message + userGeoDetails,
                subject: formDetails.subject
            };

            try {
                resetStatus();
                setMessageLoading(true);
                await emailjs
                    .send(serviceId, templateId, templateParams, publicKey);
                resetStatus();
                setMessageSuccess(true);
                setTimeout(() => {
                    setMessageSuccess(false);
                    setSendText(true);
                }, 5000);
            } catch (error) {
                setMessageError(true);
                setTimeout(() => {
                    setMessageError(false);
                    setSendText(true);
                }, 5000);
                // console.log(error);
            } finally {
                setMessageLoading(false);
            }

            resetForm();
        }
    };

    const resetStatus = () => {
        setSendText(false);
        setMessageLoading(false);
        setMessageSuccess(false);
        setMessageError(false);
    };

    const resetForm = () => {
        setFormDetails({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
    };

    useEffect(() => {
        let timeout;
        timeout = setTimeout(() => {
            emailjs.init(ids.PUBLIC_KEY);
        }, 3000);

        return () => {
            clearTimeout(timeout);
        }
    }, []);

    return (
        <form ref={form}>
            <div className='form-cont'>
                <div className='form-row-dual'>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name *'
                        value={formDetails.name}
                        className={`name ${nullError === 'name' ? 'null-error' : ''}`}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                    <input
                        type='email'
                        name='email'
                        placeholder='Email  *'
                        value={formDetails.email}
                        className={`email ${nullError === 'email' ? 'null-error' : ''}`}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                </div>
                <div className='form-row'>
                    <input
                        type='text'
                        name='subject'
                        placeholder='Subject  *'
                        value={formDetails.subject}
                        className={`subject ${nullError === 'subject' ? 'null-error' : ''}`}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                </div>
                <div className='form-row-message'>
                    <textarea
                        name='message'
                        placeholder='Message  *'
                        value={formDetails.message}
                        className={`${nullError === 'message' ? 'null-error' : ''}`}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                </div>
                <button
                    className={`button ${nullError !== null ? 'null-error-btn' : ''}`}
                    onClick={(e) => handleMessageSubmit(e)}
                >
                    {sendText && (
                        <span>SEND</span>
                    )}
                    {messageLoading && (
                        <Sending />
                    )}
                    {messageError && (
                        <ContactError />
                    )}
                    {messageSuccess && (
                        <Success />
                    )}
                </button>
            </div>
        </form>
    )
}

export default ContactForm