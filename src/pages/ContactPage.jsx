import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import useResponsive from '../hooks/useResponsive';
import Button from '../components/ui/Button';
import './ContactPage.css';

// Contact Form Component
function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ firstName: '', lastName: '', email: '', message: '' });

        // Reset submitted state after 3 seconds
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="contact-form-card">
            <p className="contact-form-intro">
                Please complete this enquiry form and hit submit. We'll get back to you in 48 hours, tops!
            </p>

            {submitted ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ textAlign: 'center', padding: 'var(--space-8)' }}
                >
                    <p style={{ fontSize: 'var(--text-xl)', color: 'green', marginBottom: 'var(--space-4)' }}>
                        ✓ Message sent successfully!
                    </p>
                    <p>We'll get back to you soon.</p>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit} className="new-contact-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label" htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="form-input"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="First Name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="form-input"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last Name"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-input"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="message">Your message</label>
                        <textarea
                            id="message"
                            name="message"
                            className="form-textarea"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Please state your enquiry here..."
                            required
                            rows={4}
                        />
                    </div>

                    <div className="form-footer">
                        <Button
                            type="submit"
                            className="submit-btn-yellow"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'SENDING...' : 'SUBMIT'}
                        </Button>
                    </div>
                </form>
            )}
        </div>
    );
}

