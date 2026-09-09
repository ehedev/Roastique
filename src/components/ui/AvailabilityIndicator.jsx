import React from 'react';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const AvailabilityIndicator = ({ availability }) => {
    if (!availability) return null;

    if (availability.isAvailable) {
        return (
            <div className="d-flex align-items-center gap-1 text-success mt-1" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                <FiCheckCircle size={12} />
                <span>{availability.available} {availability.tableType} tables left</span>
            </div>
        );
    }

    return (
        <div className="d-flex align-items-center gap-1 text-danger mt-1" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
            <FiAlertCircle size={12} />
            <span>0 {availability.tableType} tables - Overbooked</span>
        </div>
    );
};

export default AvailabilityIndicator;