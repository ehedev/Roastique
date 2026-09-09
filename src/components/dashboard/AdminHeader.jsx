import React from 'react';
import { Button, Badge, Row, Col } from 'react-bootstrap';
import { FiPlus } from 'react-icons/fi';
import { renderTableBadge } from '../../hooks/dashboard/useReservations';

const AdminHeader = ({ title, subtitle, actionText, onActionClick, capacityData, children }) => {
    return (
        <Row className="align-items-start align-items-lg-center mb-4 gy-3">
            
            {/* Left Side */}
            <Col xs={12} lg={5} xl={6}>
                <h2 className="fw-bold mb-1" style={{ color: 'var(--text-primary)' }}>{title}</h2>
                <p className="text-muted mb-0 small">{subtitle}</p>
            </Col>

            {/* Right Side */}
            <Col xs={12} lg={7} xl={6} className="d-flex flex-wrap align-items-center justify-content-start justify-content-lg-end gap-3">
                
                {capacityData?.small && (
                    <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-2 gap-sm-3">
                        <span className="text-muted small fw-bold" style={{ letterSpacing: '1px' }}>
                            Capacity:
                        </span>
                        
                        <div className="d-flex flex-row flex-nowrap gap-2">
                            {[
                                { label: 'Private', count: capacityData.private.count },
                                { label: 'Large', count: capacityData.large.count },
                                { label: 'Medium', count: capacityData.medium.count },
                                { label: 'Small', count: capacityData.small.count }
                            ].map((table) => {
                                const countStyle = renderTableBadge(table.count); 
                                
                                return (
                                    <Badge 
                                        key={table.label}
                                        bg="transparent"
                                        className="px-2 px-sm-3 py-1 py-sm-2 shadow-sm text-nowrap fw-600"
                                        style={{
                                            color: 'var(--text-primary)',
                                            border: '1px solid color-mix(in srgb, var(--text-primary) 45%, transparent)',
                                            letterSpacing: '0.5px',
                                        }}
                                    >
                                        {table.label}: <span style={countStyle}>{table.count}</span>
                                    </Badge>
                                );
                            })}
                        </div>
                    </div>
                )}

                {children} 
                
                {actionText && onActionClick && (
                    <Button 
                        onClick={onActionClick}
                        className="d-flex align-items-center gap-2 rounded-0 px-4 py-2 border-0 shadow-sm"
                        style={{ backgroundColor: 'var(--text-primary)', color: 'var(--bg-primary)', fontWeight: '600' }}
                    >
                        <FiPlus size={18} /> {actionText}
                    </Button>
                )}
            </Col>
        </Row>
    );
};

export default AdminHeader;