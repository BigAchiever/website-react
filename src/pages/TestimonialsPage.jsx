import { motion } from 'framer-motion';
import { HiOutlineChatBubbleBottomCenterText as FaQuoteLeft } from 'react-icons/hi2';
import TestimonialSlider, { defaultTestimonials } from '../components/ui/Testimonial';
import './TestimonialsPage.css';

const parentTestimonials = [
    {
        id: 1,
        name: 'Rajesh Kumar',
        role: 'Parent of Class 10 Student',
        image: null,
        quote: 'The education at Symbiosis has truly transformed my child\'s perspective on learning. The teachers are dedicated and the environment is nurturing. I have seen tremendous growth in my son\'s confidence and academic performance.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Priya Sharma',
        role: 'Parent of Class 8 Student',
        image: null,
        quote: 'Teachers here go above and beyond to ensure every student succeeds. My daughter has shown remarkable improvement not just in academics but also in her overall personality development.',
        rating: 5,
    },
    {
        id: 3,
        name: 'Amit Verma',
        role: 'Parent of Class 12 Student',
        image: null,
        quote: 'A wonderful environment that nurtures both academics and character. My son is well-prepared for competitive exams thanks to the excellent faculty and their dedicated coaching.',
        rating: 5,
    },
];

const studentTestimonials = [
    {
        id: 4,
        name: 'Sneha Patel',
        role: 'Alumni, Batch 2020',
        image: null,
        quote: 'Symbiosis gave me the foundation I needed for my career. The values and education I received here continue to guide me. I am now pursuing engineering at IIT and I owe it all to my teachers.',
        rating: 5,
    },
    {
        id: 5,
        name: 'Rohan Gupta',
        role: 'Alumni, Batch 2019',
        image: null,
        quote: 'The school not only focused on academics but also helped me develop leadership skills through various extracurricular activities. I am grateful for the holistic education I received.',
        rating: 5,
    },
    {
        id: 6,
        name: 'Anita Singh',
        role: 'Current Student, Class 11',
        image: null,
        quote: 'I love coming to school every day! The teachers make learning fun and interesting. The science labs and library are amazing, and there are so many activities to participate in.',
        rating: 5,
    },
];

const successStories = [
    {
        id: 101,
        name: 'Arun Mehta',
        achievement: 'AIR 245 in JEE Main 2023',
        batch: 'Batch 2023',
        quote: 'The foundations laid at Symbiosis helped me crack JEE. Special thanks to the physics and mathematics faculty.',
    },
    {
        id: 102,
        name: 'Pooja Thakur',
        achievement: 'NEET Qualifier 2023',
        batch: 'Batch 2023',
        quote: 'My dream of becoming a doctor is now a reality, thanks to the dedicated support from my teachers.',
    },
    {
        id: 103,
        name: 'Vikram Singh',
        achievement: '98.6% in CBSE Class 12',
        batch: 'Batch 2022',
        quote: 'The methodical teaching approach and regular tests helped me achieve this score.',
    },
];

function TestimonialCard({ name, role, quote, rating = 5, image }) {
    return (
        <motion.div
            className="testimonial-card-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <FaQuoteLeft className="quote-icon" />
            <p className="quote-text">{quote}</p>

            <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
                ))}
            </div>

            <div className="testimonial-author-full">
                <div className="author-avatar">
                    {image ? (
                        <img src={image} alt={name} />
                    ) : (
                        <span>{name.charAt(0)}</span>
                    )}
                </div>
                <div>
                    <h4>{name}</h4>
                    <p>{role}</p>
                </div>
            </div>
        </motion.div>
    );
}

function SuccessCard({ name, achievement, batch, quote }) {
    return (
        <motion.div
            className="success-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
        >
            <div className="success-badge">{achievement}</div>
            <h4>{name}</h4>
            <span className="success-batch">{batch}</span>
            <p>{quote}</p>
        </motion.div>
    );
}

function TestimonialsPage() {
    return (
        <div className="testimonials-page">
            {/* Hero Section */}
            <section className="testimonials-hero">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    What People Say
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Hear from our parents, students, and alumni about their Symbiosis experience
                </motion.p>
            </section>

            {/* Featured Testimonial Slider */}
            <section className="testimonials-featured">
                <h2>Featured Testimonials</h2>
                <TestimonialSlider testimonials={defaultTestimonials} />
            </section>

            {/* Parent Testimonials */}
            <section className="testimonials-section">
                <h2>What Parents Say</h2>
                <div className="testimonials-grid">
                    {parentTestimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} {...testimonial} />
                    ))}
                </div>
            </section>

            {/* Student Testimonials */}
            <section className="testimonials-section alt">
                <h2>What Students Say</h2>
                <div className="testimonials-grid">
                    {studentTestimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} {...testimonial} />
                    ))}
                </div>
            </section>

            {/* Success Stories */}
            <section className="success-stories">
                <h2>Success Stories</h2>
                <p className="section-subtitle">Our students achieving great heights</p>
                <div className="success-grid">
                    {successStories.map((story) => (
                        <SuccessCard key={story.id} {...story} />
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="testimonials-cta">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Share Your Story</h2>
                    <p>Are you an alumni or parent? We'd love to hear about your experience with Symbiosis School.</p>
                    <a
                        href="mailto:symbiosis.h.s.school@gmail.com"
                        className="btn btn-primary"
                    >
                        Submit Your Testimonial
                    </a>
                </motion.div>
            </section>
        </div>
    );
}

export default TestimonialsPage;
