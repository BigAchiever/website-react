import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AdmissionsPopup from '../ui/AdmissionsPopup';

function Layout() {
    return (
        <div className="layout-wrapper">
            <Header />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
            <AdmissionsPopup />
        </div>
    );
}

export default Layout;
