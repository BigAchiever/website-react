import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineCalendar as HiCalendar, HiOutlineMapPin as HiLocationMarker, HiOutlineClock as HiClock } from 'react-icons/hi2';
import Button from '../components/ui/Button';
import './EventsPage.css';

const upcomingEvents = [
    {
        id: 1,
        title: 'Annual Day Celebration 2024',
        date: '2024-02-15',
        time: '5:00 PM',
        location: 'School Auditorium',
        description: 'Join us for our grand annual day celebration featuring cultural performances, awards ceremony, and special guest appearances.',
        image: '/assets/images/one.jpeg',
        category: 'Cultural',
    },
    {
        id: 2,
        title: 'Science Exhibition',
        date: '2024-02-20',
        time: '10:00 AM',
        location: 'Science Wing',
        description: 'Students showcase their innovative science projects and experiments. Open to all parents.',
        image: '/assets/images/two.jpeg',
        category: 'Academic',
    },
    {
        id: 3,
        title: 'Sports Day',
        date: '2024-03-01',
        time: '10:00 AM',
        location: 'School Ground',
        description: 'Annual sports competition featuring track and field events, team sports, and athletics.',
        image: '/assets/images/three.jpeg',
        category: 'Sports',
    },
    {
        id: 4,
        title: 'Parent-Teacher Meeting',
        date: '2024-03-10',
        time: '10:00 AM - 1:00 PM',
        location: 'Respective Classrooms',
        description: 'Discuss your child\'s progress with teachers. Please bring the progress report.',
        image: null,
        category: 'Academic',
    },
];

const pastEvents = [
    {
        id: 101,
        title: 'Independence Day Celebration',
        date: '2023-08-15',
        description: 'Patriotic performances and flag hoisting ceremony.',
        image: '/assets/images/five.jpeg',
    },
    {
        id: 102,
        title: 'Teachers Day',
        date: '2023-09-05',
        description: 'Students honored teachers with cultural programs.',
        image: '/assets/images/six.jpeg',
    },
    {
        id: 103,
        title: 'Diwali Celebration',
        date: '2023-11-10',
        description: 'Festival of lights celebrated with rangoli competition and cultural events.',
        image: '/assets/images/award3.jpeg',
    },
];

const newsItems = [
    {
        id: 1,
        title: 'Symbiosis Students Excel in Board Exams',
        date: '2024-01-05',
        excerpt: 'Our students have achieved outstanding results in the 2023 board examinations with 95% scoring above 80%.',
    },
    {
        id: 2,
        title: 'New Computer Lab Inaugurated',
        date: '2024-01-02',
        excerpt: 'State-of-the-art computer lab with 50 new systems was inaugurated by the school management.',
    },
    {
        id: 3,
        title: 'National Science Olympiad Winners',
        date: '2023-12-20',
        excerpt: 'Three students from Symbiosis secured positions in the National Science Olympiad.',
    },
];

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
}

function EventCard({ event, isPast = false }) {
    return (
        <motion.div
            className={`event-card ${isPast ? 'past' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            {event.image && (
                <div className="event-card-image">
                    <img src={event.image} alt={event.title} />
                    {event.category && <span className="event-category">{event.category}</span>}
                </div>
            )}
            <div className="event-card-content">
                <h3>{event.title}</h3>

                <div className="event-details">
                    <div className="event-detail">
                        <HiCalendar />
                        <span>{formatDate(event.date)}</span>
                    </div>
                    {event.time && (
                        <div className="event-detail">
                            <HiClock />
                            <span>{event.time}</span>
                        </div>
                    )}
                    {event.location && (
                        <div className="event-detail">
                            <HiLocationMarker />
                            <span>{event.location}</span>
                        </div>
                    )}
                </div>

                <p className="event-description">{event.description}</p>

                {!isPast && (
                    <Button variant="outline" size="small">
                        Learn More
                    </Button>
                )}
            </div>
        </motion.div>
    );
}

function NewsCard({ news }) {
    return (
        <motion.div
            className="news-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <span className="news-date">{formatDate(news.date)}</span>
            <h4>{news.title}</h4>
            <p>{news.excerpt}</p>
        </motion.div>
    );
}

import usePageTitle from '../hooks/usePageTitle';

function EventsPage() {
    usePageTitle('Events');
    const [activeTab, setActiveTab] = useState('upcoming');

    return (
        <div className="events-page">
            {/* Hero Section */}
            <section className="events-hero">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Events & News
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Stay updated with the latest happenings at Symbiosis School
                </motion.p>
            </section>

            {/* Tab Navigation */}
            <div className="events-tabs">
                <button
                    className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
                    onClick={() => setActiveTab('upcoming')}
                >
                    Upcoming Events
                </button>
                <button
                    className={`tab-btn ${activeTab === 'past' ? 'active' : ''}`}
                    onClick={() => setActiveTab('past')}
                >
                    Past Events
                </button>
                <button
                    className={`tab-btn ${activeTab === 'news' ? 'active' : ''}`}
                    onClick={() => setActiveTab('news')}
                >
                    News
                </button>
            </div>

            {/* Content */}
            <section className="events-content">
                {activeTab === 'upcoming' && (
                    <div className="events-grid">
                        {upcomingEvents.map((event) => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>
                )}

                {activeTab === 'past' && (
                    <div className="events-grid">
                        {pastEvents.map((event) => (
                            <EventCard key={event.id} event={event} isPast />
                        ))}
                    </div>
                )}

                {activeTab === 'news' && (
                    <div className="news-grid">
                        {newsItems.map((news) => (
                            <NewsCard key={news.id} news={news} />
                        ))}
                    </div>
                )}
            </section>

            {/* Subscribe Section */}
            <section className="events-subscribe">
                <motion.div
                    className="subscribe-content"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Never Miss an Update</h2>
                    <p>Subscribe to our newsletter to receive event notifications and school news directly in your inbox.</p>
                    <div className="subscribe-form">
                        <input type="email" placeholder="Enter your email" className="form-input" />
                        <Button variant="primary">Subscribe</Button>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}

export default EventsPage;
