//General
import { Link } from 'react-router-dom';

// Styles 
import styles from './modules/LinkButton.module.css';

function LinkButton({to, text, className}){
    return (
                        
        <Link to={to} className={`${styles.link__button} ${className}`}>
        {text}
        </Link>

    );


}

export default LinkButton;