import React from 'react';
import { Card, Table, Button, Badge } from 'react-bootstrap';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { formatCurrency } from '../../../utils/formatCurrency';
import { useRestaurant } from '../../../store/RestaurantContext';

const MenuTable = ({ onEditClick, onDeleteClick }) => {
    const { menu } = useRestaurant();

    return (
        <Card className="border-0 shadow-sm rounded-3 overflow-hidden flex-grow-1" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="table-responsive">
                <Table hover className="align-middle mb-0">
                    {/* Table Head... */}
                    <thead style={{ backgroundColor: 'var(--bg-secondary)' }}>
                        <tr>
                            <th className="py-3 px-4 text-uppercase text-muted" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>Item Name</th>
                            <th className="py-3 px-4 text-uppercase text-muted" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>Category</th>
                            <th className="py-3 px-4 text-uppercase text-muted" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>Price</th>
                            <th className="py-3 px-4 text-uppercase text-muted" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>Status</th>
                            <th className="py-3 px-4 text-uppercase text-muted text-end" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu && menu.length > 0 ? (
                            menu.map((item) => (
                                <tr key={item.id}>
                                    <td className="py-3 px-4 fw-bold" style={{ color: 'var(--text-primary)' }}>{item.name}</td>
                                    <td className="py-3 px-4 text-muted small">{item.category}</td>
                                    <td className="py-3 px-4 fw-bold" style={{ color: 'var(--accent-color)' }}>{formatCurrency(item.price)}</td>
                                    <td className="py-3 px-4">
                                        <Badge bg={item.isAvailable ? 'success' : 'danger'} className="px-3 py-2 rounded-pill fw-normal" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>
                                            {item.isAvailable ? 'AVAILABLE' : 'SOLD OUT'}
                                        </Badge>
                                    </td>
                                    <td className="py-3 px-4 text-end">
                                        <div className="d-flex justify-content-end gap-2">
                                            {/* Edit Button opens Edit Modal */}
                                            <Button 
                                                variant="light" 
                                                size="sm" 
                                                className="text-muted border-0 shadow-sm" 
                                                onClick={() => onEditClick(item)}
                                            >
                                                <FiEdit2 size={16} />
                                            </Button>
                                            
                                            {/* Delete Button uses Context */}
                                            <Button 
                                                variant="light" 
                                                size="sm" 
                                                className="text-danger border-0 shadow-sm" 
                                                onClick={() => onDeleteClick(item)}
                                            >
                                                <FiTrash2 size={16} />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center py-5 text-muted">No menu items found.</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </Card>
    );
};

export default MenuTable;