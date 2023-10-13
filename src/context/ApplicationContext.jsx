/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import devtools from '../../node_modules/devtools-detect/index';

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