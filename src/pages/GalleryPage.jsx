import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiOutlineCamera, HiOutlinePhoto, HiOutlineLockClosed, HiOutlineXMark } from 'react-icons/hi2';
import LightboxGallery from '../components/ui/LightboxGallery';
import { FadeIn, ZoomIn } from '../components/animations/Animations';
import usePageTitle from '../hooks/usePageTitle';
import Button from '../components/ui/Button';
import './GalleryPage.css';

// Hardcoded admin credentials (Phase 1)
const ADMIN_CREDENTIALS = {
    email: "admin@symbiosisschooljabalpur.in",
    password: "symbiosis2024"
};

const galleryImages = [
    { id: 1, src: '/assets/images/one.jpeg', caption: 'Annual Day Celebration', category: 'Events' },
    { id: 2, src: '/assets/images/two.jpeg', caption: 'Science Exhibition', category: 'Academics' },
    { id: 3, src: '/assets/images/three.jpeg', caption: 'Sports Day Competition', category: 'Sports' },
    { id: 4, src: '/assets/images/five.jpeg', caption: 'Cultural Program', category: 'Events' },
    { id: 5, src: '/assets/images/six.jpeg', caption: 'Art Exhibition', category: 'Academics' },
    { id: 6, src: '/assets/images/award.jpg', caption: 'Award Ceremony 2023', category: 'Achievements' },
    { id: 7, src: '/assets/images/award2.jpeg', caption: 'Academic Excellence Awards', category: 'Achievements' },
    { id: 8, src: '/assets/images/award3.jpeg', caption: 'Sports Achievements', category: 'Achievements' },
    { id: 9, src: '/assets/images/highersec.jpeg', caption: 'Higher Secondary Campus', category: 'Campus' },
    { id: 10, src: '/assets/images/sen2.jpeg', caption: 'Senior Secondary Building', category: 'Campus' },
];

// Login Modal Component
function LoginModal({ isOpen, onClose, onLoginSuccess }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Simulate network delay
        setTimeout(() => {
            if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
                onLoginSuccess();
                onClose();
                setEmail('');
                setPassword('');
            } else {
                setError('Invalid email or password. Please try again.');
            }
            setIsLoading(false);
        }, 800);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="login-modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="login-modal"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="login-modal-header">
                        <div className="login-icon">
                            <HiOutlineLockClosed />
                        </div>
                        <h2>Admin Access</h2>
                        <p>Enter your credentials to manage the gallery</p>
                        <button className="login-modal-close" onClick={onClose}>
                            <HiOutlineXMark />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="login-form">
                        {error && (
                            <div className="login-error">
                                {error}
                            </div>
                        )}

                        <div className="form-group">
                            <label className="form-label">School Email</label>
                            <input
                                type="email"
                                className="form-input"
                                placeholder="admin@symbiosisschooljabalpur.in"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-input"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <Button
                            variant="primary"
                            type="submit"
                            disabled={isLoading}
                            style={{ width: '100%', marginTop: 'var(--space-4)' }}
                        >
                            {isLoading ? 'Signing in...' : 'Sign In'}
                        </Button>
                    </form>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

function GalleryPage() {
    usePageTitle('Gallery', 'Explore the vibrant moments and achievements at Symbiosis School Jabalpur through our photo gallery.');
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

    const handleAdminCardClick = () => {
        if (!isAdminLoggedIn) {
            setShowLoginModal(true);
        }
    };

    const handleLoginSuccess = () => {
        setIsAdminLoggedIn(true);
    };

    const handleLogout = () => {
        setIsAdminLoggedIn(false);
    };

    return (
        <div className="gallery-page">
            {/* Hero Section */}
            <section className="gallery-hero">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Photo Gallery
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Explore moments from our school life, events, and achievements
                </motion.p>
            </section>

            {/* Gallery Content */}
            <section className="gallery-content">
                <LightboxGallery
                    initialImages={galleryImages}
                    showCategories={true}
                    showAdminControls={isAdminLoggedIn}
                />
            </section>

            {/* Info Section - Premium Cards */}
            <section className="gallery-info">
                <div className="gallery-info-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Share Your Memories
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Be part of our growing collection of cherished moments
                    </motion.p>
                </div>

                <div className="info-grid">
                    <motion.div
                        className="info-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="info-icon">
                            <HiOutlineCamera />
                        </div>
                        <h3>Submit Photos</h3>
                        <p>
                            Parents and students can share school photos by emailing them to{' '}
                            <a href="mailto:symbiosis.h.s.school@gmail.com">symbiosis.h.s.school@gmail.com</a>
                        </p>
                    </motion.div>

                    <motion.div
                        className="info-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="info-icon">
                            <HiOutlinePhoto />
                        </div>
                        <h3>Browse Collections</h3>
                        <p>
                            Explore photos by category — Events, Academics, Sports, Achievements, and Campus life
                        </p>
                    </motion.div>

                    <motion.div
                        className={`info-card ${!isAdminLoggedIn ? 'info-card-clickable' : ''}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        onClick={handleAdminCardClick}
                        style={{ cursor: isAdminLoggedIn ? 'default' : 'pointer' }}
                    >
                        <div className="info-icon">
                            <HiOutlineLockClosed />
                        </div>
                        <h3>{isAdminLoggedIn ? 'Admin Mode Active' : 'Admin Access'}</h3>
                        {isAdminLoggedIn ? (
                            <>
                                <p>You are logged in as admin. Use the controls above to manage images.</p>
                                <button
                                    className="logout-btn"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleLogout();
                                    }}
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <p>Click here to login and manage gallery images</p>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="gallery-cta">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Want to See More?</h2>
                    <p>Check out our latest events or follow us on social media for daily updates and behind-the-scenes moments.</p>
                    <div className="cta-buttons">
                        <Link to="/social-media">
                            <Button variant="primary">Follow Us</Button>
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Login Modal */}
            <LoginModal
                isOpen={showLoginModal}
                onClose={() => setShowLoginModal(false)}
                onLoginSuccess={handleLoginSuccess}
            />
        </div>
    );
}

export default GalleryPage;
