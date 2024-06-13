import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <ul className="social-icon">
                <li className="social-icon__item"><a className="social-icon__link" target="_blank" href="https://www.facebook.com/sultanradio/">
                    <img className="sm-logo" src="/logo-facebook.png" alt="Facebook" />
                </a></li>
                <li className="social-icon__item"><a className="social-icon__link" target="_blank" href="https://www.instagram.com/sultanradio.netlify.app/">
                    <img className="sm-logo" src="/logo-instagram.jpg" alt="Instagram" />
                </a></li>
                <li className="social-icon__item"><a className="social-icon__link" target="_blank" href="https://www.linkedin.com/in/karim-soltane-416085290/">
                    <img className="sm-logo" src="/logo-linked.png" alt="LinkedIn" />
                </a></li>
                <li className="social-icon__item"><a className="social-icon__link" target="_blank" href="https://ksoltane-portfolio.netlify.app/">
                    <img className="sm-logo2" src="/logo-pf2.png" alt="Portfolio" />
                </a></li>
            </ul>
            <p className='footer-text'>&copy;&nbsp;2024 Sultan Radio | No Rights Reserved </p>
        </footer>
    );
}

export default Footer;