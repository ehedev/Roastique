import React from 'react';
import { Card, Table, Dropdown, Button } from 'react-bootstrap';
import { FiMoreVertical, FiTrash2, FiCheck, FiX } from 'react-icons/fi';
import StatusBadge from '../../../components/ui/StatusBadge';
import AvailabilityIndicator from '../../../components/ui/AvailabilityIndicator';

const ReservationsTable = ({ reservations, onStatusChange, onDeleteClick, checkAvailability }) => {
    return (
        <Card className="border-0 shadow-sm rounded-3 overflow-hidden flex-grow-1" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="table-responsive">
                <Table hover className="align-middle mb-0">
                    <thead style={{ backgroundColor: 'var(--bg-secondary)' }}>
                        <tr>
                            <th className="py-3 px-4 text-uppercase text-muted" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>Ref ID</th>
                            <th className="py-3 px-4 text-uppercase text-muted" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>Guest Details</th>
                            <th className="py-3 px-4 text-uppercase text-muted" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>Date & Time</th>
                            <th className="py-3 px-4 text-uppercase text-muted" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>Party Size</th>
                            <th className="py-3 px-4 text-uppercase text-muted" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>Status</th>
                            <th className="py-3 px-4 text-uppercase text-muted text-end" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservations && reservations.length > 0 ? (
                            reservations.map((res) => {
                                // Check availability
                                const availability = checkAvailability ? checkAvailability(res.date, res.time, res.guests) : null;
                                
                                // Check if overbook or not
                                const isOverbooked = availability && !availability.isAvailable;
                                const isConfirmed = res.status === 'Confirmed';
                                const disableConfirm = isConfirmed || (isOverbooked && !isConfirmed);

                                return (
                                    <tr key={res.id}>
                                        <td className="py-3 px-4 fw-bold" style={{ color: 'var(--accent-color)' }}>{res.id}</td>
                                        <td className="py-3 px-4">
                                            <div className="fw-bold" style={{ color: 'var(--text-primary)' }}>{res.name}</div>
                                            <div className="text-muted small">{res.phone}</div>
                                        </td>
                                        <td className="py-3 px-4">
                                            <div className="fw-bold" style={{ color: 'var(--text-primary)' }}>{res.date}</div>
                                            <div className="text-muted small">{res.formattedTime}</div>
                                        </td>
                                        <td className="py-3 px-4 fw-bold text-muted">
                                            {res.guests} {res.guests === 1 ? 'Guest' : 'Guests'}
                                        </td>
                                        <td className="py-3 px-4">
                                            <StatusBadge status={res.status} />
                                            
                                            {res.status === 'Pending' && checkAvailability && (
                                                <AvailabilityIndicator 
                                                    availability={availability} 
                                                />
                                            )}
                                        </td>
                                        <td className="py-3 px-4 text-end">
                                            <div className="d-flex justify-content-end gap-2 align-items-center">
                                                
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="light" size="sm" className="text-muted border-0 shadow-sm d-flex align-items-center">
                                                        <FiMoreVertical size={16} />
                                                    </Dropdown.Toggle>
                                                    
                                                    <Dropdown.Menu className="border-0 shadow-sm rounded-0">
                                                        
                                                        {/* NEW: Dynamic Disabled State */}
                                                        <Dropdown.Item 
                                                            onClick={() => onStatusChange(res.id, 'Confirmed')}
                                                            disabled={disableConfirm}
                                                            className={`d-flex align-items-center gap-2 fw-bold small ${disableConfirm ? 'text-muted' : 'text-success'}`}
                                                        >
                                                            <FiCheck size={14} /> 
                                                            {isOverbooked && !isConfirmed ? 'Overbooked' : 'Mark Confirmed'}
                                                        </Dropdown.Item>
                                                        
                                                        <Dropdown.Item 
                                                            onClick={() => onStatusChange(res.id, 'Cancelled')}
                                                            disabled={res.status === 'Cancelled'}
                                                            className={`d-flex align-items-center gap-2 fw-bold small ${res.status === 'Cancelled' ? '' : 'text-danger'}`}
                                                        >
                                                            <FiX size={14} /> Mark Cancelled
                                                        </Dropdown.Item>
                                                        
                                                    </Dropdown.Menu>
                                                </Dropdown>

                                                <Button 
                                                    variant="light" 
                                                    size="sm" 
                                                    className="text-danger border-0 shadow-sm" 
                                                    onClick={() => onDeleteClick(res)}
                                                    title="Delete Record"
                                                >
                                                    <FiTrash2 size={16} />
                                                </Button>

                                            </div>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center py-5 text-muted">
                                    No reservations found. Incoming bookings will appear here.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </Card>
    );
};

export default ReservationsTable;