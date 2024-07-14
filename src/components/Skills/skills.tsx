import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsCheckCircle } from 'react-icons/bs';
import styles from './skills.module.scss';

const skills = [
  { name: "HTML", level: "Expert" },
  { name: "CSS", level: "Expert" },
  { name: "Typescript", level: "Intermediate" },
  { name: "Go", level: "Experienced" },
  { name: "React", level: "Intermediate" },
  { name: "Python", level: "Intermediate" },
  { name: "Java", level: "Intermediate" },
  { name: "SQL", level: "Intermediate" },
  { name: "MySql", level: "Intermediate" },
  { name: "Git", level: "Advanced" },
  { name: "Latex", level: "Intermediate" },
  { name: "PyTorch", level: "Experienced" },
];

const Skills: React.FC = () => {
  return (
    <Container className={styles.skillsContainer}>
      <p className={styles.subtitle}>
        Know About My
      </p>
      <Row className="justify-content-center">
        <h1 className={styles.skills}>
          Skills
        </h1>
      </Row>
      <Row>
        {skills.map((skill, index) => (
          <Col  xs={6} sm={4} md={3} lg={2} key={index} className={styles.skillItem}>
            <div className={styles.skillIcon}><BsCheckCircle /></div>
            <div>
              <h4 className={styles.skillName}>{skill.name}</h4>
              <p className={styles.skillLevel}>{skill.level}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;