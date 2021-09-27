import React from 'react';
import AppGallery from '../../UI/organisms/AppGallery';
import Titlebar from '../../UI/organisms/Titlebar';
import Topbar from '../../UI/organisms/Topbar';
import AppContent from '../../UI/templates/AppContent';
import AppHeader from '../../UI/templates/AppHeader';
import './dashboard.css';

export default function Dashboard() {
    return (
        <div className="dashboardPage">
            <AppHeader>
                <Topbar />
            </AppHeader>
            <AppContent>
                <AppGallery />
            </AppContent>
        </div>
    )
}
