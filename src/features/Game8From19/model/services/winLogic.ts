import generateRandomNumbers from "@/shared/lib/randomizer.ts";
import {countMatches} from "@/shared/lib/countMatches.ts";
import {Game8from19TicketDTO} from "@/features/Game8From19/model/types/Game8From19.ts";

export const markTicketIfWon = (userTicket: Game8from19TicketDTO): Game8from19TicketDTO => {
    const winningTicket = generateWinningNumbers();
    const isWinner = checkIfTicketWon(userTicket, winningTicket);

    return {
        ...userTicket,
        isTicketWon: isWinner
    };
};

export const generateWinningNumbers = (): Game8from19TicketDTO => {

    return {
        selectedNumbers: {
            firstField: generateRandomNumbers(18, 8, true).map(a => a + 1),
            secondField: generateRandomNumbers(1, 1, true).map(a => a + 1)
        }
    };
};


const checkIfTicketWon = (userTicket: Game8from19TicketDTO, winningTicket: Game8from19TicketDTO): boolean => {
    const matchesFirstField = countMatches(userTicket.selectedNumbers.firstField, winningTicket.selectedNumbers.firstField);
    const matchesSecondField = countMatches(userTicket.selectedNumbers.secondField, winningTicket.selectedNumbers.secondField);

    const conditionOne = matchesFirstField >= 4;

    const conditionTwo = matchesFirstField >= 3 && matchesSecondField == 1;

    return conditionOne || conditionTwo;
};