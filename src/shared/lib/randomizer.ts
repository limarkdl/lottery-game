/**
 * Генерирует массив случайных чисел в заданном диапазоне. Позволяет создавать уникальные или неуникальные числа.
 *
 * @param max Верхний предел для генерации случайных чисел (включительно).
 * @param count Количество случайных чисел для генерации.
 * @param unique Опциональный параметр, определяющий, должны ли числа быть уникальными. По дефолту уникальные.
 *
 * @returns Массив случайных чисел, возможно с повторениями, если параметр unique установлен в false.
 */
function generateRandomNumbers(max: number, count: number, unique: boolean = true): number[] {
    if (unique) {
        const numbers = new Set<number>();

        if (count > max + 1) {
            throw new Error("More unique nums than range");
        }

        while (numbers.size < count) {
            const randomNumber = Math.floor(Math.random() * (max + 1));
            numbers.add(randomNumber);
        }

        return Array.from(numbers);
    } else {
        const numbers = [];

        for (let i = 0; i < count; i++) {
            const randomNumber = Math.floor(Math.random() * (max + 1));
            numbers.push(randomNumber);
        }

        return numbers;
    }
}


export default generateRandomNumbers;