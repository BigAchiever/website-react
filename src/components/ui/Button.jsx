import { motion } from 'framer-motion';

function Button({
    children,
    variant = 'primary',
    onClick,
    type = 'button',
    disabled = false,
    className = '',
    ...props
}) {
    const baseClass = 'btn';
    const variantClass = `btn-${variant}`;

    return (
        <motion.button
            type={type}
            className={`${baseClass} ${variantClass} ${className}`}
            onClick={onClick}
            disabled={disabled}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {children}
        </motion.button>
    );
}

export default Button;
