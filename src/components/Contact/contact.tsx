import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './contact.module.scss';
import { FaPhone, FaEnvelope, FaGoogleScholar } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <Container className={styles.container}>
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <p className={styles.subtitle}>Get in Touch</p>
          <h1 className={styles.contact}>Contact Me</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} sm={12} md={5} lg={4} className={styles.contactItem}>
          <a href="tel:+98 9360311018" className={styles.contactLink}>
            <FaPhone className={styles.contactIcon} />+98 9360311018
          </a>
        </Col>
        <Col xs={12} sm={12} md={5} lg={4} className={styles.contactItem}>
          <a href="mailto:shervinghaffari79@gmail.com" className={styles.contactLink}>
            <FaEnvelope className={styles.contactIcon} />shervinghaffari79@gmail.com
          </a>
        </Col>
        <Col xs={12} sm={12} md={5} lg={4} className={styles.contactItem}>
          <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
            <FaGoogleScholar className={styles.contactIcon} />Google Scholar
          </a>
        </Col>
      </Row>
      <Row className="justify-content-center text-center mt-4">
        <Col md={12}>
          <p className={styles.copyright}>© 2024 Shervin Ghaffari. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;