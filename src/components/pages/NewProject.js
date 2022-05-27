//General
import { Link } from 'react-router-dom';

// Layout
import { Container, Row, Col } from 'react-bootstrap';
import LinkButton from '../layout/LinkButton';

// Styles 
import styles from './modules/NewProject.module.css';

// Images
import project from '../../img/project.png';

function NewProject(){
    return (
        <section className="NewProject py-5">
            <Container>
                <Row>
                    <Col className={`d-flex justify-content-center`}>
                        <h1>Criar Projeto</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className={``}>
                            <p className={`${styles.text__description}`}>
                               
                            </p>
                        <img src={project} alt="Project manneger"  className="w-75 mw-100" />
                    </Col>
                    <Col md={6} className={`d-flex justify-content-center`}>
                      
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default NewProject;