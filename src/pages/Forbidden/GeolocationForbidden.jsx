import React from 'react';
import './forbidden.scss';

const GeolocationForbidden = () => {
    return (
        <div className='geolocationForbidden'>
            <div className='geolocation-message'>
                <div className="message">You are denied to view the content</div>
                <div className="message2">You need to grant location permission for viewing the content.</div>
            </div>
            <div className="geolocation-container">
                <div className="neon">403</div>
                <div className="door-frame">
                    <div className="door">
                        <div className="rectangle"></div>
                        <div className="handle"></div>
                        <div className="window">
                            <div className="eye"></div>
                            <div className="eye eye2"></div>
                            <div className="leaf"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeolocationForbidden