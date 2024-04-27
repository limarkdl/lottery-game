import styles from './TicketCard.module.css';
import Button, {ButtonSize} from "@/shared/ui/Button/Button.tsx";
import {ReactNode} from "react";

interface TicketCardProps {
    ticketNum: string;
    children: ReactNode;
    onSubmit: () => void;
    readyToSubmit: boolean;
    buttonToSubmitShown?: boolean;

    cornerElement?: ReactNode;
}


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