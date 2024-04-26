import styles from './TicketCard.module.css';
import Button from "@/shared/ui/Button/Button.tsx";
import {ReactNode} from "react";

interface TicketCardProps {
    ticketNum: number;
    children: ReactNode;
}


// TODO: 'Refactor and move logic higher. Since we need to have fully customizable fields and tickets.'
const TicketCard = (props: TicketCardProps) => {
    const {ticketNum, children} = props;

    return (
        <div className={styles.Container}>
            Билет {ticketNum}
            {children}

            <Button>Показать результат</Button>
        </div>
    );
};

export default TicketCard;