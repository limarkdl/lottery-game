import {ReactNode, useState} from 'react';
import '@/app/styles/App.css';
import Game8From19TicketCard from "@/features/Game8From19/ui/Game8From19TicketCard.tsx";
import Button, {ButtonSize} from "@/shared/ui/Button/Button.tsx";

function App() {
    const [addedTickets, setAddedTickets] = useState<ReactNode[]>([<Game8From19TicketCard key={1} />]);

    const addTicketCard = () => {
        setAddedTickets([...addedTickets, <Game8From19TicketCard key={addedTickets.length} />]);

      };

    console.log(import.meta.env.VITE_API_URL);

      return (
          <div className='app'>
              {addedTickets.map((card) => card)}
                <Button

                    size={ButtonSize.XL}
                    square
                    onClick={addTicketCard}
                    backgroundColor='#FFD205'
                >+</Button>
          </div>
      );
}

export default App;