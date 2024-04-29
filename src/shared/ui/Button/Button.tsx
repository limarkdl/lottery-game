import styles from './Button.module.css';
import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

enum ButtonSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

enum ButtonTheme {
    clear= 'clear'
}

/**
 * Пропсы кнопки.
 *
 * @property {string} [className] - Класс кнопки.
 * @property {string} [backgroundColor] - Цвет фона кнопки.
 * @property {string} [color] - Цвет текста кнопки.
 * @property {ButtonSize} [size] - Размер кнопки. [S - маленький, M - средний, L - большой, XL - очень большой]
 * @property {boolean} [square] - Флаг квадратной формы кнопки.
 * @property {boolean} [disabled] - Флаг, указывающий, отключена ли кнопка.
 * @property {ButtonTheme} [theme] - Тема кнопки. [clear - прозрачная]
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    backgroundColor?: string;
    color?: string;
    size?: ButtonSize;
    square?: boolean;
    disabled?: boolean;
    theme?: ButtonTheme;
}

/**
 * Компонент кастомной кнопки.
 *
 * @param {ButtonProps} props - Свойства кнопки.
 */
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
export {ButtonSize, ButtonTheme}