import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineArrowTopRightOnSquare as FaExternalLinkAlt } from 'react-icons/hi2';


// Social media links data
const socialLinks = [
    {
        name: 'Facebook',
        icon: FaFacebookF,
        iconClass: 'facebook',
        description: 'Follow us on Facebook for updates, events, and school news.',
        url: 'https://www.facebook.com/Symbiosis.school.jabalpur/',
        followers: '5K+ Followers',
    },
    {
        name: 'Instagram',
        icon: FaInstagram,
        iconClass: 'instagram',
        description: 'Check out our Instagram for photos and stories from school life.',
        url: 'https://www.instagram.com/symbiosis_school_jabalpur/',
        followers: '3K+ Followers',
    },
    {
        name: 'YouTube',
        icon: FaYoutube,
        iconClass: 'youtube',
        description: 'Subscribe to our YouTube channel for educational content and event recordings.',
        url: 'https://www.youtube.com/@symbiosis.group.of.schools',
        followers: '1K+ Subscribers',
    },
    {
        name: 'LinkedIn',
        icon: FaLinkedinIn,
        iconClass: 'linkedin',
        description: 'Connect with us on LinkedIn for professional updates and alumni network.',
        url: 'https://linkedin.com',
        followers: '500+ Connections',
    },
];

// Social Hero Section
function SocialHero() {
    return (
        <section className="social-hero">
            <div className="social-hero-container">
                <div className="social-hero-content">
                    <motion.h1
                        className="social-hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Connect With Us
                    </motion.h1>
                    <motion.p
                        className="social-hero-description"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Stay updated with the latest news, events, and happenings at Symbiosis School.
                        Follow us on our social media platforms!
                    </motion.p>
                </div>
            </div>
        </section>
    );
}

// Social Links Section
function SocialLinksSection() {
    const handleClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <section className="social-links-section">
            <div className="social-links-container">
                <div className="social-links-grid">
                    {socialLinks.map((social, index) => {
                        const Icon = social.icon;
                        return (
                            <motion.div
                                key={social.name}
                                className="social-link-card"
                                onClick={() => handleClick(social.url)}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className={`social-link-icon ${social.iconClass}`}>
                                    <Icon />
                                </div>
                                <div className="social-link-content">
                                    <h3>
                                        {social.name}
                                        <FaExternalLinkAlt
                                            style={{
                                                marginLeft: '8px',
                                                fontSize: '12px',
                                                opacity: 0.5
                                            }}
                                        />
                                    </h3>
                                    <p>{social.description}</p>
                                    <p style={{
                                        marginTop: 'var(--space-2)',
                                        fontWeight: 'bold',
                                        color: 'var(--color-primary-dark)'
                                    }}>
                                        {social.followers}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

// Social Media Preview Section
function SocialMediaPreview() {
    return (
        <section style={{
            backgroundColor: 'var(--color-primary)',
            padding: 'var(--space-16) var(--space-4)',
            textAlign: 'center'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ maxWidth: '800px', margin: '0 auto' }}
            >
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 'var(--space-4)' }}>
                    Share Your Moments
                </h2>
                <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-6)' }}>
                    Tag us in your posts and stories! Use #SymbiosisSchoolJabalpur to be featured on our page.
                </p>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 'var(--space-3)',
                    flexWrap: 'wrap'
                }}>
                    <motion.img
                        src="/assets/images/social-media.png"
                        alt="Social media"
                        style={{
                            maxWidth: '100%',
                            borderRadius: 'var(--radius-xl)',
                            boxShadow: 'var(--shadow-xl)'
                        }}
                        whileHover={{ scale: 1.02 }}
                    />
                </div>
            </motion.div>
        </section>
    );
}

// Main Social Media Page Component
function SocialMediaPage() {
    return (
        <div className="social-page">
            <SocialHero />
            <SocialLinksSection />
            {/* <SocialMediaPreview /> */}
        </div>
    );
}

export default SocialMediaPage;
