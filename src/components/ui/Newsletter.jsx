import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import './Newsletter.css';

function Newsletter({
    title = "Stay Updated",
    description = "Subscribe to our newsletter for the latest news and updates.",
    onSubscribe = null
}) {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            setStatus('error');
            setMessage('Please enter your email address.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setStatus('error');
            setMessage('Please enter a valid email address.');
            return;
        }

        setStatus('loading');

        try {
            // If custom onSubscribe handler provided, use it
            if (onSubscribe) {
                await onSubscribe(email);
            } else {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1500));
            }

            setStatus('success');
            setMessage('Thank you for subscribing! You\'ll receive our updates soon.');
            setEmail('');

            // Reset after 5 seconds
            setTimeout(() => {
                setStatus('idle');
                setMessage('');
            }, 5000);

        } catch (error) {
            setStatus('error');
            setMessage('Something went wrong. Please try again.');
        }
    };

    return (
        <section className="newsletter-section">
            <div className="newsletter-container">
                <motion.div
                    className="newsletter-content"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="newsletter-title">{title}</h2>
                    <p className="newsletter-description">{description}</p>

                    {status === 'success' ? (
                        <motion.div
                            className="newsletter-success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <span className="success-icon">✓</span>
                            <p>{message}</p>
                        </motion.div>
                    ) : (
                        <form className="newsletter-form" onSubmit={handleSubmit}>
                            <div className="newsletter-input-group">
                                <input
                                    type="email"
                                    className="newsletter-input"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        if (status === 'error') {
                                            setStatus('idle');
                                            setMessage('');
                                        }
                                    }}
                                    disabled={status === 'loading'}
                                />
                                <Button
                                    type="submit"
                                    variant="primary"
                                    disabled={status === 'loading'}
                                    className="newsletter-button"
                                >
                                    {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                                </Button>
                            </div>

                            {status === 'error' && (
                                <motion.p
                                    className="newsletter-error"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    {message}
                                </motion.p>
                            )}
                        </form>
                    )}

                    <p className="newsletter-privacy">
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default Newsletter;
