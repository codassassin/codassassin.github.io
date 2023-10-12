import React from 'react';
import './AboutCont.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope, faMobileButton } from '@fortawesome/free-solid-svg-icons';
import { aboutMe, interestsInputs, specializationInputs } from '../../../lib/aboutInfoSources';
import { pdfs } from '../../../lib/assetsSources';

const AboutCont = () => {
    return (
        <div className='aboutCont'>
            <div className='about-cont-row '>
                <div className='about-cont-row-props-details'>
                    <div className='about-cont-row-props-details-top'>
                        <span className='about-cont-row-prop-details-name'>{aboutMe.name}</span>
                        <span className='about-cont-row-prop-detail-top-comma'>,</span>
                        <span className='about-cont-row-prop-details-age'>{aboutMe.age}</span>
                    </div>
                    <span className='about-cont-row-prop-details-role'>{aboutMe.tagName}</span>
                    <div className='about-cont-row-prop-details-contacts'>
                        <div className='about-cont-row-prop-details-contact'>
                            <FontAwesomeIcon icon={faEnvelope} className='about-cont-row-prop-details-contacts-icon' />
                            <span>{aboutMe.emailId}</span>
                        </div>
                        <div className='about-cont-row-prop-details-contact'>
                            <FontAwesomeIcon icon={faMobileButton} className='about-cont-row-prop-details-contacts-icon' />
                            <span>{aboutMe.phoneNo}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-cont-resume' onClick={() => window.open(pdfs.resume)}>
                <span>View Full Résumé</span>
                <FontAwesomeIcon icon={faArrowRight}/>
            </div>
            <div className='about-cont-row'>
                <span className='about-cont-row-title'> INTERESTS </span>
                <div className='about-cont-row-props'>
                    {interestsInputs.map((interestsInput) => (
                        <div className='about-cont-row-prop' key={interestsInput.id}>
                            <span className='about-cont-row-prop-value'>{interestsInput.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className='about-cont-row'>
                <span className='about-cont-row-title'> SPECIALIZATION </span>
                <div className='about-cont-row-props'>
                    {specializationInputs.map((specializationInput) => (
                        <div className='about-cont-row-prop' key={specializationInput.id}>
                            <span className='about-cont-row-prop-value'>{specializationInput.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutCont