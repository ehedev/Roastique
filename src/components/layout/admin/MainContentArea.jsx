import React from 'react';
import { Outlet } from 'react-router-dom';

const MainContentArea = () => (
    <div className="admin-main-wrapper d-flex flex-column min-vh-100">
        <main className="flex-grow-1 p-4 p-lg-5 overflow-auto">
            <Outlet />
        </main>
    </div>
);

export default MainContentArea;