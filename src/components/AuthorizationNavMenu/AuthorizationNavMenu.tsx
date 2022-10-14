import styles from './AuthorizationNavMenu.module.scss';
import {useAppDispatch, useAppSelector} from '../../hook';
import {changeAuthFormsPosition} from '../../store/changeAuthForms';

function AuthorizationNavMenu() {
  const dispatch = useAppDispatch();
  const formsposition = useAppSelector(state => state.authFormsPosition.stateAuthFormsPosition)

  const changeBtns = () => {
    dispatch(changeAuthFormsPosition(!formsposition));
  }
  return (
    <div className={styles.authorization_nav}>
      <ul className={styles.authorization_nav_links}>
        <li 
          onClick={changeBtns}
          className={formsposition ? 
            styles.authorization_nav__link_active : 
            styles.authorization_nav__link
          }
        >
          Login
        </li>
        <li
          onClick={changeBtns}
          className={!formsposition ? 
            styles.authorization_nav__link_active : 
            styles.authorization_nav__link
          }
        >
          Registration
        </li>
      </ul>
    </div>
  )
}

export {AuthorizationNavMenu}