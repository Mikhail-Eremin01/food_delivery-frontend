import { Input } from "../Input/Input";
import styles from './Form_getUsersData.module.scss';

const FormGetUsersData = function() {

    return(
        <form className={styles.Form_getUsersData}>
            <div className={styles.field_UsersInfo}>
                <label>Name <br /><Input placeholder = {'Name'}/></label>
            </div>
            <div className={styles.field_UsersInfo}>
                <label>Email <br /><Input placeholder = {'Email'}/></label>
            </div>
            <div className={styles.field_UsersInfo}>
                <label>Phone <br /><Input placeholder = {'Phone'}/></label>
            </div>
            <div className={styles.field_UsersInfo}>
                <label>Address <br /><Input placeholder = {'Address'}/></label>
            </div>
        </form>
    )
}

export {FormGetUsersData}