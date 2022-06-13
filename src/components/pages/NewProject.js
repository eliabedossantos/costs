//General
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
// Layout
import { Container, Row, Col } from 'react-bootstrap';
import LinkButton from '../layout/LinkButton';
import ProjectForm from '../project/ProjectForm';

// Styles 
import styles from './modules/NewProject.module.css';

// Images
import project from '../../img/project.png';

function NewProject(){
    const navigate = useNavigate();

    function createPost(project){

        //initialize cost and services
        project.cost = 0;
        project.services = [];

        //create post
        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
        .then(resp => resp.json())
        .then((data) => {
            console.log(data);
            // redirect to project page
            navigate('/my-projects', {message: 'Project created successfully'});
            Swal.fire({
                title: 'Sucess',
                text: 'Project created successfully',
                icon: 'success',
                confirmButtonText: 'OK!'
            })
        })
        .catch((err) => {
            console.log(err);
            Swal.fire({
                title: 'Error!',
                text: 'error creating project',
                icon: 'error',
                confirmButtonText: 'OK!'
            })
        })
    }

    return (
        <section className="NewProject py-5">
            <Container>
                <Row>
                    <Col className={`d-flex justify-content-center`}>
                        <h1>Create Project</h1>
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
                        <ProjectForm handleSubmit={createPost} btnText="Create Project" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default NewProject;