import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Button from '../components/ui/Button';

// Lottie Animation Component with fetch
function LottieAnimation({ src, loop = true, style = {} }) {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        fetch(src)
            .then((response) => response.json())
            .then((data) => setAnimationData(data))
            .catch((error) => console.error('Error loading animation:', error));
    }, [src]);

    if (!animationData) {
        return (
            <div style={{ ...style, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="spinner" />
            </div>
        );
    }

    return <Lottie animationData={animationData} loop={loop} style={style} />;
}

function NotFoundPage() {
    return (
        <div className="not-found-page">
            <motion.div
                className="not-found-animation"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <LottieAnimation
                    src="/assets/animations/error.json"
                    style={{ width: '100%', height: '100%' }}
                />
            </motion.div>

            <motion.h1
                className="not-found-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Oops! Page Not Found
            </motion.h1>

            <motion.p
                className="not-found-description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                The page you're looking for doesn't exist or has been moved.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <Link to="/">
                    <Button variant="primary">
                        Go Back Home
                    </Button>
                </Link>
            </motion.div>
        </div>
    );
}

export default NotFoundPage;
