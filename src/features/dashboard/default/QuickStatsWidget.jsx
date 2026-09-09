import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { FiGrid, FiClock, FiCalendar } from 'react-icons/fi';
import { useOverview } from '../../../hooks/dashboard/useOverview';

const QuickStatsWidget = () => {
    const { 
        totalMenuItems, pendingReservations, todaysBookings,
    } = useOverview();

    return (
        <Row className='g-4'>
            <Col md={4}>
                <Card className='border-0 shadow-sm rounded-3 h-100' style={{ borderTop: '4px solid #FFC107' }}>
                    <Card.Body className='p-4 d-flex align-items-center'>
                        <div className='rounded-circle d-flex align-items-center justify-content-center me-3' style={{ width: '48px', height: '48px', backgroundColor: 'rgba(255, 193, 7, 0.1)', color: '#FFC107' }}>
                            <FiClock size={24} />
                        </div>
                        <div>
                            <h6 className='text-muted text-uppercase mb-1 small fw-bold'>Pending Requests</h6>
                            <h3 className='fw-bold m-0' style={{ color: 'var(--text-primary)' }}>{pendingReservations}</h3>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

            <Col md={4}>
                <Card className='border-0 shadow-sm rounded-3 h-100' style={{ borderTop: '4px solid #198754' }}>
                    <Card.Body className='p-4 d-flex align-items-center'>
                        <div className='rounded-circle d-flex align-items-center justify-content-center me-3' style={{ width: '48px', height: '48px', backgroundColor: 'rgba(25, 135, 84, 0.1)', color: '#198754' }}>
                            <FiCalendar size={24} />
                        </div>
                        <div>
                            <h6 className='text-muted text-uppercase mb-1 small fw-bold'>Today's Bookings</h6>
                            <h3 className='fw-bold m-0' style={{ color: 'var(--text-primary)' }}>{todaysBookings}</h3>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

            <Col md={4}>
                <Card className='border-0 shadow-sm rounded-3 h-100' style={{ borderTop: '4px solid var(--text-primary)' }}>
                    <Card.Body className='p-4 d-flex align-items-center'>
                        <div className='rounded-circle d-flex align-items-center justify-content-center me-3' style={{ width: '48px', height: '48px', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
                            <FiGrid size={24} />
                        </div>
                        <div>
                            <h6 className='text-muted text-uppercase mb-1 small fw-bold'>Active Menu Items</h6>
                            <h3 className='fw-bold m-0' style={{ color: 'var(--text-primary)' }}>{totalMenuItems}</h3>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default QuickStatsWidget;