import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineXMark as HiX, HiOutlineChevronLeft as HiChevronLeft, HiOutlineChevronRight as HiChevronRight, HiOutlinePlus as HiPlus, HiOutlineTrash as HiTrash, HiOutlineArrowUpTray as HiUpload, HiOutlinePhoto } from 'react-icons/hi2';
import Button from './Button';
import { uploadToCloudinary, getStoredImages, saveImageToStorage, removeImageFromStorage } from '../../config/cloudinary';
import './LightboxGallery.css';

// Default gallery images
const defaultImages = [
    { id: 1, src: '/assets/images/one.jpeg', caption: 'School Event', category: 'Events' },
    { id: 2, src: '/assets/images/two.jpeg', caption: 'Classroom Activities', category: 'Academics' },
    { id: 3, src: '/assets/images/three.jpeg', caption: 'Sports Day', category: 'Sports' },
    { id: 4, src: '/assets/images/five.jpeg', caption: 'Annual Function', category: 'Events' },
    { id: 5, src: '/assets/images/six.jpeg', caption: 'Science Exhibition', category: 'Academics' },
    { id: 6, src: '/assets/images/award.jpg', caption: 'Award Ceremony', category: 'Achievements' },
    { id: 7, src: '/assets/images/award2.jpeg', caption: 'Student Recognition', category: 'Achievements' },
    { id: 8, src: '/assets/images/award3.jpeg', caption: 'Excellence Awards', category: 'Achievements' },
    { id: 9, src: '/assets/images/highersec.jpeg', caption: 'Campus View', category: 'Campus' },
    { id: 10, src: '/assets/images/sen2.jpeg', caption: 'School Building', category: 'Campus' },
];

