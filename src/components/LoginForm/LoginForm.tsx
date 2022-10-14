import {useState} from 'react';
import{ useAppDispatch } from '../../hook';
import { fetchLogin } from '../../store/authorizationSlice';
import styles from './LoginForm.module.scss';
import { useAppSelector } from '../../hook';

function LoginForm() {
  const dispatch = useAppDispatch();
  const loginFormPosition = useAppSelector(state => state.authFormsPosition.stateAuthFormsPosition);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <div className={loginFormPosition ? styles.authorization_login : styles.authorization_login_inActive}>
      <div className={styles.authorization_login_container}>
        <label className={styles.authorization_login__label} htmlFor="">Email</label>
        <input 
          className={styles.authorization_login__input}
          onChange={e => {setEmail(e.target.value)}}
          value = {email}
          type = 'text'
          placeholder = 'Email'
        />
      </div>
      <div className={styles.authorization_login_container}>
        <label className={styles.authorization_login__label} htmlFor="">Password</label>
        <input 
          className={styles.authorization_login__input}
          onChange={e => {setPassword(e.target.value)}}
          value = {password}
          type = 'password'
          placeholder = 'Password'
        />
      </div>
      <button
        className={styles.authorization_login__button}
        onClick={() => dispatch(fetchLogin({email, password}))}
      >
        Login
      </button>
    </div>
  )
}

export {LoginForm}