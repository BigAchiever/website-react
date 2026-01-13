import { useState, useEffect } from 'react';

/**
 * Custom hook for responsive design
 * Returns breakpoint information and screen size
 */
export function useResponsive() {
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 1200,
        height: typeof window !== 'undefined' ? window.innerHeight : 800,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const breakpoints = {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
    };

    return {
        width: windowSize.width,
        height: windowSize.height,
        isMobile: windowSize.width < breakpoints.md,
        isTablet: windowSize.width >= breakpoints.md && windowSize.width < breakpoints.lg,
        isDesktop: windowSize.width >= breakpoints.lg,
        isSmall: windowSize.width < breakpoints.sm,
        breakpoints,
    };
}

export default useResponsive;
