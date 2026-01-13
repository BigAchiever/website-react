import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './StatsCounter.css';

function StatsCounter({ stats = defaultStats, title = "Our Achievements" }) {
    return (
        <section className="stats-section">
            <div className="stats-container">
                {/* Left Side - Text Content */}
                <motion.div
                    className="stats-text-content"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="stats-badge">WHY CHOOSE US</span>
                    <h2 className="stats-title">{title}</h2>
                    <p className="stats-description">
                        At Symbiosis Group of Schools, we take pride in our commitment to excellence.
                        Our track record speaks for itself – with decades of experience nurturing young minds
                        and a consistent history of academic success.
                    </p>

                </motion.div>

                {/* Right Side - Stats */}
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <StatItem key={stat.label} {...stat} delay={index * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function StatItem({ value, label, suffix = '', prefix = '', icon, delay = 0 }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;

        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = value / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [isInView, value]);

    return (
        <motion.div
            ref={ref}
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay }}
        >
            <div className="stat-value">
                {prefix}
                <span className="stat-number">{count.toLocaleString()}</span>
                {suffix}
            </div>
            <div className="stat-label">{label}</div>
        </motion.div>
    );
}

// Default stats data
const defaultStats = [
    { value: 3000, label: 'Students Enrolled', suffix: '+' },
    { value: 100, label: 'Expert Teachers', suffix: '+' },
    { value: 25, label: 'Years of Excellence', suffix: '' },
    { value: 96, label: 'Success Rate', suffix: '%' },
];

export default StatsCounter;
export { StatItem };
