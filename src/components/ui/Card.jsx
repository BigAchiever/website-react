import { motion } from 'framer-motion';

function Card({
    children,
    className = '',
    onClick,
    hoverable = true,
    ...props
}) {
    return (
        <motion.div
            className={`card ${className}`}
            onClick={onClick}
            whileHover={hoverable ? { y: -4, boxShadow: '0 20px 25px rgba(0, 0, 0, 0.15)' } : {}}
            transition={{ duration: 0.3 }}
            {...props}
        >
            {children}
        </motion.div>
    );
}

function CardImage({ src, alt, className = '' }) {
    return (
        <img
            src={src}
            alt={alt}
            className={`card-image ${className}`}
        />
    );
}

function CardContent({ children, className = '' }) {
    return (
        <div className={`card-content ${className}`}>
            {children}
        </div>
    );
}

function CardTitle({ children, className = '' }) {
    return (
        <h3 className={`card-title ${className}`}>
            {children}
        </h3>
    );
}

function CardDescription({ children, className = '' }) {
    return (
        <p className={`card-description ${className}`}>
            {children}
        </p>
    );
}

// Hero Card (Polaroid style from home page)
function HeroCard({ imageUrl, title, rotation = 0 }) {
    return (
        <motion.div
            className="hero-card"
            style={{ transform: `rotate(${rotation}deg)` }}
            animate={{
                rotate: [rotation, rotation + 2, rotation - 2, rotation],
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 2,
                ease: 'easeInOut'
            }}
        >
            <img src={imageUrl} alt={title} className="hero-card-image" />
            <p className="hero-card-title">{title}</p>
        </motion.div>
    );
}

// Section Card (for sections tab)
function SectionCard({ icon, title, description, onClick }) {
    return (
        <motion.div
            className="section-card"
            onClick={onClick}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            {icon && <img src={icon} alt="" className="section-card-icon" />}
            <h3 className="section-card-title">{title}</h3>
            <p className="section-card-description">{description}</p>
        </motion.div>
    );
}

// Info Card (About page)
function InfoCard({ subtitle, title, description }) {
    return (
        <motion.div
            className="info-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <p className="info-card-subtitle">{subtitle}</p>
            <h3 className="info-card-title">{title}</h3>
            <p className="info-card-description">{description}</p>
        </motion.div>
    );
}

// Content Card (What we teach section)
function ContentCard({ icon, iconPath, title, description }) {
    return (
        <motion.div
            className="content-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="content-card-icon">
                {icon ? icon : <img src={iconPath} alt={title} />}
            </div>
            <h4 className="content-card-title">{title}</h4>
            <p className="content-card-description">{description}</p>
        </motion.div>
    );
}

// Feedback Card
function FeedbackCard({ quote, author }) {
    return (
        <div className="feedback-card">
            <p className="feedback-card-quote">"{quote}"</p>
            <p className="feedback-card-author">— {author}</p>
        </div>
    );
}

// Social Media Card
function SocialCard({ icon, title, description, onClick }) {
    return (
        <motion.div
            className="social-card"
            onClick={onClick}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
        >
            <div className="social-card-icon">
                {icon}
            </div>
            <div className="social-card-content">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </motion.div>
    );
}

export {
    Card,
    CardImage,
    CardContent,
    CardTitle,
    CardDescription,
    HeroCard,
    SectionCard,
    InfoCard,
    ContentCard,
    FeedbackCard,
    SocialCard,
};

export default Card;
