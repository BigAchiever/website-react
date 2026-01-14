import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiLightningBolt, HiLightBulb, HiAcademicCap, HiShieldCheck } from 'react-icons/hi';
import { FaShapes, FaCube, FaLayerGroup, FaPenFancy } from 'react-icons/fa';
import '../styles/pages.css';

import usePageTitle from '../hooks/usePageTitle';

const AboutPage = () => {
    usePageTitle('About Us');
    return (
        <div className="about-page">
            <AboutHero />
            <UnderstandingSection />
            <AboutTeach />
            <Backstory />
        </div>
    );
};

const AboutHero = () => {
    return (
        <section className="about-hero-section">
            <div className="about-hero-content">
                <span className="about-hero-label">ABOUT THE SCHOOL</span>
                <h1 className="about-hero-title">WHAT'S OUR DEAL?</h1>
                <p className="about-hero-text">
                    We teach people how to solve the challenges they care about,
                    through design – our classroom is the world around us.
                </p>

                {/* Decorative Elements */}
                <div className="hero-decoration">
                    <div className="decoration-lines">
                        <div className="line l1"></div>
                        <div className="line l2"></div>
                        <div className="line l3"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const UnderstandingSection = () => {
    return (
        <section className="understanding-section">
            <div className="understanding-container">
                {/* Card 1 */}
                <motion.div
                    className="understanding-card left-card"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="card-badge">UNDERSTANDING</div>
                    <h2>TAKING MESSY, COMPLEX CHALLENGES AND MAKING SENSE OF THEM</h2>
                    <p>
                        Those wicked problems that feel impossible to resolve are perfect for Symbiosis Group of Schools!
                        We help you build the skills you need to see your challenges with fresh eyes, and unlock new ways forward, through simple tools and activities.
                    </p>
                </motion.div>

                {/* Center Graphic - Abstract Isometric blocks */}
                <div className="understanding-graphic">
                    {/* Isometric blocks conceptual representation */}
                    <div className="iso-block block-1"></div>
                    <div className="iso-block block-2"></div>
                    <div className="iso-block block-3"></div>
                </div>

                {/* Card 2 */}
                <motion.div
                    className="understanding-card right-card"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="card-badge">EMPOWERING</div>
                    <h2>BUILDING CONFIDENT, INDEPENDENT THINKERS FOR TOMORROW</h2>
                    <p>
                        At Symbiosis, we don't just teach subjects – we nurture critical thinking and problem-solving abilities.
                        Our approach empowers students to become independent learners who can tackle any challenge with confidence and creativity.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const AboutTeach = () => {
    const teachItems = [
        {
            icon: <FaShapes />,
            title: "Commitment to Excellence",
            description: "Our school is dedicated to fostering a culture of excellence where students are encouraged to reach their highest potential."
        },
        {
            icon: <FaCube />,
            title: "Inclusive Community",
            description: "To support the ongoing learning, development and growth of our community through continued opportunities to practice designing for good."
        },
        {
            icon: <FaLayerGroup />,
            title: "Holistic Education",
            description: "We believe in the power of diversity and inclusivity. Our community is built on respect, empathy, and understanding."
        },
        {
            icon: <FaPenFancy />,
            title: "Community Engagement",
            description: "We emphasize the importance of giving back to the community. Our students are involved in various service projects."
        }
    ];

    return (
        <section className="about-teach-section">
            <div className="about-teach-container">
                <h2 className="about-teach-title">WHAT WE TEACH</h2>
                <div className="about-teach-grid">
                    {teachItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="teach-item"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="teach-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Backstory = () => {
    return (
        <section className="backstory-section">
            <div className="backstory-header">
                <span className="backstory-label">OUR BACKSTORY</span>
                <h2 className="backstory-title">BRINGING DESIGN IMPACT TO YOUR COMMUNITY</h2>
                <p className="backstory-description">
                    Symbiosis Group of Schools, Jabalpur, was founded in 2003, with a vision to empower students with critical thinking, creativity, and life skills to shape a better future. As a leading educational institution, Symbiosis aligns with national educational goals by fostering innovation, holistic development, and community engagement in Madhya Pradesh:
                </p>
            </div>

            <div className="coming-soon-grid">
                {[1, 2, 3].map((item, index) => (
                    <motion.div
                        key={index}
                        className="coming-soon-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <div className="torn-paper-effect"></div>
                        <h3 className="coming-soon-text">COMING SOON</h3>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default AboutPage;
