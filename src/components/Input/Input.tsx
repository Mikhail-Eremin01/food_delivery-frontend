import styles from "./Input.module.scss";

interface IInput {
    placeholder: string;
}

const Input = function ({ placeholder }:IInput) {
    return (
        <input placeholder={placeholder} type="text" className={styles.input} />
    );
};

export { Input };
