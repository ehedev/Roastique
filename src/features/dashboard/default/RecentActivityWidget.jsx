import React from 'react';
import { Card, Table, Badge } from 'react-bootstrap';
import { useOverview } from '../../../hooks/dashboard/useOverview';
import StatusBadge from '../../../components/ui/StatusBadge';

const RecentActivityWidget = () => {
    const { recent } = useOverview();

    return (
        <Card className='border-0 shadow-sm rounded-3 overflow-hidden'>
            <Card.Header className='bg-white border-bottom-0 pt-4 pb-0 px-4'>
                <h5 className='fw-bold m-0' style={{ color: 'var(--text-primary)' }}>Recet Requests</h5>
            </Card.Header>
            <Card.Body className='p-0 mt-3'>
                <div className='table-responsive'>
                    <Table hover className='align-middle mb-0'>
                        <thead style={{ backgroundColor: 'var(--bg-secondary)' }}>
                            <tr>
                                <th className='py-2 px-4 text-uppercase text-muted small'>Guest</th>
                                <th className='py-2 px-4 text-uppercase text-muted small'>Date Requested</th>
                                <th className='py-2 px-4 text-uppercase text-muted small text-end'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recent.map(res => (
                                <tr key={res.id}>
                                    <td className='py-3 px-4 fw-bold'>{res.name}</td>
                                    <td className='py-3 px-4 text-muted small'>{res.date} at {res.formattedTime}</td>
                                    <td className='py-3 px-4 text-end'>
                                        <StatusBadge status={res.status} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Card.Body>
        </Card>
    );
};

export default RecentActivityWidget;