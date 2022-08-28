import React from "react";
import { Title } from "../Title/Title";
import { Input } from "../Input/Input";
import styles from './Form_getUsersData.module.scss';

const FormGetUsersData = function() {

    return(
        <div className={styles.Form_getUsersData}>
            <div className={styles.field_UsersInfo}>
                <Title name = {'Name'}/>
                <Input />
            </div>
            <div className={styles.field_UsersInfo}>
                <Title name = {'Email'}/>
                <Input />
            </div>
            <div className={styles.field_UsersInfo}>
                <Title name = {'Phone'}/>
                <Input />
            </div>
            <div className={styles.field_UsersInfo}>
                <Title name = {'Address'}/>
                <Input />
            </div>
        </div>
    )
}

export {FormGetUsersData}