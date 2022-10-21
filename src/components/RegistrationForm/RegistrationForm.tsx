import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hook';
import { fetchRegistration } from '../../store/authorizationSlice';
import styles from './RegistrationForm.module.scss';

function RegistrationForm() {
  const dispatch = useAppDispatch();
  const loginFormPosition = useAppSelector(state => state.authFormsPosition.stateAuthFormsPosition);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  
  return (
    <div className={loginFormPosition ? styles.authorization_registration : styles.authorization_registration_inActive}>
      <div className={styles.authorization_registration_container}>
        <label className={styles.authorization_registration__label} htmlFor="">Email</label>
        <input 
          className={styles.authorization_registration__input}
          onChange={e => {setEmail(e.target.value)}}
          value = {email}
          type = 'text'
          placeholder = 'Email'
        />
      </div>
      <div className={styles.authorization_registration_container}>
        <label className={styles.authorization_registration__label} htmlFor="">Password</label>
        <input 
          className={styles.authorization_registration__input}
          onChange={e => {setPassword(e.target.value)}}
          value = {password}
          type = 'password'
          placeholder = 'Password'
        />
      </div>
      <div className={styles.authorization_registration_container}>
        <label className={styles.authorization_registration__label} htmlFor="">Confirm password</label>
        <input 
          onChange={e => {setConfirmPassword(e.target.value)}}
          className={styles.authorization_registration__input}
          value = {confirmPassword}
          type = 'password'
          placeholder = 'Confirm your password'
        />
      </div>
      <button
        className={styles.authorization_registration__button}
        onClick={() => dispatch(fetchRegistration({email, password}))}
      >
        Registration
      </button>
    </div>
  )
}

export {RegistrationForm}