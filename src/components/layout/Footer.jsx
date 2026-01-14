import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: FaInstagram, url: 'https://www.instagram.com/symbiosis_school_jabalpur/', label: 'Instagram' },
        { icon: FaYoutube, url: 'https://www.youtube.com/@symbiosis.group.of.schools', label: 'YouTube' },
        { icon: FaLinkedinIn, url: 'https://linkedin.com/company/symbiosis-school', label: 'LinkedIn' },
        { icon: FaFacebookF, url: 'https://www.facebook.com/Symbiosis.school.jabalpur/', label: 'Facebook' },
    ];

    const quickLinks = [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about-us' },
        { label: 'Resources', path: '/resources' },
        { label: 'Social Media', path: '/social-media' },
        { label: 'Contact Us', path: '/contact-us' },
        { label: 'Feedback', path: '/feedback' },
    ];

    return (
        <footer className="footer">
            {/* Map Illustration - Full Width Top */}
            <div className="footer-map">
                <img
                    src="/assets/images/map.svg"
                    alt="City Map Illustration"
                    className="footer-map-desktop"
                    width="1200"
                    height="400"
                />
                <img
                    src="/assets/images/map-mobile.svg"
                    alt="City Map Illustration"
                    className="footer-map-mobile"
                    width="375"
                    height="250"
                />
            </div>

            <div className="footer-content">
                {/* Column 1: Brand & Identity */}
                <div className="footer-section brand-section">
                    <div className="footer-logo">
                        <img src="/assets/images/logo.png" alt="Symbiosis School Logo" />
                    </div>
                    <h2 className="footer-brand-name">
                        SYMBIOSIS GROUP<br />OF SCHOOLS
                    </h2>
                    <p className="footer-established">Established in 2000</p>

                    <div className="footer-social">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.label}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                >
                                    <Icon />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className="footer-section links-section">
                    <h4>QUICK LINKS</h4>
                    <ul className="footer-links-list">
                        {quickLinks.map((link) => (
                            <li key={link.label}>
                                <Link to={link.path}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: School Info */}
                <div className="footer-section schools-section">
                    <div className="school-block">
                        <h4>SYMBIOSIS HIGHER SECONDARY SCHOOL</h4>
                        <p>Jai Prakash Nagar, Beside Kajal Hospital, Adhartal, Jabalpur - 482004</p>
                        <p className="contact-row">
                            <span>📞 0761 404 2089, 930 012 6308</span>
                        </p>
                        <p className="contact-row">
                            <span>✉ symbiosis.h.s.school@gmail.com</span>
                        </p>
                    </div>

                    <div className="school-block">
                        <h4>SYMBIOSIS SENIOR SECONDARY SCHOOL</h4>
                        <p>Maitri Nagar, Maharajpur, Jabalpur - 482004</p>
                        <p className="contact-row">
                            <span>📞 0797 474 6744, 930 259 7884</span>
                        </p>
                        <p className="contact-row">
                            <span>✉ symbiosis.h.s.school@gmail.com</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {currentYear} Symbiosis Group of Schools. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
