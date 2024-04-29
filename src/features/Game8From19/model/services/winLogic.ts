import generateRandomNumbers from "@/shared/lib/randomizer.ts";
import {countMatches} from "@/shared/lib/countMatches.ts";
import {Game8from19TicketDTO} from "@/features/Game8From19/model/types/Game8From19.ts";

/**
 * Функция для отметки билета как выигрышного, если он такой.
 * @param {Game8from19TicketDTO} userTicket - Билет пользователя игры 8 из 19, облегченный.
 * @returns {Game8from19TicketDTO} Билет пользователя с отметкой о выигрыше (доп поле в объекте).
 */
export const markTicketIfWon = (userTicket: Game8from19TicketDTO): Game8from19TicketDTO => {
    const winningTicket = generateWinningNumbers();
    const isWinner = checkIfTicketWon(userTicket, winningTicket);

    return {
        ...userTicket,
        isTicketWon: isWinner
    };
};

/**
 * Функция для генерации выигрышных чисел для игры 8 из 19.
 * @returns {Game8from19TicketDTO} Выигрышные числа для игры 8 из 19.
 */
export const generateWinningNumbers = (): Game8from19TicketDTO => {
    return {
        selectedNumbers: {
            firstField: generateRandomNumbers(18, 8, true).map(a => a + 1),
            secondField: generateRandomNumbers(1, 1, true).map(a => a + 1)
        }
    };
};

/**
 * Функция для проверки, выиграл ли пользовательный билет в игре 8 из 19.
 * @param {Game8from19TicketDTO} userTicket - Пользовательский билет.
 * @param {Game8from19TicketDTO} winningTicket - Выигрышный билет.
 * @returns {boolean} Результат проверки: true, если пользователь выиграл, false в противном случае.
 */
const checkIfTicketWon = (userTicket: Game8from19TicketDTO, winningTicket: Game8from19TicketDTO): boolean => {
    const matchesFirstField = countMatches(
        userTicket.selectedNumbers.firstField, winningTicket.selectedNumbers.firstField
    );
    const matchesSecondField = countMatches(
        userTicket.selectedNumbers.secondField, winningTicket.selectedNumbers.secondField
    );

    const winningCondition1 = matchesFirstField >= 4;

    const winningCondition2 = matchesFirstField >= 3 && matchesSecondField === 1;

    return winningCondition1 || winningCondition2;
};