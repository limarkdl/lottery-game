import {Game8from19Ticket} from "@/features/Game8From19/model/model.ts";

export type Game8from19TicketResult = Game8from19Ticket & {
    isTicketWon: boolean;
};

// TODO: 'Implement logic, remove console.log, remove hardcode'
export const checkIfTicketWon = (ticketData: Game8from19Ticket): Game8from19TicketResult => {
    const hasWinningNumber = true;
    console.log({
        ...ticketData,
        isTicketWon: hasWinningNumber
    });
    return {
        ...ticketData,
        isTicketWon: hasWinningNumber
    };
}