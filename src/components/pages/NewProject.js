//General
import { Link } from 'react-router-dom';

// Layout
import { Container, Row, Col } from 'react-bootstrap';
import LinkButton from '../layout/LinkButton';
import ProjectForm from '../project/ProjectForm';

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
                <Row className='mt-4'>
                    <Col md={5} className={`d-flex justify-content-center`}>
                        <div>
                            <p className={`${styles.text__description}`}>
                                Create your project and then add the services.       
                            </p>
                            <img src={project} alt="Project manneger"  className="w-75 mw-100" />
                        </div>
                    </Col>
                    <Col md={7}>
                        <ProjectForm />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default NewProject;