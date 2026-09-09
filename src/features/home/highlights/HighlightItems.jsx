import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { formatCurrency } from '../../../utils/formatCurrency';
import { useHighlights } from '../../../hooks/home/highlights/useHighlights';

const HighlightItems = () => {
    const { HighlightItems, handleItemMenu } = useHighlights();
    
    return (
        <Row className='g-4'>
            {HighlightItems.map((item, index) => {
                const isMiddle = index === 1;

                return (
                    <Col lg={4} key={item.id}>
                        <div
                            className={`p-4 h-100 d-flex flex-column ${isMiddle ? 'shadow-lg border-0' : 'border bg-white'}`}
                            style={{
                                backgroundColor: isMiddle ? 'var(--text-primary)' : '#ffffff',
                                borderColor: isMiddle ? 'transparent' : 'rgba(44, 30, 22, 0.1)',
                                borderRadius: '0',
                                transform: isMiddle ? 'translateY(-8px)' : 'none',
                                transition: 'transform 0.3s ease-in-out'
                            }}
                        >
                            <div className='mb-auto'>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <small
                                        className='text-uppercase fw-bold'
                                        style={{ 
                                            fontSize: '0.75rem', 
                                            letterSpacing: '1px',
                                            color: isMiddle ? 'var(--accent-color)' : 'var(--bs-gray-600)' 
                                        }}
                                    >
                                        {item.category}
                                    </small>
                                    
                                    {isMiddle && (
                                        <span 
                                            className="badge rounded-0 px-2 py-1 text-uppercase" 
                                            style={{ 
                                                backgroundColor: 'var(--accent-color)', 
                                                color: 'var(--bg-primary)', 
                                                letterSpacing: '1px', 
                                                fontSize: '0.65rem' 
                                            }}
                                        >
                                            Most Popular
                                        </span>
                                    )}
                                </div>
                                
                                <h4
                                    className='mt-2 mb-2 fw-bold'
                                    style={{ color: isMiddle ? 'var(--bg-primary)' : 'var(--text-primary)' }}
                                >
                                    {item.name}
                                </h4>
                                <p 
                                    className='mb-0' 
                                    style={{ 
                                        lineHeight: '1.6',
                                        color: isMiddle ? 'rgba(255, 255, 255, 0.75)' : 'var(--bs-gray-600)' 
                                    }}
                                >
                                    {item.description}
                                </p>
                            </div>

                            <div 
                                className='mt-4 pt-3 d-flex justify-content-between align-items-center'
                                style={{ borderTop: `1px solid ${isMiddle ? 'rgba(255, 255, 255, 0.15)' : 'rgba(44, 30, 22, 0.1)'}` }}
                            >
                                <span 
                                    className='fw-bold fs-5' 
                                    style={{ color: isMiddle ? 'var(--bg-primary)' : 'var(--text-primary)' }}
                                >
                                    {formatCurrency(item.price)}
                                </span>
                                
                                <button 
                                    onClick={() => handleItemMenu(item.id)}
                                    className='btn p-0 border-0 bg-transparent shadow-none'
                                    style={{ 
                                        color: 'var(--accent-color)', 
                                        fontSize: '1.2rem',
                                        transition: 'transform 0.2s ease-in-out'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(4px)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                                    aria-label={`Pre-order ${item.name}`}
                                >
                                    &#8594;
                                </button>
                            </div>
                        </div>
                    </Col>
                );
            })}
        </Row>
    );
};

export default HighlightItems;