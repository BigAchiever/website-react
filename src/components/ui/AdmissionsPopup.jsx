import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiOutlineXMark as HiX, HiOutlineMegaphone } from 'react-icons/hi2';
import Button from './Button';
import './AdmissionsPopup.css';

function AdmissionsPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);

    useEffect(() => {
        // Show popup after 2.5 seconds delay
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        setIsMinimized(true);
    };

    const handleExpand = () => {
        setIsMinimized(false);
        setIsOpen(true);
    };

    return (
        <div className="admissions-popup-root">
            <AnimatePresence>
                {/* Expanded Popup State */}
                {isOpen && (
                    <div className="admissions-popup-overlay">
                        <motion.div
                            className="popup-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={handleClose}
                        />
                        <motion.div
                            key="expanded-card"
                            className="admissions-popup-card"
                            initial={{ opacity: 0, y: 100, scale: 0.9, rotate: -2 }}
                            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, y: 100, scale: 0.9, rotate: 2 }}
                            transition={{ type: 'spring', damping: 20, stiffness: 150 }}
                        >
                            <button className="popup-close-btn" onClick={handleClose}>
                                <HiX />
                            </button>

                            <div className="popup-sticker">NEW</div>

                            <div className="popup-content">
                                <span className="popup-badge">Session 2026-27</span>
                                <h2>ADMISSIONS<br />NOW OPEN</h2>
                                <p>Give your child the gift of excellence. Limited seats available for the new academic session!</p>

                                <div className="popup-actions">
                                    <a href="tel:9300126308" className="popup-btn-link">
                                        <Button variant="primary" className="popup-btn">
                                            CALL NOW
                                        </Button>
                                    </a>
                                    <Link to="/contact-us" onClick={handleClose} className="popup-link">
                                        Enquire Online
                                    </Link>
                                </div>
                            </div>

                            <div className="popup-decoration">
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                        </motion.div>
                    </div>
                )}

                {/* Minimized Bubble State */}
                {isMinimized && (
                    <motion.button
                        key="minimized-bubble"
                        className="admissions-popup-minimized"
                        initial={{ opacity: 0, scale: 0.5, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 50 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleExpand}
                    >
                        <div className="minimized-text">Admissions 2026-27</div>
                        <div className="minimized-icon">
                            <HiOutlineMegaphone />
                        </div>
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}

export default AdmissionsPopup;
