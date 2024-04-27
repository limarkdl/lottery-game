/**
 * Отправляет полученные данные билета с помощью fetch(), совершив указанное количество попыток.
 * Эндпоинт берется из переменных окружения.
 *
 * @param ticketData Объект с данными которые будут отправлены.
 * @param retryCount Количество попыток с интервалом 2 секунды.
 * @returns Возвращает обработанный json. В нашем случае ничего.
 */

// TODO: 'Take endpoint from env variables'
// eslint-disable-next-line
export const submitTicketToServer = async (ticketData: object, retryCount: number = 3): Promise<any> => {
    const API_URL = import.meta.env.VITE_API_URL || '/finch-test';

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ticketData),
        });

        if (response.status !== 200 && response.status !== 201 ) {
            if (retryCount === 0) throw new Error('Max retry attempts reached.');
            console.log('Attempt to retry submission... Remaining attempts:', retryCount);
            await new Promise(resolve => setTimeout(resolve, 2000));
            return submitTicketToServer(ticketData, retryCount - 1);
        }
        return response.json();
    } catch (error) {
        console.error('Error with sending ticket: ', error);
        throw error;
    }
};