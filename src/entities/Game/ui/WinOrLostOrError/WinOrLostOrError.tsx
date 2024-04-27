import styles from './WinOrLostOrError.module.css';
import Button from "@/shared/ui/Button/Button.tsx";


/**
 * Пропсы компонента WinOrLostOrError.
 * @property {'won' | 'lost' | 'error'} result - Результат: выигрыш, проигрыш или ошибка.
 * @property {Function} [callback] - Функция обратного вызова.
 *
 * @interface
 */
interface ResultWinOrLostProps {
    result: 'won' | 'lost' | 'error';
    callback?: () => void;
}


/**
 * Компонент для отображения результата в карточке: выигрыш, проигрыш или ошибка.
 * @param {ResultWinOrLostProps} props - Пропсы компонента WinOrLostOrError.
 */
const WinOrLostOrError = (props: ResultWinOrLostProps) => {
    const {result, callback} = props;

    const getMessage = () => {
        switch (result) {
            case 'won':
                return <p>Ого, вы выиграли! Поздравляем!</p>;
            case 'lost':
                return <p>Упс, в этот раз не повезло...</p>;
            case 'error':
                return <div className={styles.message_container}>
                    <p>Произошла ошибка. Пожалуйста, попробуйте еще раз.</p>
                    <Button onClick={callback}>Хорошо</Button>
                </div>;
            default:
                return <p>Неизвестный результат: {result}</p>;
        }
    };

    return (
        <div className={styles.Container}>
            {getMessage()}
        </div>
    );
};

export default WinOrLostOrError;