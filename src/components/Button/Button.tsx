import styles from "./Button.module.scss";

interface IButton {
    text: string
}

const Button = function ({ text }:IButton) {
    return <input className={styles.submitButton} type="button" value={text} />;
};

export { Button };
