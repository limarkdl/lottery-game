import {Game8from19TicketDTO} from "@/features/Game8From19/model/types/Game8From19.ts";
import {SubmitGame8From19Ticket} from "@/features/Game8From19/model/services/submitGame8From19Ticket.ts";
import {markTicketIfWon} from "@/features/Game8From19/model/services/winLogic.ts";


/**
 * Отвечает за процессинг билета. Валидирует, отправляет на проверку на победу, передает на отправку на сервер.
 * При успешной отправке и полученном статусе 200 мы с уверенностью можем верить проверенному локально выигрышу.
 *
 * @param ticket Объект с данными которые будут отправлены.
 * @param returnResultCallBack Колбэк передаваемый для получения статуса выигрыша.
 *
 * @returns Возвращает Promise<void> который никак не обрабатывается.
 */

async function processTicket(ticket: Game8from19TicketDTO, returnResultCallBack:
    (result: 'won' | 'lost' | 'error') => void)  {

    if (!validateTicket(ticket)) {
        console.error("Invalid ticket data.");
    }

    const markedTicked = markTicketIfWon(ticket);

    try {
        await SubmitGame8From19Ticket(markedTicked).then(() => {
            if (markedTicked.isTicketWon) {
                returnResultCallBack('won')
            } else {
                returnResultCallBack('lost')
            }
        })


    } catch (error) {
        throw new Error('Failed to submit ticket');
    }
}

/**
 * Функция для валидации билета игры 8 из 19.
 * @param {Game8from19TicketDTO} ticket - Билет игры 8 из 19 (облегченный) для валидации.
 * @returns {boolean} Результат валидации: true, если билет валиден, false в обратном.
 */
const validateTicket = (ticket: Game8from19TicketDTO): boolean => {
    return ticket.selectedNumbers.firstField.length === 8 && ticket.selectedNumbers.secondField.length === 1;
};

export default processTicket;
