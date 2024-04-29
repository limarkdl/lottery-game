/**
 * Проверяет, сколько совпадений из userNumber существует в winningNumbers.
 *
 * @param userNumbers[] Массив чисел пользователя.
 * @param winningNumbers[] Массив выигрышной комбинации.
 *
 * @returns Количество чисел, которые пользователь имеет общими с выигрышной комбинацией.
 */
export const countMatches = (userNumbers: number[], winningNumbers: number[]): number => {
    return userNumbers.filter(number => winningNumbers.includes(number)).length;
};