import React from 'react';
import {
  Col,
  Container,
  ProgressBar,
  Tab,
  Tabs,
  Row,
} from 'react-bootstrap';

export const SkillsBar = ({ skill, value }: { skill: string, value: number }) => {
  return (
    <div style={{ width: "95%" }}>
      <p className="lead mb-1 mt-2">{skill}</p>
      <ProgressBar now={value} />
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-3 bg-white m-0"
    >
      <Container className="p-5">
        <h2 className="display-4 pb-5 text-center">
          Compétences
        </h2>
        <Tabs
          defaultActiveKey="mobile"
          fill
        >
          <Tab
            eventKey="mobile"
            title="Mobile"
          >
            <Row className="pt-3 px-1">
              <Col xs={12} md={6}>
                <SkillsBar
                  skill="Android"
                  value={90}
                />
                <SkillsBar
                  skill="Android TV"
                  value={85}
                />
                <SkillsBar
                  skill="Kotlin"
                  value={90}
                />
                <SkillsBar
                  skill="Java"
                  value={75}
                />
              </Col>
              <Col xs={12} md={6}>
                <SkillsBar
                  skill="React Native"
                  value={65}
                />
                <SkillsBar
                  skill="iOS"
                  value={35}
                />
                <SkillsBar
                  skill="Swift"
                  value={40}
                />
              </Col>
            </Row>
          </Tab>
          <Tab
            eventKey="web"
            title="Web"
          >
            <Row className="pt-3 px-1">
              <Col xs={12} md={6}>
                <SkillsBar
                  skill="Angular"
                  value={75}
                />
                <SkillsBar
                  skill="React"
                  value={80}
                />
                <SkillsBar
                  skill="HTML/CSS"
                  value={65}
                />
              </Col>
              <Col xs={12} md={6}>
                <SkillsBar
                  skill="Node.js"
                  value={85}
                />
                <SkillsBar
                  skill="PHP"
                  value={60}
                />
                <SkillsBar
                  skill="MongoDB"
                  value={75}
                />
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </section>
  )
}
