import styles from './TicketCard.module.css';
import Button, {ButtonSize} from "@/shared/ui/Button/Button.tsx";
import {ReactNode} from "react";

/**
 * Пропсы компонента TicketCard.
 *
 * @property {string} ticketNum - Номер билета.
 * @property {ReactNode} children - Дочерние элементы карточки билета.
 * @property {Function} onSubmit - Функция обработки события отправки билета.
 * @property {boolean} readyToSubmit - Флаг готовности к отправке билета.
 * @property {boolean} [buttonToSubmitShown] - Флаг отображения кнопки для отправки билета.
 * @property {ReactNode} [cornerElement] - Дополнительный элемент угла карточки билета.
 */
interface TicketCardProps {
    ticketNum: string;
    children: ReactNode;
    onSubmit: () => void;
    readyToSubmit: boolean;
    buttonToSubmitShown?: boolean;
    cornerElement?: ReactNode;
}


/**
 * Компонент карточки для игрового билета.
 * @param {TicketCardProps} props - Пропсы компонента TicketCard.
 */
const TicketCard = (props: TicketCardProps) => {
    const {
        ticketNum,
        children,
        onSubmit,
        cornerElement,
        readyToSubmit,
        buttonToSubmitShown
    } = props;

    return (
        <div className={styles.Container}>
            <div className={styles.HeaderContainer}>Билет {ticketNum} {cornerElement}</div>
            <div className={styles.Content}>
            {children}
            {
                buttonToSubmitShown && (<Button
                    size={ButtonSize.XL}
                    onClick={onSubmit}
                    className={styles.SubmitButton}
                    disabled={!readyToSubmit}
                >
                    Показать результат
                </Button>)
            }
            </div>
        </div>
    );
};

export default TicketCard;