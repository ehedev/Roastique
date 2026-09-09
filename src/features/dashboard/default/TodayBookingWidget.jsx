import React from 'react';
import { Card, Table, Badge } from 'react-bootstrap';
import { useOverview } from '../../../hooks/dashboard/useOverview';

const TodayBookingWidget = () => {
    const { todaysReservations } = useOverview();

    return (
        <Card className='border-0 shadow-sm rounded-3 overflow-hidden'>
            <Card.Header className='bg-white border-bottom-0 pt-4 pb-0 px-4'>
                <h5 className='fw-bold m-0' style={{ color: 'var(--text-primary)' }}>Arriving Today</h5>
            </Card.Header>
            <Card.Body className='p-0 mt-3'>
                <div className='table-responsive'>
                    <Table hover className='align-middle mb-0'>
                        <thead style={{ backgroundColor: 'var(--bg-secondary)' }}>
                            <tr>
                                <th className='py-2 px-4 text-uppercase text-muted small'>Time</th>
                                <th className='py-2 px-4 text-uppercase text-muted small'>Guest</th>
                                <th className='py-2 px-4 text-uppercase text-muted small text-end'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todaysReservations.length > 0 ? (
                                todaysReservations.map(res => (
                                    <tr key={res.id}>
                                        <td className='py-3 px-4 fw-bold' style={{ color: 'var(--text-secondary)' }}>{res.formattedTime}</td>
                                        <td className='py-3 px-4'>{res.name} <span className='text-muted small'>({res.guests} pax)</span></td>
                                        <td className='py-3 px-4 text-end'>
                                            <Badge bg={res.status === 'Confirmed' ? 'success' : res.status === 'Cancelled' ? 'danger' : 'warning'} text={res.status === 'Pending' ? 'dark' : 'light'} className='rounded-pill'>
                                                {res.status}
                                            </Badge>
                                        </td>
                                    </tr>
                                ))
                            ): (
                                <tr><td colSpan="3" className='text-center py-4 text-muted'>No bookings scheduled for today.</td></tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </Card.Body>
        </Card>
    );
};

export default TodayBookingWidget;