import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTitle = (title) => {
    const location = useLocation();

    useEffect(() => {
        const baseTitle = 'Symbiosis School Jabalpur';
        if (title) {
            document.title = `${title} | ${baseTitle}`;
        } else {
            document.title = baseTitle;
        }
    }, [title, location]);
};

export default usePageTitle;
