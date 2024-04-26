// TODO: 'Configure type of Promise that is expected from our server (if even expected)'


// eslint-disable-next-line
export const submitTicketToServer = async (ticketData: object, retryCount: number = 3): Promise<any> => {
    try {
        const response = await fetch('/finch-test', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ticketData),
        });
        const data = await response.json();
        if (!response.ok) throw new Error('Network response was not ok.');
        if (response.status !== 200) {
            if (retryCount === 0) throw new Error('Max retry attempts reached.');
            console.log('Attempt to retry submission... Remaining attempts:', retryCount);
            await new Promise(resolve => setTimeout(resolve, 2000));
            return submitTicketToServer(ticketData, retryCount - 1);
        }
        return data;
    } catch (error) {
        console.error('Error with sending ticket: ', error);
        throw error;
    }
};