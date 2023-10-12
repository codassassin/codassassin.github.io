import React from 'react';
import './Logo.scss';
import LogoS from '../../assets/images/logo-lines.png';

const Logo = () => {
    return (
        <img src={LogoS} alt='LogoS' className='solid-logo' />
    )
}

export default Logo