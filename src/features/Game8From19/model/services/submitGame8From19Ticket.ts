import {submitTicketToServer} from "@/shared/services/ticketService.ts";
import {Game8from19TicketDTO} from "@/features/Game8From19/model/types/Game8From19.ts";

export const SubmitGame8From19Ticket = async (ticket: Game8from19TicketDTO) => {
    return await submitTicketToServer(ticket, 2);
}