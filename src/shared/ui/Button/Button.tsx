import styles from './Button.module.css';
import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

enum ButtonSize {
    S = 'size-s',
    M = 'size-m',
    L = 'size-l',
    XL = 'size-xl',
}


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    backgroundColor?: string;
    color?: string;
    size?: ButtonSize;
    square?: boolean;
}

const Button = (props: ButtonProps) => {

    const {
        children,
        className,
        backgroundColor,
        color,
        size,
        square
    } = props;

    const style = {
        backgroundColor,
        color,
    };

    return (
        <button
            {...props}
            type="button"
            className={classNames(styles.btn, className, {[styles[size!]]: size}, square ? styles.square : '')}
            style={style}
        >
            {children}
        </button>
    );
};

export default Button;