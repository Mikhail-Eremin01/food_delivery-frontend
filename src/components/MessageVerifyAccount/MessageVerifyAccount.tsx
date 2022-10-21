import React from 'react'
import styles from './MessageVerifyAccount.module.scss';

interface IMessageVerifyAccount {
    link: string
}

const MessageVerifyAccount = ({link}: IMessageVerifyAccount) => {
  return (
    <div className={styles.messageVerifyAcc}>
        <p>Please, verify your account by email <span>{link}</span></p>
    </div>
  )
}

export {MessageVerifyAccount}