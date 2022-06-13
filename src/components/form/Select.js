import styles from './modules/Select.module.css';

function Select({text, name, options, handleOnChange, value}){
    return(
        <div className={`mt-3 form-group`}>
            <label htmlFor={name}>{text}</label>
            <select className={`form-control`} id={name} onChange={handleOnChange} value={value || ''}>
                {
                    options.map((option, index) => {
                        return(
                            <option key={index} value={option.id}>{option.name}</option>
                        );
                    }
                )}
            </select>
        </div>
    );
}  
export default Select;