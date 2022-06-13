import styles from './modules/Projects.module.css';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
import ProjectCard from '../layout/ProjectCard';
function ProjectCard({id, name, budget, category, handleRemove}){

    return (
        <div className={styles.ProjectCard}>
            <div className={styles.ProjectCardHeader}>
                <h3>{name}</h3>
                <button onClick={() => handleRemove(id)}>Remove</button>
            </div>
            <div className={styles.ProjectCardBody}>
                <p>Budget: {budget}</p>
                <p>Category: {category}</p>
            </div>
        </div>
    );
}
export default ProjectCard;