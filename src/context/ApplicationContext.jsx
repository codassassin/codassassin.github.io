/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import devtools from '../../node_modules/devtools-detect/index';
import os from 'os';
import { ids } from "../lib/emailJsSources";
import emailjs from '@emailjs/browser';

export const ApplicationContext = createContext();

export const ApplicationContextProvider = ({ children }) => {
    const [activeSection, setActiveSection] = useState(null);
    const [forbidden, setForbidden] = useState(false);
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        let timeout;
        timeout = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    useEffect(() => {
        window.addEventListener('devtoolschange', (event) => {
            if(event.detail.isOpen) {
                setForbidden(true);
                sendIPReport();
            }
        });

        return () => {
            window.removeEventListener('devtoolschange', () => {});
        }
    }, []);

    const handleSectionClick = (sectionId) => {
        document.querySelector(`#${sectionId}`).scrollIntoView({
            behavior: 'smooth',
        });

        setActiveSection(sectionId);
    };

    const sendIPReport = async () => {
        let ip = getIPAddress();

        const serviceId = ids.SERVICE_ID;
        const templateId = ids.TEMPLATE_ID;
        const publicKey = ids.PUBLIC_KEY;

        let templateParams = {
            from_name: ip,
            to_name: "Souvik",
            reply_to: "",
            message: ip + " tried to acess dev-tools",
            subject: "DEV-TOOLS ACCESSED !"
        };

        try {
            await emailjs
                .send(serviceId, templateId, templateParams, publicKey);
        } catch (error) {
            console.log("Report Sent !!");
        }
    };

    const getIPAddress = () => {
        const nets = os.networkInterfaces();

        for(const name of Object.keys(nets)) {
            for(const net of nets[name]) {
                if(net.family === 'IPv4' && !net.internal) {
                    return net.address;
                }
            }
        }

        return null;
    };

    return (
        <ApplicationContext.Provider
            value={{
                activeSection,
                setActiveSection,
                handleSectionClick,
                letterClass,
                setLetterClass,
                forbidden
            }}
        >
            {children}
        </ApplicationContext.Provider>
    );
};