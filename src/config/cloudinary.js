// Cloudinary Configuration for Symbiosis School Gallery
// Cloud Name: dnf3jwwb6

export const cloudinaryConfig = {
    cloudName: 'dnf3jwwb6',
    uploadPreset: 'school_gallery', // Create this preset in Cloudinary dashboard
    folder: 'symbiosis-gallery'
};

// Cloudinary upload URL
export const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/image/upload`;

// Upload image to Cloudinary
export const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', cloudinaryConfig.uploadPreset);
    formData.append('folder', cloudinaryConfig.folder);

    try {
        const response = await fetch(CLOUDINARY_UPLOAD_URL, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Upload failed');
        }

        const data = await response.json();
        return {
            success: true,
            url: data.secure_url,
            publicId: data.public_id
        };
    } catch (error) {
        console.error('Cloudinary upload error:', error);
        return {
            success: false,
            error: error.message
        };
    }
};

// Local storage key for gallery images
const STORAGE_KEY = 'symbiosis_gallery_images';

// Get images from localStorage
export const getStoredImages = () => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch {
        return [];
    }
};

// Save image to localStorage
export const saveImageToStorage = (image) => {
    const images = getStoredImages();
    const newImage = {
        id: Date.now(),
        src: image.url,
        caption: image.caption,
        category: image.category,
        uploadedAt: new Date().toISOString()
    };
    images.unshift(newImage); // Add to beginning
    localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
    return newImage;
};

// Remove image from localStorage
export const removeImageFromStorage = (imageId) => {
    const images = getStoredImages();
    const filtered = images.filter(img => img.id !== imageId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
};
