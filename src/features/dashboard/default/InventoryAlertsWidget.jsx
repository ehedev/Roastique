import React from 'react';
import { Card, ListGroup, Badge } from 'react-bootstrap';
import { useOverview } from '../../../hooks/dashboard/useOverview';
import { FiAlertCircle } from 'react-icons/fi';

const InventoryAlertsWidget = () => {
    const { soldOutItems } = useOverview();

    return (
        <Card className='border-0 shadow-sm rounded-3 h-100'>
            <Card.Header className='bg-white border-bottom-0 pt-4 d-flex justify-content-between align-items-center'>
                <h5 className='fw-bold m-0' style={{ color: 'var(--text-primary)' }}>Inventory Alerts</h5>
                <Badge bg='danger' className='rounded-pill'>{soldOutItems.length}</Badge>
            </Card.Header>
            <Card.Body className='p-0'>
                <ListGroup variant='flush'>
                    {soldOutItems.length > 0 ? (
                        soldOutItems.map(item => (
                            <ListGroup.Item key={item.id} className='px-4 py-3 border-0 d-flex align-items-center gap-3'>
                                <FiAlertCircle size={18} className='text-danger' />
                                <div>
                                    <div className='fw-bold' style={{ color: 'var(--text-primary)' }}>{item.name}</div>
                                    <div className='text-muted small'>{item.category}</div>
                                </div>
                            </ListGroup.Item>
                        ))
                    ): (
                        <div className='p-4 text-center text-muted small'>All menu items are currently in stock.</div>
                    )}
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

export default InventoryAlertsWidget;