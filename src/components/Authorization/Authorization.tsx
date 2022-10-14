import React from 'react'
import { LoginForm } from '../LoginForm/LoginForm'
import { RegistrationForm } from '../RegistrationForm/RegistrationForm'
import { AuthorizationNavMenu } from '../AuthorizationNavMenu/AuthorizationNavMenu';
import styles from './Authorization.module.scss';

function Authorization() {
  return (
    <div className={styles.authorization}>
      <div className={styles.authorization_frame}>
        <AuthorizationNavMenu />
        <div className={styles.authorization_mainContainer}>
          <LoginForm />
          <RegistrationForm />
        </div>
      </div>
    </div>
    
  )
}

export {Authorization}