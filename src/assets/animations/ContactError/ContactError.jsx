import React from 'react';
import './ContactError.scss';

const ContactError = () => {
  return (
    <div id='contactError'>
        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
        </svg>
        <span className='exclam'>!</span>
        <span>Error Sending Message !</span>
    </div>
  )
}

export default ContactError