import {IGameTicket} from "@/entities/Game";

export class Game8from19Ticket implements IGameTicket {
    ticketId: string;

    selectedNumbers: {
        firstField: number[],
        secondField: number[]
    };

    constructor(ticketId: string, selectedNumbers: { firstField: number[]; secondField: number[] }) {
        this.ticketId = ticketId;
        this.selectedNumbers = selectedNumbers;
    }


}

export type Game8from19TicketDTO = {
    selectedNumbers: {
        firstField: number[];
        secondField: number[];
    };
    isTicketWon?: boolean;
};