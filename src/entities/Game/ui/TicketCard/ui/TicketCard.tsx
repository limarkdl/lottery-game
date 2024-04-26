import styles from './TicketCard.module.css';
import Button from "@/shared/ui/Button/Button.tsx";
import {ReactNode} from "react";

interface TicketCardProps {
    ticketNum: number;
    children: ReactNode[];
    onSubmit: () => void;

    cornerElement?: ReactNode;
}


const TicketCard = (props: TicketCardProps) => {
    const {
        ticketNum,
        children,
        onSubmit,
        cornerElement
    } = props;

    return (
        <div className={styles.Container}>
            <div className={styles.HeaderContainer}>Билет {ticketNum} {cornerElement}</div>
            {children}
            <Button onClick={onSubmit}>Показать результат</Button>
        </div>
    );
};

export default TicketCard;