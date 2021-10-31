import React from 'react';
import { DiAndroid } from "react-icons/di";
import { FaYoutube, FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
    return (
        <div className="text-center footer">
            <h1>Assignment-11</h1>
            <h3>Md. Amanullah Parvez, emailtoamanullah@gmail.com</h3>

            <div className="links">
                <a className="youtube" href="https://www.youtube.com" target="_blank"><FaYoutube /></a>
                <a className="facebook" href="https://www.facebook.com/parvez.aman.18" target="_blank"><FaFacebookF /></a>
                <a className="twitter" href="https://twitter.com/" target="_blank"><FaTwitter /></a>
                <a className="linkedin" href="https://www.linkedin.com/in/md-amanullah-parvez-10a543207/" target="_blank"><FaLinkedin /></a>
            </div>
        </div>
    );
};

export default Footer;