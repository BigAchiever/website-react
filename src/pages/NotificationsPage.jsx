import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

function NotificationsPage() {
    usePageTitle('Notifications');
    const location = useLocation();
    const notices = location.state?.notices || [];

    // Sample notifications if none provided
    const defaultNotifications = [
        {
            id: 1,
            title: 'Admission Open for 2026-27',
            description: 'Applications are now being accepted for the new academic session. Contact the school office for more details.',
            date: 'January 2026',
        },
    ];

    const notifications = notices.length > 0 ? notices : defaultNotifications;

    return (
        <div className="notifications-page">
            <div className="notifications-container">
                <motion.h1
                    className="notifications-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Notifications & Announcements
                </motion.h1>

                <div>
                    {notifications.map((notification, index) => (
                        <motion.div
                            key={notification.id || index}
                            className="notification-item"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-2)' }}>
                                <h3>{notification.title}</h3>
                                {notification.date && (
                                    <span style={{
                                        fontSize: 'var(--text-xs)',
                                        color: 'var(--color-text-light)',
                                        backgroundColor: 'var(--color-surface)',
                                        padding: 'var(--space-1) var(--space-2)',
                                        borderRadius: 'var(--radius-sm)',
                                        flexShrink: 0,
                                        marginLeft: 'var(--space-3)'
                                    }}>
                                        {notification.date}
                                    </span>
                                )}
                            </div>
                            <p>{notification.description}</p>
                        </motion.div>
                    ))}
                </div>

                {notifications.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{
                            textAlign: 'center',
                            padding: 'var(--space-12)',
                            backgroundColor: 'var(--color-background)',
                            borderRadius: 'var(--radius-lg)'
                        }}
                    >
                        <p style={{ fontSize: 'var(--text-xl)', color: 'var(--color-text-light)' }}>
                            No notifications at this time.
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    );
}

export default NotificationsPage;
