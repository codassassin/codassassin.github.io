import React, { useEffect, useRef, useState } from 'react';
import './ContactForm.scss';
import { Input } from '@mui/material';
import { ids } from '../../../lib/emailJsSources';
import emailjs from '@emailjs/browser';
import Sending from '../../../assets/animations/Sending/Sending';
import ContactError from '../../../assets/animations/ContactError/ContactError';
import Success from '../../../assets/animations/Success/Success';

const ContactForm = () => {
    const form = useRef();

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

    const handleChange = (e) => {
        const value = e.target.value;
        setFormDetails({ ...formDetails, [e.target.name]: value });
    };

    const handleMessageSubmit = async (e) => {
        e.preventDefault();
        resetStatus();
        setSendText(false);
        const serviceId = ids.SERVICE_ID;
        const templateId = ids.TEMPLATE_ID;
        const publicKey = ids.PUBLIC_KEY;

        let templateParams = {
            from_name: formDetails.name,
            to_name: "Souvik",
            reply_to: formDetails.email,
            message: formDetails.message,
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
            console.log(error);
        } finally {
            setMessageLoading(false);
        }

        resetForm();
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
                        className='name'
                        onChange={(e) => handleChange(e)}
                        required
                    />
                    <input
                        type='email'
                        name='email'
                        placeholder='Email  *'
                        value={formDetails.email}
                        className='email'
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
                        className='subject'
                        onChange={(e) => handleChange(e)}
                        required
                    />
                </div>
                <div className='form-row-message'>
                    <textarea
                        name='message'
                        placeholder='Message  *'
                        value={formDetails.message}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                </div>
                <button className='button'
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