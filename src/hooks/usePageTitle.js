import { useEffect } from 'react';

/**
 * Custom hook to set page title and meta description dynamically
 * @param {string} title - Page title
 * @param {string} description - Page description (optional)
 */
export function usePageTitle(title, description) {
    useEffect(() => {
        // Store original title
        const originalTitle = document.title;

        // Set new title
        document.title = `${title} | Symbiosis School Jabalpur`;

        // Update meta description if provided
        if (description) {
            let metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                const originalDescription = metaDescription.getAttribute('content');
                metaDescription.setAttribute('content', description);

                // Restore on cleanup
                return () => {
                    document.title = originalTitle;
                    metaDescription.setAttribute('content', originalDescription);
                };
            }
        }

        // Restore title on cleanup
        return () => {
            document.title = originalTitle;
        };
    }, [title, description]);
}

export default usePageTitle;
