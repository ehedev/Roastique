import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiPlus, FiList } from 'react-icons/fi';

const QuickActionsWidget = () => {
    return (
        <Card className='border-0 shadow-sm rounded-3 bg-light'>
            <Card.Body className='p-4'>
                <h6 className='fw-bold text-uppercase text-muted small mb-3'>Quick Actions</h6>
                <div className='d-grid gap-2'>
                    <Button as={Link} to="/admin/menu" variant='dark' className='d-flex align-items-center justify-content-center gap-2 py-2 rounded-0 shadow-sm' style={{ backgroundColor: 'var(--text-primary)' }}>
                        <FiPlus /> Manage Menu
                    </Button>
                    <Button as={Link} to="/admin/reservations" variant='outline-dark' className='d-flex align-items-center justify-content-center gap-2 py-2 rounded-0'>
                        <FiList /> Manage Reservations
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default QuickActionsWidget;