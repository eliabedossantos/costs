import styles from './modules/Projects.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import LinkButton from '../layout/LinkButton';
import { useState } from 'react';

function Projects(){
    const [projects, setProjects] = useState([]);

    return (
       <section className="py-5">
            <Container>
                <Row>
                    <Col>
                        <h1 className={styles.TitleSection} >Projects</h1>
                    </Col>
                </Row>
            </ Container>
       </section>

    );
}
export default Projects;