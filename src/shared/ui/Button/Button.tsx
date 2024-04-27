import styles from './Button.module.css';
import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

export enum ButtonSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

export enum ButtonTheme {
    clear= 'clear'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    backgroundColor?: string;
    color?: string;
    size?: ButtonSize;
    square?: boolean;
    disabled?: boolean;
    theme?: ButtonTheme;
}

const Button = (props: ButtonProps) => {

    const {
        children,
        className,
        backgroundColor,
        color,
        size,
        square,
        disabled,
        theme
    } = props;

    const style = {
        backgroundColor,
        color,
    };

    return (
        <button
            {...props}
            type="button"
            disabled={disabled}
            className={
                classNames(
                    styles.btn,
                    className,
                    {[styles[size!]]: size},
                    square ? styles.square : '',
                    {[styles[theme!]]: ButtonTheme}
                    )}
            style={style}
        >
            {children}
        </button>
    );
};

export default Button;