/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import devtools from '../../node_modules/devtools-detect/index';
import { ids } from "../lib/emailJsSources";
import emailjs from '@emailjs/browser';
import axios from "axios";

export const ApplicationContext = createContext();

export const ApplicationContextProvider = ({ children }) => {
    const [activeSection, setActiveSection] = useState(null);
    const [forbidden, setForbidden] = useState(false);
    const [locationForbidden, setLocationForbidden] = useState(false);
    const [letterClass, setLetterClass] = useState('text-animate');
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

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
            }
        });

        return () => {
            window.removeEventListener('devtoolschange', () => {});
        }
    }, []);

    useEffect(() => {
        if("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log(position);
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                }
            );
        } else {
            return null;
        }
    }, []);

    useEffect(() => {
        sendIPReport();
    }, [forbidden]);

    const handleSectionClick = (sectionId) => {
        document.querySelector(`#${sectionId}`).scrollIntoView({
            behavior: 'smooth',
        });

        setActiveSection(sectionId);
    };

    const sendIPReport = async () => {
        let ip = await getIPAddress();

        const pos = `https://www.google.com/maps?q=${latitude},${longitude}`;
        console.log(pos);

        const serviceId = ids.SERVICE_ID;
        const templateId = ids.TEMPLATE_ID;
        const publicKey = ids.PUBLIC_KEY;

        let templateParams = {
            from_name: ip,
            to_name: "Souvik",
            reply_to: "",
            message: "Someone tried to acess dev-tools with IP address: " + ip + "; Google Map: " + pos,
            subject: "DEV-TOOLS ACCESSED !"
        };

        if(latitude !== null && longitude !== null) {
            try {
                await emailjs
                    .send(serviceId, templateId, templateParams, publicKey);
            } catch (error) {
                console.log("Report Sent !!");
            }
        }
    };

    const getIPAddress = async () => {
        try {
            const res = await axios.get("https://geolocation-db.com/json/");
            return res.data.IPv4;
        } catch(error) {
            console.log("REPORT SENT !!");
        }
    };

    const getGeoLocation = () => {
        if("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    let pos = `https://www.google.com/maps?q=${position.coords.latitude},${position.coords.longitude}`;
                    console.log(pos);
                    return pos;
                }
            );
        } else {
            return null;
        }
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