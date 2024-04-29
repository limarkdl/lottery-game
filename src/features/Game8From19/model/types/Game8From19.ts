import {IGameTicket} from "@/entities/Game";


/**
 * Класс билета игры "8 из 19".
 *
 */
export class Game8from19Ticket implements IGameTicket {
    ticketId: string;

    /**
     * Выбранные номера для первого и второго поля.
     *
     * @type {object}
     *
     * @property {number[]} firstField - Массив выбранных номеров в первом поле.
     * @property {number[]} secondField - Массив выбранных номеров во втором поле.
     */
    selectedNumbers: {
        firstField: number[],
        secondField: number[]
    };

    constructor(ticketId: string, selectedNumbers: { firstField: number[]; secondField: number[] }) {
        this.ticketId = ticketId;
        this.selectedNumbers = selectedNumbers;
    }
}


/**
 * Тип для передачи данных билета 8 из 19.
 *
 * @property {{firstField: number[], secondField: number[]}} selectedNumbers - Выбранные номера в билете.
 * @property {boolean} [isTicketWon] - Опциональное свойство c записью о выйгрыше или о проигрыше.
 */
export type Game8from19TicketDTO = {
    selectedNumbers: {
        firstField: number[];
        secondField: number[];
    };
    isTicketWon?: boolean;
};