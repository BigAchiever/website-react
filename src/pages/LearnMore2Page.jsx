import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

// School info for Senior Secondary
const schoolInfo = {
    name: 'Symbiosis Senior Secondary School',
    tagline: 'Empowering Tomorrow\'s Leaders',
    description: 'Symbiosis Senior Secondary School focuses on preparing students for higher education and competitive examinations. Our comprehensive curriculum and dedicated faculty ensure students are well-prepared for the future.',
    affiliation: 'Affiliated with CBSE',
    established: 'Established 2021',
    features: [
        'CBSE affiliated curriculum',
        'Competitive exam preparation',
        'Career counseling services',
        'Smart classrooms',
        'Digital learning resources',
        'Personality development programs',
        'Regular mock tests and assessments',
        'Regular mock tests and assessments',
    ],
    academics: {
        classes: 'Nursery to 12th',
        streams: 'Science (PCM/PCB), Commerce, Humanities',
        medium: 'English medium',
    },
    facilities: [
        { name: 'Smart Classrooms', description: 'Interactive digital boards and modern teaching aids' },
        { name: 'Science Labs', description: 'State-of-the-art laboratories for practical learning' },
        { name: 'Career Center', description: 'Dedicated counseling for career guidance' },

    ],
    results: [
        { title: 'Pass Rate', value: '92%', detail: 'Excellence in Board Examinations' },
        { title: 'Top Percentile', value: '98.6%', detail: 'Highest Academic achievement' },
        { title: 'Competitive Success', value: 'JEE/NEET', detail: 'Multiple national qualifiers' },
    ],
};

// Hero Section
function LearnMoreHero() {
    return (
        <section className="learn-more-hero senior-secondary">
            <div className="learn-more-hero-content">
                <motion.h1
                    className="learn-more-hero-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {schoolInfo.name}
                </motion.h1>
                <motion.p
                    className="learn-more-hero-description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {schoolInfo.tagline}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{ marginTop: 'var(--space-4)', display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap' }}
                >
                    <span style={{
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        padding: 'var(--space-2) var(--space-4)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: 'var(--text-sm)',
                        backdropFilter: 'blur(4px)',
                        color: 'white'
                    }}>
                        {schoolInfo.affiliation}
                    </span>
                    <span style={{
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        padding: 'var(--space-2) var(--space-4)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: 'var(--text-sm)',
                        backdropFilter: 'blur(4px)',
                        color: 'white'
                    }}>
                        {schoolInfo.established}
                    </span>
                </motion.div>
            </div>
        </section>
    );
}

// About Section
function AboutSection() {
    return (
        <motion.section
            className="learn-more-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h2>About Us</h2>
            <p>{schoolInfo.description}</p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 'var(--space-4)',
                marginTop: 'var(--space-6)'
            }}>
                <div style={{
                    backgroundColor: 'var(--color-surface)',
                    padding: 'var(--space-4)',
                    borderRadius: 'var(--radius-lg)',
                    textAlign: 'center'
                }}>
                    <h4 style={{ fontFamily: 'var(--font-display)', marginBottom: 'var(--space-2)' }}>Classes</h4>
                    <p style={{ margin: 0 }}>{schoolInfo.academics.classes}</p>
                </div>
                <div style={{
                    backgroundColor: 'var(--color-surface)',
                    padding: 'var(--space-4)',
                    borderRadius: 'var(--radius-lg)',
                    textAlign: 'center'
                }}>
                    <h4 style={{ fontFamily: 'var(--font-display)', marginBottom: 'var(--space-2)' }}>Streams</h4>
                    <p style={{ margin: 0 }}>{schoolInfo.academics.streams}</p>
                </div>
                <div style={{
                    backgroundColor: 'var(--color-surface)',
                    padding: 'var(--space-4)',
                    borderRadius: 'var(--radius-lg)',
                    textAlign: 'center'
                }}>
                    <h4 style={{ fontFamily: 'var(--font-display)', marginBottom: 'var(--space-2)' }}>Medium</h4>
                    <p style={{ margin: 0 }}>{schoolInfo.academics.medium}</p>
                </div>
            </div>
        </motion.section>
    );
}

