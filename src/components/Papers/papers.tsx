import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './papers.module.scss';
import { FaBook } from 'react-icons/fa6';

const publications = [
  {
    title: "Generative-AI in E-Commerce: Use-Cases and Implementations",
    authors: "Shervin Ghaffari, Behnam Youseifimenhr, Mehdi Ghatee",
    venue: "IEEE International Conference on IoT Security",
    year: 2023,
    doi: "10.1109/AISP61396.2024.10475266"
  }
];

const Publications: React.FC = () => {
  return (
    <Container className={`${styles.publicationTimeline}`}>
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <p className={styles.subtitle}>View My Recent</p>
          <h1 className={styles.publications}>Publications</h1>
        </Col>
      </Row>
      <div className={styles.timeline}>
        {publications.map((pub, index) => (
          <div key={index} className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}>
            <div className={styles.timelineContent}>
              <div className={styles.year}>{pub.year}</div>
              <h3 className={styles.title}>{pub.title}</h3>
              <p className={styles.authors}>{pub.authors}</p>
              <p className={styles.venue}>{pub.venue}</p>
              <Button href={`https://doi.org/${pub.doi}`} target="_blank" className={styles.btn}>
                View Paper
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Publications;