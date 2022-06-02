import styles from './modules/Input.module.css';

function Input({type, text, name, placeholder, handleOnChange, value}){
    return(
        <div className={`mt-3 form-group`}>
            <label htmlFor={name}>{text}</label>
            <input type={type} name={name} className={`form-control`} placeholder={placeholder} onChange={handleOnChange} value={value} id={name}/>
        </div>
    );
}

export default Input;