import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AdminHeader from '../../../components/dashboard/AdminHeader';
import QuickStatsWidget from '../../../features/dashboard/default/QuickStatsWidget'
import TodayBookingWidget from '../../../features/dashboard/default/TodayBookingWidget'
import RecentActivityWidget from '../../../features/dashboard/default/RecentActivityWidget'
import InventoryAlertsWidget from '../../../features/dashboard/default/InventoryAlertsWidget'
import QuickActionsWidget from '../../../features/dashboard/default/QuickActionsWidget'

const DashboardOverviewSection = () => {
    return (
        <section className='d-flex flex-column h-100 animation-fade-in'>
            <AdminHeader title="Dashboard Overview" subtitle="At-a-glance metrics for Roastique operations." />

            <QuickStatsWidget />

            <Row className='g-4 mt-1'>
                <Col lg={8}>
                    <TodayBookingWidget />
                    <div className='mt-4'>
                        <RecentActivityWidget />
                    </div>
                </Col>
                <Col lg={4}>
                    <InventoryAlertsWidget />
                    <div className='mt-4'>
                        <QuickActionsWidget />
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default DashboardOverviewSection;