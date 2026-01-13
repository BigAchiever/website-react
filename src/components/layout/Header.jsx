import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineBars3 as HiMenu, HiOutlineXMark as HiX, HiOutlineHome as HiHome, HiOutlineInformationCircle as HiInformationCircle, HiOutlineShare as HiShare, HiOutlinePhone as HiPhone, HiOutlineChevronDown as HiChevronDown, HiOutlinePhoto as HiPhotograph, HiOutlineAcademicCap as HiAcademicCap, HiOutlineBell as HiBell } from 'react-icons/hi2';
import useResponsive from '../../hooks/useResponsive';

const navLinks = [
    { path: '/', label: 'Home', icon: HiHome },
    { path: '/about-us', label: 'About Us', icon: HiInformationCircle },
    {
        label: 'Our Schools',
        icon: HiAcademicCap,
        dropdown: [
            { path: '/learn-more-symbiosis-higher-secondary-school', label: 'Higher Secondary School' },
            { path: '/learn-more-symbiosis-senior-secondary-school', label: 'Senior Secondary School' },
        ]
    },
    { path: '/admissions', label: 'Admissions', icon: HiAcademicCap },
    { path: '/gallery', label: 'Gallery', icon: HiPhotograph },
    { path: '/social-media', label: 'Social', icon: HiShare },
    { path: '/contact-us', label: 'Contact', icon: HiPhone },
];

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const { isMobile } = useResponsive();
    const location = useLocation();
    const navigate = useNavigate();

    // Scroll handlers
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;

            // Progress calculation
            if (scrollTotal > 0) {
                setScrollProgress((currentScrollY / scrollTotal) * 100);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
        setActiveDropdown(null);
    }, [location.pathname]);

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    const handleNavigation = (path) => {
        navigate(path);
        setMenuOpen(false);
        setActiveDropdown(null);
    };

    const toggleDropdown = (label) => {
        setActiveDropdown(activeDropdown === label ? null : label);
    };

    return isMobile ? (
        <motion.header
            className="header-v2-wrapper mobile"
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="header-pill-container mobile">
                {/* Background & Progress (Clipped) */}
                <div className="header-pill-background">
                    <div className="header-progress-v2">
                        <motion.div
                            className="header-progress-v2-bar"
                            style={{ width: `${scrollProgress}%` }}
                        />
                    </div>
                </div>

                {/* Content (Visible Overflow) */}
                <div className="header-mobile-v2">
                    <Link to="/" className="header-v2-logo">
                        <div className="header-v2-logo-avatar">
                            <img src="/assets/images/logo.png" alt="Logo" className="mobile-v2-logo-img" />
                        </div>
                        <span className="header-v2-logo-text">Symbiosis</span>
                    </Link>

                    <div className="header-v2-mobile-btns">
                        <Link to="/notifications" className="header-v2-action-btn small">
                            <HiBell />
                        </Link>
                        <button
                            className={`menu-button-v2 ${menuOpen ? 'open' : ''}`}
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? <HiX /> : <HiMenu />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="mobile-v2-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setMenuOpen(false)}
                    >
                        <motion.nav
                            className="mobile-v2-menu"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="mobile-v2-menu-header">
                                <h3>Menu</h3>
                                <button onClick={() => setMenuOpen(false)}><HiX /></button>
                            </div>
                            <div className="mobile-v2-menu-items">
                                {navLinks.map((link) => {
                                    const Icon = link.icon;
                                    if (link.dropdown) {
                                        return (
                                            <div key={link.label} className="mobile-v2-item-group">
                                                <div className="mobile-v2-item-label" onClick={() => toggleDropdown(link.label)}>
                                                    <Icon />
                                                    <span>{link.label}</span>
                                                    <HiChevronDown className={`dropdown-icon-v2 ${activeDropdown === link.label ? 'open' : ''}`} />
                                                </div>
                                                <AnimatePresence>
                                                    {activeDropdown === link.label && (
                                                        <motion.div
                                                            className="mobile-v2-subitems"
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                        >
                                                            {link.dropdown.map((item) => (
                                                                <Link key={item.path} to={item.path} onClick={() => setMenuOpen(false)}>
                                                                    {item.label}
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        );
                                    }
                                    return (
                                        <Link
                                            key={link.path}
                                            to={link.path}
                                            className={`mobile-v2-item ${isActive(link.path) ? 'active' : ''}`}
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            <Icon />
                                            <span>{link.label}</span>
                                        </Link>
                                    );
                                })}
                            </div>
                            <div className="mobile-v2-menu-footer">
                                <Link to="/admissions" className="mobile-v2-cta" onClick={() => setMenuOpen(false)}>
                                    Admission Open 2026-2027
                                </Link>
                            </div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    ) : (
        <motion.header
            className="header-v2-wrapper"
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="header-pill-container">
                {/* Background & Progress (Clipped) */}
                <div className="header-pill-background">
                    <div className="header-progress-v2">
                        <motion.div
                            className="header-progress-v2-bar"
                            style={{ width: `${scrollProgress}%` }}
                        />
                    </div>
                </div>

                {/* Content (Visible Overflow) */}
                <div className="header-desktop-v2">
                    <Link to="/" className="header-v2-logo">
                        <div className="header-v2-logo-avatar">
                            <img src="/assets/images/logo.png" alt="Symbiosis School Logo" />
                        </div>
                        <div className="header-v2-logo-text-wrapper">
                            <span className="header-v2-logo-text">Symbiosis</span>
                            <span className="header-v2-logo-subtext">Group of Schools</span>
                        </div>
                    </Link>

                    <nav className="header-v2-nav">
                        {navLinks.slice(1).map((link) => {
                            if (link.dropdown) {
                                return (
                                    <div
                                        key={link.label}
                                        className="header-v2-nav-dropdown"
                                        onMouseEnter={() => setActiveDropdown(link.label)}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        <button className="header-v2-nav-link">
                                            {link.label}
                                            <HiChevronDown className={`dropdown-icon-v2 ${activeDropdown === link.label ? 'open' : ''}`} />
                                        </button>

                                        <AnimatePresence>
                                            {activeDropdown === link.label && (
                                                <motion.div
                                                    className="header-v2-dropdown-menu"
                                                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    {link.dropdown.map((item) => (
                                                        <Link
                                                            key={item.path}
                                                            to={item.path}
                                                            className={`header-v2-dropdown-item ${isActive(item.path) ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`header-v2-nav-link ${isActive(link.path) ? 'active' : ''}`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="header-v2-actions">
                        <Link to="/notifications" className="header-v2-action-btn" title="Notifications">
                            <HiBell />
                            <span className="v2-notification-dot"></span>
                        </Link>
                        <Link to="/contact-us" className="header-v2-cta-btn">
                            Contact Now
                        </Link>
                    </div>
                </div>
            </div>
        </motion.header>
    );
}

export default Header;
