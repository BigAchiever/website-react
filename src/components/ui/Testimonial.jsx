import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineChevronLeft as HiChevronLeft, HiOutlineChevronRight as HiChevronRight, HiOutlineChatBubbleBottomCenterText as FaQuoteLeft } from 'react-icons/hi2';
import './Testimonial.css';

const defaultTestimonials = [
    {
        id: 1,
        name: 'Rajesh Kumar',
        role: 'Parent of Class 10 Student',
        image: null,
        quote: 'The education at Symbiosis has truly transformed my child\'s perspective on learning. The teachers are dedicated and the environment is nurturing.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Priya Sharma',
        role: 'Parent of Class 8 Student',
        image: null,
        quote: 'Teachers here go above and beyond to ensure every student succeeds. My daughter has shown remarkable improvement in her academics.',
        rating: 5,
    },
    {
        id: 3,
        name: 'Amit Verma',
        role: 'Parent of Class 12 Student',
        image: null,
        quote: 'A wonderful environment that nurtures both academics and character. My son is well-prepared for competitive exams thanks to the excellent faculty.',
        rating: 5,
    },
    {
        id: 4,
        name: 'Sneha Patel',
        role: 'Alumni, Batch 2020',
        image: null,
        quote: 'Symbiosis gave me the foundation I needed for my career. The values and education I received here continue to guide me.',
        rating: 5,
    },
];

function TestimonialSlider({ testimonials = defaultTestimonials, autoPlay = true, interval = 6000 }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, [testimonials.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, [testimonials.length]);

    useEffect(() => {
        if (!autoPlay || isPaused) return;
        const timer = setInterval(nextSlide, interval);
        return () => clearInterval(timer);
    }, [autoPlay, isPaused, interval, nextSlide]);

    const current = testimonials[currentIndex];

    return (
        <div
            className="testimonial-slider"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="testimonial-slider-container">
                <button className="testimonial-nav testimonial-prev" onClick={prevSlide}>
                    <HiChevronLeft />
                </button>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={current.id}
                        className="testimonial-card"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.4 }}
                    >
                        <FaQuoteLeft className="testimonial-quote-icon" />

                        <p className="testimonial-quote">{current.quote}</p>

                        <div className="testimonial-rating">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className={`star ${i < current.rating ? 'filled' : ''}`}>★</span>
                            ))}
                        </div>

                        <div className="testimonial-author">
                            <div className="testimonial-avatar">
                                {current.image ? (
                                    <img src={current.image} alt={current.name} />
                                ) : (
                                    <span>{current.name.charAt(0)}</span>
                                )}
                            </div>
                            <div className="testimonial-info">
                                <h4 className="testimonial-name">{current.name}</h4>
                                <p className="testimonial-role">{current.role}</p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <button className="testimonial-nav testimonial-next" onClick={nextSlide}>
                    <HiChevronRight />
                </button>
            </div>

            {/* Dots */}
            <div className="testimonial-dots">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        className={`testimonial-dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

// Single testimonial card component
function TestimonialCard({ name, role, image, quote, rating = 5 }) {
    return (
        <motion.div
            className="testimonial-card-single"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <FaQuoteLeft className="testimonial-quote-icon" />

            <p className="testimonial-quote">{quote}</p>

            <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
                ))}
            </div>

            <div className="testimonial-author">
                <div className="testimonial-avatar">
                    {image ? (
                        <img src={image} alt={name} />
                    ) : (
                        <span>{name.charAt(0)}</span>
                    )}
                </div>
                <div className="testimonial-info">
                    <h4 className="testimonial-name">{name}</h4>
                    <p className="testimonial-role">{role}</p>
                </div>
            </div>
        </motion.div>
    );
}

export default TestimonialSlider;
export { TestimonialCard, defaultTestimonials };
