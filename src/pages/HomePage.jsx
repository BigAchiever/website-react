import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRegStar as FaStar } from 'react-icons/fa';
import { HiOutlineAcademicCap as HiAcademicCap, HiOutlineUserGroup as HiUserGroup, HiOutlineClock as HiClock, HiOutlineStar as HiStar, HiOutlineBookOpen as HiBookOpen, HiOutlineClipboardDocumentList as HiClipboardList, HiOutlineEnvelope as HiMail, HiOutlinePhone as HiPhone, HiOutlineChevronLeft as FaChevronLeft, HiOutlineChevronRight as FaChevronRight, HiOutlineChatBubbleBottomCenterText as FaQuoteLeft, HiOutlineTrophy as FaTrophy, HiOutlinePaintBrush as FaPalette } from 'react-icons/hi2';
import { PiGraduationCapLight as FaGraduationCap } from 'react-icons/pi';
import Button from '../components/ui/Button';
import HeroSlider from '../components/ui/HeroSlider';
import StatsCounter from '../components/ui/StatsCounter';

// Welcome Section (Restored from previous design)
function WelcomeSection() {
    return (
        <section className="hero-section welcome-section-v2">
            <div className="hero-background welcome-bg-v2"></div>
            <div className="hero-content-wrapper">
                <div className="hero-paper">
                    <div className="hero-text">
                        <motion.h2
                            className="hero-title-small"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Welcome to
                        </motion.h2>
                        <motion.h1
                            className="hero-title-large"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            Symbiosis
                        </motion.h1>
                        <motion.div
                            className="hero-subtitle"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <p>
                                <strong>Symbiosis Group of Schools</strong> is a premier educational institution in Jabalpur,
                                dedicated to submitting the highest standards of academic excellence and holistic development.
                            </p>
                            <p style={{ marginTop: '1rem' }}>
                                We believe in nurturing creativity, critical thinking, and character in every student,
                                preparing them to be the leaders of tomorrow.
                            </p>
                        </motion.div>

                        <motion.div
                            style={{ marginTop: '2rem' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <Link to="/about-us">
                                <Button variant="primary">Read More About Us</Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Stats data - Updated values as requested
const statsData = [
    { value: 3000, label: 'Students Enrolled', suffix: '+', icon: <HiUserGroup /> },
    { value: 100, label: 'Staff Members', suffix: '+', icon: <HiAcademicCap /> },
    { value: 25, label: 'Years of Excellence', suffix: '', icon: <HiClock /> },
    { value: 96, label: 'Success Rate', suffix: '%', icon: <HiStar /> },
    { value: 233, label: 'Awards Won', suffix: '+', icon: <FaTrophy /> },
    { value: 30, label: 'Activities', suffix: '+', icon: <FaPalette /> },
];

// Testimonials data
const testimonials = [
    {
        id: 1,
        name: 'Priya Sharma',
        role: 'Parent of Class 10 Student',
        image: '/assets/images/one.jpeg',
        quote: 'Symbiosis School has been instrumental in shaping my child\'s future. The dedicated teachers and excellent facilities have made a remarkable difference in their academic journey.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Rajesh Kumar',
        role: 'Parent of Class 12 Student',
        image: '/assets/images/two.jpeg',
        quote: 'The holistic approach to education at Symbiosis is commendable. My daughter not only excels academically but has also developed strong extracurricular skills.',
        rating: 5,
    },
    {
        id: 3,
        name: 'Anjali Verma',
        role: 'Alumni, Batch 2020',
        image: '/assets/images/three.jpeg',
        quote: 'My years at Symbiosis were the foundation of my success. The values and education I received here continue to guide me in my professional life.',
        rating: 5,
    },
    {
        id: 4,
        name: 'Dr. Suresh Patel',
        role: 'Parent of Class 9 Student',
        image: '/assets/images/sen2.jpeg',
        quote: 'The school\'s focus on both academics and character building is exactly what we were looking for. Highly recommend Symbiosis to all parents.',
        rating: 5,
    },
];

// Schools data
const schools = [
    {
        name: 'Symbiosis Higher Secondary School',
        description: 'Providing quality education with a focus on holistic development and academic excellence for classes 9-10.',
        image: '/assets/images/highersec.jpeg',
        link: '/learn-more-symbiosis-higher-secondary-school',
    },
    {
        name: 'Symbiosis Senior Secondary School',
        description: 'Empowering students with knowledge, skills, and values for a successful future in classes 11-12.',
        image: '/assets/images/sen2.jpeg',
        link: '/learn-more-symbiosis-senior-secondary-school',
    },
];

// Programs data
const programs = [
    {
        title: 'CBSE Curriculum',
        description: 'Comprehensive CBSE curriculum with focus on conceptual learning and practical application.',
        icon: <HiBookOpen />,
    },
    {
        title: 'MP Board',
        description: 'State board curriculum with emphasis on regional language and local context.',
        icon: <FaGraduationCap />,
    },
    {
        title: 'Sports Excellence',
        description: 'Professional coaching in various sports with state-level competition exposure.',
        icon: <FaTrophy />,
    },
    {
        title: 'Arts & Culture',
        description: 'Music, dance, and fine arts programs to nurture creative talents.',
        icon: <FaPalette />,
    },
];

// Sections Tab Component
function SectionsTab() {
    return (
        <section className="sections-tab">
            <div className="sections-container">
                <div className="sections-header">
                    <motion.span
                        className="sections-badge"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        EXPLORE OUR CAMPUSES
                    </motion.span>
                    <motion.h2
                        className="sections-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        OUR BRANCHES IN JABALPUR
                    </motion.h2>
                    <motion.p
                        className="sections-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Symbiosis Group of Schools, Jabalpur, an initiative dedicated to innovative education, strives to be a dynamic learning environment where students, families, and communities come together to address real-world challenges through creativity, critical thinking, and holistic development.
                    </motion.p>
                </div>

                <div className="sections-grid">
                    {schools.map((school, index) => (
                        <motion.div
                            key={school.name}
                            className="school-card-wrapper"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="school-card-image-container">
                                <img src={school.image} alt={school.name} className="school-card-image" />
                                <div className="school-card-badge">
                                    Nursery to 12th
                                </div>
                            </div>
                            <div className="school-card-content">
                                <h3 className="school-card-name">{school.name}</h3>
                                <p className="school-card-description">{school.description}</p>
                                <Link to={school.link} className="school-learn-more-btn">
                                    LEARN MORE
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


// Empowermenr Section (Merged Programs & Testimonials)
function EmpowermentSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide for testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="empowerment-section">
            <div className="empowerment-container">
                {/* Section Header */}
                <div className="empowerment-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        EMPOWERING MINDS & BUILDING FUTURES
                    </motion.h2>
                    <motion.p
                        className="empowerment-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Our Approach. Your Child's Success. Shared Experiences.
                    </motion.p>
                </div>

                {/* Testimonials Part */}
                <div className="testimonials-slider-v2">
                    <button className="testimonial-nav prev" onClick={prevTestimonial}>
                        <FaChevronLeft />
                    </button>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            className="testimonial-card-v2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="testimonial-content-wrapper">
                                <FaQuoteLeft className="quote-icon" />
                                <div className="testimonial-text-content">
                                    <p className="testimonial-quote-v2">"{testimonials[currentIndex].quote}"</p>
                                    <div className="testimonial-rating">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <FaStar key={i} className="star" />
                                        ))}
                                    </div>
                                    <div className="testimonial-author-v2">
                                        <div className="author-image-v2">
                                            <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
                                        </div>
                                        <div className="author-info-v2">
                                            <h4>{testimonials[currentIndex].name}</h4>
                                            <p>{testimonials[currentIndex].role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <button className="testimonial-nav next" onClick={nextTestimonial}>
                        <FaChevronRight />
                    </button>
                </div>

                <div className="testimonials-dots">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

// Gallery Preview Section
function GalleryPreview() {
    const images = [
        { src: '/assets/images/one.jpeg', alt: 'School Event' },
        { src: '/assets/images/two.jpeg', alt: 'Classroom' },
        { src: '/assets/images/three.jpeg', alt: 'Sports Day' },
        { src: '/assets/images/award.jpg', alt: 'Award Ceremony' },
        { src: '/assets/images/highersec.jpeg', alt: 'Campus' },
    ];

    return (
        <section className="gallery-preview-section">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Life at Symbiosis
            </motion.h2>

            <div className="gallery-preview-grid">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className="gallery-preview-item"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <img src={image.src} alt={image.alt} />
                    </motion.div>
                ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
                <Link to="/gallery">
                    <Button variant="primary">View Full Gallery</Button>
                </Link>
            </div>
        </section>
    );
}

// Merged Admission & Contact Section
function AdmissionContactSection() {
    return (
        <section className="admission-contact-section">
            <div className="admission-contact-container">
                {/* Left: Admission Info */}
                <motion.div
                    className="admission-info"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="admission-badge">Now Enrolling</span>
                    <h2>Admissions Open 2026-2027</h2>
                    <p>Join our family of learners and embark on a journey of excellence. Give your child the best start in life.</p>
                    <div className="admission-features">
                        <div className="feature-item">✓ Experienced Faculty</div>
                        <div className="feature-item">✓ Modern Infrastructure</div>
                        <div className="feature-item">✓ Holistic Development</div>
                    </div>
                </motion.div>

                {/* Right: Contact Options */}
                <motion.div
                    className="contact-options"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Link to="/admissions" className="contact-option-card apply">
                        <div className="option-icon"><HiClipboardList /></div>
                        <div className="option-content">
                            <h3>Apply Now</h3>
                            <p>Start your admission process</p>
                        </div>
                        <span className="arrow">→</span>
                    </Link>

                    <Link to="/contact-us" className="contact-option-card contact">
                        <div className="option-icon"><HiMail /></div>
                        <div className="option-content">
                            <h3>Contact Us</h3>
                            <p>Have questions? We're here</p>
                        </div>
                        <span className="arrow">→</span>
                    </Link>

                    <a href="tel:+917610000000" className="contact-option-card call">
                        <div className="option-icon"><HiPhone /></div>
                        <div className="option-content">
                            <h3>Call Now</h3>
                            <p>+91-930-012-6308</p>
                        </div>
                        <span className="arrow">→</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

// Main Home Page Component
function HomePage() {
    return (
        <div className="home-page">
            <HeroSlider />
            <WelcomeSection />
            <StatsCounter stats={statsData} title="Our Achievements" />
            <SectionsTab />
            <EmpowermentSection />
            <GalleryPreview />
            <AdmissionContactSection />
        </div>
    );
}

export default HomePage;
