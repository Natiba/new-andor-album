import React from 'react';
import '../style-sheets/Footer.css';

const Footer = ({creator}) => {
    return (
<p className="footer-creator">{creator}</p>
    )
}

export default Footer;