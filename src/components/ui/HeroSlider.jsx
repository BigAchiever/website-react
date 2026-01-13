import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineChevronLeft as HiChevronLeft, HiOutlineChevronRight as HiChevronRight } from 'react-icons/hi2';
import Button from './Button';
import './HeroSlider.css';

const defaultSlides = [
    {
        id: 1,
        image: '/assets/images/two.jpeg',
        title: 'Academic Excellence',
        subtitle: 'Our Visionaries',
        description: 'Celebrating the outstanding performance and dedication of our high-achieving students.',
        cta: { text: 'View Results', link: '/gallery' },
        ctaSecondary: { text: 'Admissions Open', link: '/admissions' },
    },
    {
        id: 2,
        image: '/assets/images/award2.jpeg',
        title: 'Celebrating Success',
        subtitle: 'Award Ceremony',
        description: 'Honoring the hard work and meritorious achievements of our students across all branches.',
        cta: { text: 'Our Gallery', link: '/gallery' },
        ctaSecondary: { text: 'Join Us', link: '/contact-us' },
    },
    {
        id: 3,
        image: '/assets/images/three.jpeg',
        title: 'Meritorious Achievements',
        subtitle: 'Shining Bright',
        description: 'Consistency in board results and competitive examinations year after year.',
        cta: { text: 'Learn More', link: '/about-us' },
        ctaSecondary: { text: 'Apply Now', link: '/admissions' },
    },
    {
        id: 4,
        image: '/assets/images/top2.jpeg',
        title: 'Future Leaders',
        subtitle: 'Top Achievers',
        description: 'Providing the right guidance and environment for students to reach their full potential.',
        cta: { text: 'Contact Us', link: '/contact-us' },
        ctaSecondary: { text: 'Our Branches', link: '/admissions' },
    },
];

function HeroSlider({ slides = defaultSlides, autoPlay = true, interval = 5000 }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Prefetch all slider images on mount
    useEffect(() => {
        slides.forEach((slide) => {
            const img = new Image();
            img.src = slide.image;
        });
    }, [slides]);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Auto-advance slides
    useEffect(() => {
        if (!autoPlay) return;

        const timer = setInterval(nextSlide, interval);
        return () => clearInterval(timer);
    }, [autoPlay, interval, nextSlide]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide]);

    const currentSlide = slides[currentIndex];

    return (
        <div className="hero-slider">
            {/* Background Images */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    className="hero-slider-bg"
                    style={{ backgroundImage: `url(${currentSlide.image})` }}
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    transition={{ duration: interval / 1000, ease: 'linear' }}
                />
            </AnimatePresence>

            {/* Overlay */}
            <div className="hero-slider-overlay" />

            {/* Content */}
            <div className="hero-slider-content">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide.id}
                        className="hero-slider-text"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="hero-slider-title">{currentSlide.title}</h2>
                        <h1 className="hero-slider-subtitle">{currentSlide.subtitle}</h1>
                        <p className="hero-slider-description">{currentSlide.description}</p>

                        <div className="hero-slider-cta">
                            {currentSlide.cta && (
                                <Button
                                    variant="primary"
                                    className="hero-btn-yellow"
                                    onClick={() => window.location.href = currentSlide.cta.link}
                                >
                                    {currentSlide.cta.text}
                                </Button>
                            )}
                            {currentSlide.ctaSecondary && (
                                <Button
                                    variant="outline"
                                    onClick={() => window.location.href = currentSlide.ctaSecondary.link}
                                >
                                    {currentSlide.ctaSecondary.text}
                                </Button>
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
                className="hero-slider-arrow hero-slider-arrow-left"
                onClick={prevSlide}
                aria-label="Previous slide"
            >
                <HiChevronLeft />
            </button>
            <button
                className="hero-slider-arrow hero-slider-arrow-right"
                onClick={nextSlide}
                aria-label="Next slide"
            >
                <HiChevronRight />
            </button>
        </div>
    );
}

export default HeroSlider;
