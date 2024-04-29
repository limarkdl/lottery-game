import {submitTicketToServer} from "@/shared/services/ticketService.ts";
import { Game8from19TicketDTO} from "@/features/Game8From19/model/types/Game8From19.ts";

/**
 * Функция-посредник отправки билета игры 8 из 19 на сервер.
 * @async
 * @param {Game8from19TicketDTO} ticket - Билет пользователя.
 *
 * @return Promise<any> Возвращает промис (тип не определен на будущее).
 */
export const SubmitGame8From19Ticket = async (ticket: Game8from19TicketDTO) => {
    // Временное решение, никогда так не делать. Из-за наличия свойства ticketId которое бы пригодилось
    // в реальном проекте - в конкретном случае возникает конфликт типов при удалении ненужного поля.

    // eslint-disable-next-line
    delete (ticket as any).ticketId;

    return await submitTicketToServer(ticket, 2);
}