// Results Section
function ResultsSection() {
    return (
        <motion.section
            className="learn-more-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h2>Academic Achievements</h2>
            <p style={{ marginBottom: 'var(--space-6)' }}>
                Our Senior Secondary wing consistently produces top-tier results, with students excelling in both board examinations and national-level competitive tests.
            </p>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 'var(--space-4)',
            }}>
                {schoolInfo.results.map((result, index) => (
                    <motion.div
                        key={index}
                        style={{
                            backgroundColor: 'var(--color-primary)',
                            padding: 'var(--space-6)',
                            borderRadius: 'var(--radius-lg)',
                            textAlign: 'center',
                            border: '2px solid #000',
                            boxShadow: '4px 4px 0px #000'
                        }}
                        whileHover={{ transform: 'translate(-2px, -2px)', boxShadow: '6px 6px 0px #000' }}
                    >
                        <h4 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'var(--text-3xl)',
                            marginBottom: 'var(--space-1)'
                        }}>
                            {result.value}
                        </h4>
                        <h5 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-2)' }}>{result.title}</h5>
                        <p style={{ margin: 0, fontSize: 'var(--text-sm)', opacity: 0.9 }}>{result.detail}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}

// Features Section
function FeaturesSection() {
    return (
        <motion.section
            className="learn-more-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h2>Why Choose Us?</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 'var(--space-4)',
                marginTop: 'var(--space-4)'
            }}>
                {schoolInfo.features.map((feature, index) => (
                    <motion.div
                        key={index}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--space-3)',
                            padding: 'var(--space-3)',
                            backgroundColor: index % 2 === 0 ? 'var(--color-surface)' : 'var(--color-background)',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--color-surface)',
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <span style={{
                            width: '24px',
                            height: '24px',
                            backgroundColor: 'var(--color-primary)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '14px',
                            flexShrink: 0
                        }}>
                            ✓
                        </span>
                        <span>{feature}</span>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}

// Facilities Section
function FacilitiesSection() {
    return (
        <motion.section
            className="learn-more-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h2>Our Facilities</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 'var(--space-6)',
                marginTop: 'var(--space-4)'
            }}>
                {schoolInfo.facilities.map((facility, index) => (
                    <motion.div
                        key={facility.name}
                        style={{
                            padding: 'var(--space-6)',
                            backgroundColor: 'var(--color-surface)',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-sm)',
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                    >
                        <h4 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'var(--text-xl)',
                            marginBottom: 'var(--space-2)'
                        }}>
                            {facility.name}
                        </h4>
                        <p style={{ margin: 0, color: 'var(--color-text-light)' }}>
                            {facility.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}

// CTA Section
function CTASection() {
    return (
        <motion.section
            style={{
                textAlign: 'center',
                padding: 'var(--space-16) var(--space-4)',
                backgroundColor: '#ffffff',
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                marginBottom: 'var(--space-4)',
                textTransform: 'uppercase'
            }}>
                Ready to Join Us?
            </h2>
            <p style={{
                maxWidth: '600px',
                margin: '0 auto var(--space-8)',
                fontSize: 'var(--text-lg)',
                color: 'var(--color-text-light)'
            }}>
                Take the first step towards a brighter future. Contact us for admissions and inquiries.
            </p>
            <Button variant="primary" onClick={() => window.location.href = '/contact-us'}>
                Contact Us
            </Button>
        </motion.section>
    );
}

// Main Learn More Page Component
function LearnMore2Page() {
    return (
        <div className="learn-more-page">
            <LearnMoreHero />
            <div className="learn-more-content">
                <div className="learn-more-container">
                    <AboutSection />
                    <ResultsSection />
                    <FeaturesSection />
                    <FacilitiesSection />
                </div>
            </div>
            <CTASection />
        </div>
    );
}

export default LearnMore2Page;
