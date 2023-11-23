// import Button from 'react-bootstrap/Button';
import classes from './HeaderButton.module.css';

function HeaderButton() {
  return (
    <>
      <button type="button" className={classes.button}>Log out</button>
    </>
  );
}

export default HeaderButton;