import React from 'react';

const ReservationConfirmation = ({ successData }) => {
    return (
        <>
            {successData && (
                <div
                    className='mb-5 p-4 p-md-5 text-center shadow-sm mx-auto'
                    style={{
                        backgroundColor: 'var(--bg-secondary)',
                        border: '1px solid var(--accent-color)',
                        maxWidth: '800px'
                    }}
                >
                    <h4 className='fw-bold mb-3' style={{ color: 'var(--text-primary)' }}>Request Received</h4>
                    <p className='mb-4 text-muted' style={{ lineHeight: 1.8 }}>
                        Thank you, <span className='fw-bold text-dark'>{successData.name}</span>. Your request for <span className='fw-bold text-dark'>{successData.guests} guests</span> on <span className='fw-bold text-dark'>{successData.date}</span> at <span className='fw-bold text-dark'>{successData.formattedTime}</span> has been sent to our team. You will receive a confirmation shortly.
                    </p>
                    <div>
                        <small className='text-uppercase fw-bold text-muted d-block mb-2' style={{ letterSpacing: '2px' }}>
                            Reference Number
                        </small>
                        <div 
                            className='fw-bold d-inline-block px-4 py-2 fs-5'
                            style={{
                                backgroundColor: 'var(--text-primary)',
                                color: 'var(--bg-primary)',
                                letterSpacing: '3px'
                            }}
                        >
                            {successData.id}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ReservationConfirmation;