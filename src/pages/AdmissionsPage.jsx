import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineArrowDownTray as HiDownload, HiOutlineCheckCircle as HiCheckCircle, HiOutlineClock as HiClock, HiOutlineDocumentText as HiDocumentText, HiOutlineAcademicCap as HiAcademicCap } from 'react-icons/hi2';
import Button from '../components/ui/Button';
import './AdmissionsPage.css';

const admissionSteps = [
    { step: 1, title: 'Fill Application Form', description: 'Complete the online application form with student and parent details.' },
    { step: 2, title: 'Submit Documents', description: 'Upload required documents including previous academic records.' },
    { step: 3, title: 'Entrance Assessment', description: 'Attend the entrance assessment as per schedule.' },
    { step: 4, title: 'Registration', description: 'Complete admission formalities upon selection.' },
];

const eligibility = {
    'Higher Secondary': 'Seeking inquisitive students (Nursery-12th) with a passion for learning and academic excellence. We value learners dedicated to our holistic educational standards.',
    'Senior Secondary': 'Open for Nursery-12th. We prioritize individuals with stellar character, discipline, and leadership potential who aspire to excel in our prestigious community.',
};

const requiredDocuments = [
    'Birth Certificate',
    'Previous Academic Records / Transfer Certificate',
    'Character Certificate from previous school',
    'Passport-size photographs (4 copies)',
    'Aadhar Card (Student & Parents)',
    'Address Proof',
    'Samagra ID',
    'Caste Certificate (if you have)',
];

function AdmissionForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Student Details
        studentName: '',
        dateOfBirth: '',
        gender: '',
        classApplying: '',
        // Parent Details
        fatherName: '',
        motherName: '',
        guardianPhone: '',
        guardianEmail: '',
        // Address
        address: '',
        city: '',
        state: 'Madhya Pradesh',
        pincode: '',
        // Previous School
        previousSchool: '',
        previousClass: '',
        percentage: '',
        // Declaration
        declaration: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const nextStep = () => {
        if (currentStep < 3) setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const submissionData = {
            ...formData,
            submissionDate: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
            // Convert boolean to string for better sheet readability
            declaration: formData.declaration ? 'Accepted' : 'Declined'
        };

        try {
            const response = await fetch('https://api.sheetbest.com/sheets/3ad06733-e894-4b74-879b-b48106f0831c', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submissionData),
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                throw new Error('Failed to submit form');
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('Something went wrong. Please try again or contact the school office directly.');
        } finally {
            setIsSubmitting(true); // Keep it true to prevent double clicks during cleanup
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <motion.div
                className="admission-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <HiCheckCircle className="success-icon" />
                <h3>Application Submitted Successfully!</h3>
                <p>Thank you for applying to Symbiosis School. We have received your application and will contact you within 3-5 business days.</p>
                <p><strong>Application Reference:</strong> SYM-{Date.now().toString().slice(-8)}</p>
                <Button variant="primary" onClick={() => window.location.reload()}>
                    Submit Another Application
                </Button>
            </motion.div>
        );
    }

    return (
        <div className="admission-form-wrapper">
            {/* Step Indicator */}
            <div className="step-indicator">
                {[1, 2, 3].map((step) => (
                    <div
                        key={step}
                        className={`step ${currentStep >= step ? 'active' : ''} ${currentStep > step ? 'completed' : ''}`}
                    >
                        <div className="step-number">{currentStep > step ? '✓' : step}</div>
                        <div className="step-label">
                            {step === 1 && 'Student Details'}
                            {step === 2 && 'Guardian Details'}
                            {step === 3 && 'Previous School'}
                        </div>
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit}>
                {/* Step 1: Student Details */}
                {currentStep === 1 && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="form-step"
                    >
                        <h3>Student Details</h3>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Student Full Name *</label>
                                <input
                                    type="text"
                                    name="studentName"
                                    className="form-input"
                                    value={formData.studentName}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter student's full name"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Date of Birth *</label>
                                <input
                                    type="date"
                                    name="dateOfBirth"
                                    className="form-input"
                                    value={formData.dateOfBirth}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Gender *</label>
                                <select
                                    name="gender"
                                    className="form-input"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Applying for Class *</label>
                                <select
                                    name="classApplying"
                                    className="form-input"
                                    value={formData.classApplying}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Class</option>
                                    <option value="nursery">Nursery</option>
                                    <option value="kg1">KG-I</option>
                                    <option value="kg2">KG-II</option>
                                    <option value="1">Class 1</option>
                                    <option value="2">Class 2</option>
                                    <option value="3">Class 3</option>
                                    <option value="4">Class 4</option>
                                    <option value="5">Class 5</option>
                                    <option value="6">Class 6</option>
                                    <option value="7">Class 7</option>
                                    <option value="8">Class 8</option>
                                    <option value="9">Class 9</option>
                                    <option value="10">Class 10</option>
                                    <option value="11-science">Class 11 - Science</option>
                                    <option value="11-commerce">Class 11 - Commerce</option>
                                    <option value="11-arts">Class 11 - Arts</option>
                                    <option value="12-science">Class 12 - Science</option>
                                    <option value="12-commerce">Class 12 - Commerce</option>
                                    <option value="12-arts">Class 12 - Arts</option>
                                </select>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Step 2: Guardian Details */}
                {currentStep === 2 && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="form-step"
                    >
                        <h3>Guardian Details</h3>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Father's Name *</label>
                                <input
                                    type="text"
                                    name="fatherName"
                                    className="form-input"
                                    value={formData.fatherName}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter father's name"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Mother's Name *</label>
                                <input
                                    type="text"
                                    name="motherName"
                                    className="form-input"
                                    value={formData.motherName}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter mother's name"
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Contact Number *</label>
                                <input
                                    type="tel"
                                    name="guardianPhone"
                                    className="form-input"
                                    value={formData.guardianPhone}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter mobile number"
                                    pattern="[0-9]{10}"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Email Address *</label>
                                <input
                                    type="email"
                                    name="guardianEmail"
                                    className="form-input"
                                    value={formData.guardianEmail}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter email address"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Complete Address *</label>
                            <textarea
                                name="address"
                                className="form-textarea"
                                value={formData.address}
                                onChange={handleChange}
                                required
                                placeholder="Enter complete address"
                                rows={3}
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">City *</label>
                                <input
                                    type="text"
                                    name="city"
                                    className="form-input"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter city"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Pincode *</label>
                                <input
                                    type="text"
                                    name="pincode"
                                    className="form-input"
                                    value={formData.pincode}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter pincode"
                                    pattern="[0-9]{6}"
                                />
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Step 3: Previous School */}
                {currentStep === 3 && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="form-step"
                    >
                        <h3>Previous School Details</h3>

                        <div className="form-group">
                            <label className="form-label">Previous School Name *</label>
                            <input
                                type="text"
                                name="previousSchool"
                                className="form-input"
                                value={formData.previousSchool}
                                onChange={handleChange}
                                required
                                placeholder="Enter previous school name"
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Last Class Attended *</label>
                                <input
                                    type="text"
                                    name="previousClass"
                                    className="form-input"
                                    value={formData.previousClass}
                                    onChange={handleChange}
                                    required
                                    placeholder="e.g., Class 8"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Percentage/Grade *</label>
                                <input
                                    type="text"
                                    name="percentage"
                                    className="form-input"
                                    value={formData.percentage}
                                    onChange={handleChange}
                                    required
                                    placeholder="e.g., 85% or A+"
                                />
                            </div>
                        </div>

                        <div className="form-group form-checkbox">
                            <input
                                type="checkbox"
                                id="declaration"
                                name="declaration"
                                checked={formData.declaration}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="declaration">
                                I hereby declare that all the information provided above is true and correct to the best of my knowledge. I understand that any false information may lead to cancellation of admission.
                            </label>
                        </div>
                    </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="form-navigation">
                    {currentStep > 1 && (
                        <Button variant="outline" type="button" onClick={prevStep}>
                            Previous
                        </Button>
                    )}

                    {currentStep < 3 ? (
                        <Button variant="primary" type="button" onClick={nextStep}>
                            Next
                        </Button>
                    ) : (
                        <Button
                            variant="primary"
                            type="submit"
                            disabled={isSubmitting || !formData.declaration}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Application'}
                        </Button>
                    )}
                </div>
            </form>
        </div>
    );
}

function AdmissionsPage() {
    return (
        <div className="admissions-page">
            {/* Hero Section */}
            <section className="admissions-hero">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Admissions Open 2026-2027
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Join our family of learners and embark on a journey of excellence
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}
                >
                    <Button variant="primary" onClick={() => document.getElementById('admission-form').scrollIntoView({ behavior: 'smooth' })}>
                        Apply Now
                    </Button>
                    <Button variant="outline" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-text)', borderColor: 'var(--color-primary)' }} onClick={() => window.location.href = '/contact-us'}>
                        Contact Us
                    </Button>
                </motion.div>
            </section>

            {/* Admission Process */}
            <section className="admissions-process">
                <h2>Admission Process</h2>
                <div className="process-timeline">
                    {admissionSteps.map((item, index) => (
                        <motion.div
                            key={item.step}
                            className="process-step"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="process-step-number">{item.step}</div>
                            <div className="process-step-content">
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Info Cards */}
            <section className="admissions-info">
                <div className="info-grid">
                    <motion.div
                        className="info-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <HiAcademicCap className="info-icon" />
                        <h3>Eligibility Criteria</h3>
                        {Object.entries(eligibility).map(([school, criteria]) => (
                            <div key={school} className="eligibility-item">
                                <strong>{school}:</strong>
                                <p>{criteria}</p>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="info-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <HiDocumentText className="info-icon" />
                        <h3>Required Documents</h3>
                        <ul className="document-list">
                            {requiredDocuments.map((doc, index) => (
                                <li key={index}>{doc}</li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        className="info-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <HiClock className="info-icon" />
                        <h3>Important Dates</h3>
                        <div className="dates-list">
                            <div className="dates-yet-to-schedule">
                                <p>Important dates for the upcoming academic session are yet to be scheduled.</p>
                                <p>Please keep checking this page or contact our office for more information.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Application Form */}
            <section id="admission-form" className="admissions-form-section">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Online Application Form
                </motion.h2>
                <AdmissionForm />
            </section>
        </div>
    );
}

export default AdmissionsPage;
