import React from 'react';
import { Col } from 'react-bootstrap';
import { FiInstagram, FiFacebook } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';

const SocialMedia = () => {
    return (
        <Col md={4} className='text-center'>
            <div className='d-flex justify-content-center gap-4'>
                <a
                    href='https://www.instagram.com/'
                    target='_blank'
                    className='text-decoration-none footer-link'
                >
                    <FiInstagram size={20} />
                </a>
                <a
                    href='https://www.x.com/'
                    target='_blank'
                    className='text-decoration-none footer-link'
                >
                    <FaXTwitter size={20} />
                </a>
                <a
                    href='https://www.facebook.com/'
                    target='_blank'
                    className='text-decoration-none footer-link'
                >
                    <FiFacebook size={20} />
                </a>
            </div>
        </Col>
    );
};

export default SocialMedia;