function LightboxGallery({
    initialImages = defaultImages,
    showCategories = true,
    showAdminControls = false,
    onImagesChange = null
}) {
    const [images, setImages] = useState([]);
    const [filteredImages, setFilteredImages] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAdminMode, setIsAdminMode] = useState(false);
    const [showUploadModal, setShowUploadModal] = useState(false);

    // Load images from localStorage + defaults
    useEffect(() => {
        const storedImages = getStoredImages();
        // Merge: stored images first (newest), then defaults
        setImages([...storedImages, ...initialImages]);
    }, [initialImages]);

    // Get unique categories
    const categories = ['All', ...new Set(images.map(img => img.category).filter(Boolean))];

    // Filter images by category
    useEffect(() => {
        if (selectedCategory === 'All') {
            setFilteredImages(images);
        } else {
            setFilteredImages(images.filter(img => img.category === selectedCategory));
        }
    }, [selectedCategory, images]);

    // Lightbox navigation
    const openLightbox = (index) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = '';
    };

    const nextImage = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
    }, [filteredImages.length]);

    const prevImage = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
    }, [filteredImages.length]);

    // Keyboard navigation
    useEffect(() => {
        if (!lightboxOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, nextImage, prevImage]);

    // Admin functions - Add image
    const handleAddImage = (newImage) => {
        setImages(prev => [newImage, ...prev]);
        setShowUploadModal(false);

        if (onImagesChange) {
            onImagesChange([newImage, ...images]);
        }
    };

    // Admin functions - Delete image
    const handleDeleteImage = (imageId) => {
        const imageToDelete = images.find(img => img.id === imageId);

        // Only allow deletion of uploaded images (those with uploadedAt)
        if (!imageToDelete?.uploadedAt) {
            alert('Default images cannot be deleted.');
            return;
        }

        if (!confirm('Are you sure you want to delete this image?')) return;

        removeImageFromStorage(imageId);
        const updatedImages = images.filter(img => img.id !== imageId);
        setImages(updatedImages);

        if (onImagesChange) {
            onImagesChange(updatedImages);
        }
    };

    return (
        <div className="lightbox-gallery">
            {/* Admin Controls */}
            {showAdminControls && (
                <div className="gallery-admin-bar">
                    <Button
                        variant={isAdminMode ? 'primary' : 'outline'}
                        onClick={() => setIsAdminMode(!isAdminMode)}
                    >
                        {isAdminMode ? 'Exit Admin Mode' : 'Admin Mode'}
                    </Button>

                    {isAdminMode && (
                        <Button variant="primary" onClick={() => setShowUploadModal(true)}>
                            <HiPlus /> Add Image
                        </Button>
                    )}
                </div>
            )}

            {/* Category Filter */}
            {showCategories && categories.length > 1 && (
                <div className="gallery-categories">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`gallery-category-btn ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            )}

            {/* Gallery Grid */}
            <div className="gallery-grid">
                <AnimatePresence>
                    {filteredImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            className="gallery-item"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            layout
                        >
                            <img
                                src={image.src}
                                alt={image.caption}
                                onClick={() => openLightbox(index)}
                                loading="lazy"
                            />
                            <div className="gallery-item-overlay">
                                <p className="gallery-item-caption">{image.caption}</p>
                                {image.category && (
                                    <span className="gallery-item-category">{image.category}</span>
                                )}
                            </div>

                            {/* Admin Delete Button */}
                            {isAdminMode && image.uploadedAt && (
                                <button
                                    className="gallery-item-delete"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDeleteImage(image.id);
                                    }}
                                >
                                    <HiTrash />
                                </button>
                            )}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxOpen && filteredImages[currentIndex] && (
                    <motion.div
                        className="lightbox-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                    >
                        <motion.div
                            className="lightbox-content"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="lightbox-close" onClick={closeLightbox}>
                                <HiX />
                            </button>

                            <button className="lightbox-nav lightbox-prev" onClick={prevImage}>
                                <HiChevronLeft />
                            </button>

                            <img
                                src={filteredImages[currentIndex].src}
                                alt={filteredImages[currentIndex].caption}
                                className="lightbox-image"
                            />

                            <button className="lightbox-nav lightbox-next" onClick={nextImage}>
                                <HiChevronRight />
                            </button>

                            <div className="lightbox-info">
                                <p className="lightbox-caption">{filteredImages[currentIndex].caption}</p>
                                <span className="lightbox-counter">
                                    {currentIndex + 1} / {filteredImages.length}
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Upload Modal */}
            <AnimatePresence>
                {showUploadModal && (
                    <UploadModal
                        onClose={() => setShowUploadModal(false)}
                        onUpload={handleAddImage}
                        categories={categories.filter(c => c !== 'All')}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}

// Upload Modal Component with Cloudinary
function UploadModal({ onClose, onUpload, categories }) {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [caption, setCaption] = useState('');
    const [category, setCategory] = useState(categories[0] || 'Events');
    const [newCategory, setNewCategory] = useState('');
    const [isUploading, setIsUploading] = useState(false);
    const [uploadError, setUploadError] = useState('');
    const fileInputRef = useRef(null);

    // Handle file selection
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            // Validate file type
            if (!selectedFile.type.startsWith('image/')) {
                setUploadError('Please select an image file (JPG, PNG, WebP)');
                return;
            }
            // Validate file size (max 10MB)
            if (selectedFile.size > 10 * 1024 * 1024) {
                setUploadError('Image size must be less than 10MB');
                return;
            }
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
            setUploadError('');
        }
    };

    // Handle drag and drop
    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile && droppedFile.type.startsWith('image/')) {
            setFile(droppedFile);
            setPreview(URL.createObjectURL(droppedFile));
            setUploadError('');
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file) {
            setUploadError('Please select an image to upload');
            return;
        }

        setIsUploading(true);
        setUploadError('');

        try {
            const result = await uploadToCloudinary(file);

            if (result.success) {
                const newImage = saveImageToStorage({
                    url: result.url,
                    caption: caption || 'Untitled',
                    category: newCategory || category
                });
                onUpload(newImage);
            } else {
                setUploadError(result.error || 'Upload failed. Please try again.');
            }
        } catch (error) {
            setUploadError('Upload failed. Please check your internet connection.');
        } finally {
            setIsUploading(false);
        }
    };

    // Cleanup preview URL on unmount
    useEffect(() => {
        return () => {
            if (preview) URL.revokeObjectURL(preview);
        };
    }, [preview]);

    return (
        <motion.div
            className="upload-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="upload-modal"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="upload-modal-header">
                    <h3>Add New Image</h3>
                    <button className="upload-modal-close" onClick={onClose}>
                        <HiX />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="upload-modal-form">
                    {uploadError && (
                        <div className="upload-error">
                            {uploadError}
                        </div>
                    )}

                    {/* Drag and Drop Zone */}
                    <div
                        className={`upload-dropzone ${file ? 'has-file' : ''}`}
                        onClick={() => fileInputRef.current?.click()}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                    >
                        {preview ? (
                            <div className="upload-preview">
                                <img src={preview} alt="Preview" />
                                <button
                                    type="button"
                                    className="upload-preview-remove"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setFile(null);
                                        setPreview(null);
                                    }}
                                >
                                    <HiX />
                                </button>
                            </div>
                        ) : (
                            <div className="upload-placeholder">
                                <HiOutlinePhoto className="upload-icon" />
                                <p>Click to select or drag an image here</p>
                                <span>JPG, PNG, WebP (max 10MB)</span>
                            </div>
                        )}
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Caption</label>
                        <input
                            type="text"
                            className="form-input"
                            placeholder="Enter a caption for the image"
                            value={caption}
                            onChange={(e) => setCaption(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Category</label>
                        <select
                            className="form-input"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Or create new category</label>
                        <input
                            type="text"
                            className="form-input"
                            placeholder="New category name"
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
                        />
                    </div>

                    <div className="upload-modal-actions">
                        <Button variant="outline" type="button" onClick={onClose} disabled={isUploading}>
                            Cancel
                        </Button>
                        <Button variant="primary" type="submit" disabled={isUploading || !file}>
                            {isUploading ? (
                                <>Uploading...</>
                            ) : (
                                <><HiUpload /> Upload Image</>
                            )}
                        </Button>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    );
}

export default LightboxGallery;
