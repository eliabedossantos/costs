import styles from './modules/SubmitButton.module.css';
function SubmitButton({text, handleOnClick, value}){ 
  return (
    <button type="submit" className={`${styles.submitButton} btn btn-primary`} onClick={handleOnClick}>{text}</button>
  );
}
export default SubmitButton;