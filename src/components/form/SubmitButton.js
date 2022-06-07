import styles from './modules/SubmitButton.module.css';
function SubmitButton({text, handleOnClick, value}){ 
  return (
    <button type="submit" className={`${styles.submitButton} btn`} onClick={handleOnClick}>{text}</button>
  );
}
export default SubmitButton;