// Lottie Animation Component with fetch
function LottieAnimation({ src, loop = true, style = {} }) {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        fetch(src)
            .then((response) => response.json())
            .then((data) => setAnimationData(data))
            .catch((error) => console.error('Error loading animation:', error));
    }, [src]);

    if (!animationData) {
        return (
            <div style={{ ...style, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="spinner" />
            </div>
        );
    }

    return <Lottie animationData={animationData} loop={loop} style={style} />;
}

// Contact Hero Component
function ContactHero() {
    const { isMobile } = useResponsive();

    return (
        <section className="contact-hero">
            <motion.div
                className="contact-hero-content"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <p className="contact-hero-label">Connect with us</p>
                <h1 className="contact-hero-title">
                    Come on and <br />
                    Chat with us!
                </h1>
                <p className="contact-hero-description">
                    Got a suggestion? Maybe a question? Don't be shy – go ahead and reach out to us, we're happy to converse!
                </p>
            </motion.div>

            {/* Contact Now Section - replacing animation */}
            <motion.div
                className="contact-hero-cards"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="hero-contact-section">
                    <div className="hero-contact-cards">
                        <div className="hero-contact-card">
                            <div className="card-header">
                                <div>
                                    <h4>Symbiosis Higher Secondary School</h4>
                                    <p className="hero-location">Jai Prakash Nagar, Beside Kajal Hospital, Adhartal, Jabalpur</p>
                                </div>
                            </div>
                            <div className="phone-buttons">
                                <a href="tel:+919302597884" className="hero-phone-link">
                                    <span className="phone-icon">📞</span>
                                    <span className="phone-number">+91 93025 97884</span>
                                    <span className="tap-text">Tap to call</span>
                                </a>
                                <a href="tel:07614042089" className="hero-phone-link">
                                    <span className="phone-icon">📞</span>
                                    <span className="phone-number">0761 404 2089</span>
                                    <span className="tap-text">Tap to call</span>
                                </a>
                                <a href="tel:+919300126308" className="hero-phone-link">
                                    <span className="phone-icon">📞</span>
                                    <span className="phone-number">+91 93001 26308</span>
                                    <span className="tap-text">Tap to call</span>
                                </a>
                            </div>
                            <div className="card-footer">
                                <a href="mailto:symbiosis.h.s.school@gmail.com" className="email-link">
                                    symbiosis.h.s.school@gmail.com
                                </a>
                                <p className="timing">Mon-Sat: 10:00 AM - 5:00 PM</p>
                            </div>
                        </div>
                        <div className="hero-contact-card">
                            <div className="card-header">
                                <div>
                                    <h4>Symbiosis Senior Secondary School</h4>
                                    <p className="hero-location">Maitri Nagar, Maharajpur, Jabalpur</p>
                                </div>
                            </div>
                            <div className="phone-buttons">
                                <a href="tel:+919302597884" className="hero-phone-link">
                                    <span className="phone-icon">📞</span>
                                    <span className="phone-number">+91 93025 97884</span>
                                    <span className="tap-text">Tap to call</span>
                                </a>
                                <a href="tel:07974746744" className="hero-phone-link">
                                    <span className="phone-icon">📞</span>
                                    <span className="phone-number">0797 474 6744</span>
                                    <span className="tap-text">Tap to call</span>
                                </a>
                                <a href="tel:+919300126308" className="hero-phone-link">
                                    <span className="phone-icon">📞</span>
                                    <span className="phone-number">+91 93001 26308</span>
                                    <span className="tap-text">Tap to call</span>
                                </a>
                            </div>
                            <div className="card-footer">
                                <a href="mailto:symbiosis.h.s.school@gmail.com" className="email-link">
                                    symbiosis.h.s.school@gmail.com
                                </a>
                                <p className="timing">Mon-Sat: 10:00 AM - 5:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

// Contact Form Section
function ContactFormSection() {
    return (
        <section className="contact-form-section">
            <div className="contact-form-container">
                {/* Left Column: Info */}
                <motion.div
                    className="contact-info-col"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="contact-heading-main">WE'D LIKE TO HEAR FROM YOU!</h2>
                    <p className="contact-desc">
                        If you'd like to take part in our programmes, or have any questions about the School of Symbiosis, go ahead and ask away!
                    </p>

                    <div className="contact-school-details">
                        <h3 className="school-name-bold">Symbiosis Higher and Senior Secondary School</h3>

                        <address className="school-address">
                            Jai Prakash Nagar, Beside Kajal Hospital, Adhartal<br />
                            Maitri Nagar, Maharajpur<br />
                            Jabalpur, Madhya Pradesh<br />
                            482004 India
                        </address>
                    </div>

                    <div className="contact-actions">
                        <button
                            className="view-maps-btn"
                            onClick={() => window.open('https://maps.google.com', '_blank')}
                        >
                            VIEW ON GOOGLE MAPS
                        </button>
                    </div>
                </motion.div>

                {/* Right Column: Form */}
                <motion.div
                    className="contact-form-col"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <ContactForm />
                </motion.div>
            </div>
        </section>
    );
}

// Quick Call Section with School Branches
function QuickCallSection() {
    const branches = [
        {
            name: 'Symbiosis Higher Secondary School',
            location: 'Jai Prakash Nagar, Beside Kajal Hospital, Adhartal, Jabalpur',
            phones: [
                { number: '+91 93001 26308', tel: '+919300126308' },
                { number: '+91 93025 97884', tel: '+919302597884' }
            ],
            email: 'symbiosis.h.s.school@gmail.com',
            timing: 'Mon-Sat: 10:00 AM - 5:00 PM'
        },
        {
            name: 'Symbiosis Senior Secondary School',
            location: 'Maitri Nagar, Maharajpur, Jabalpur',
            phones: [
                { number: '+91 94251 54985', tel: '+919425154985' },
                { number: '+91 761 4020320', tel: '+917614020320' }
            ],
            email: 'symbiosis.h.s.school@gmail.com',
            timing: 'Mon-Sat: 10:00 AM - 5:00 PM'
        }
    ];

    return (
        <section className="quick-call-section">
            <motion.div
                className="quick-call-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <span className="quick-call-badge">📞 Quick Connect</span>
                <h2>Call Us Directly</h2>
                <p>Tap any number to call instantly on mobile devices</p>
            </motion.div>

            <div className="branch-cards">
                {branches.map((branch, index) => (
                    <motion.div
                        key={branch.name}
                        className="branch-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                    >
                        <div className="branch-card-header">
                            <div className="branch-icon">🏫</div>
                            <div>
                                <h3>{branch.name}</h3>
                                <p className="branch-location">📍 {branch.location}</p>
                            </div>
                        </div>

                        <div className="branch-phones">
                            {branch.phones.map((phone, i) => (
                                <a
                                    key={i}
                                    href={`tel:${phone.tel}`}
                                    className="branch-phone-btn"
                                >
                                    <span className="phone-ring-icon">📱</span>
                                    <span className="phone-number">{phone.number}</span>
                                    <span className="tap-to-call">Tap to call</span>
                                </a>
                            ))}
                        </div>

                        <div className="branch-info">
                            <a href={`mailto:${branch.email}`} className="branch-email">
                                ✉️ {branch.email}
                            </a>
                            <p className="branch-timing">🕒 {branch.timing}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="whatsapp-cta"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                <a
                    href="https://wa.me/919300126308?text=Hi! I'm interested in admissions at Symbiosis School."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-btn"
                >
                    <span className="whatsapp-icon">💬</span>
                    Chat on WhatsApp
                </a>
            </motion.div>
        </section>
    );
}

// Main Contact Page Component
import usePageTitle from '../hooks/usePageTitle';

function ContactPage() {
    usePageTitle('Contact Us');
    return (
        <div className="contact-page">
            <ContactHero />
            <ContactFormSection />
        </div>
    );
}

export default ContactPage;
