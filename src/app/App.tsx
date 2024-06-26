import {ReactNode, useState} from 'react';
import '@/app/styles/App.css';
import Game8From19TicketCard from "@/features/Game8From19";
import Button, {ButtonSize} from "@/shared/ui/Button/Button.tsx";

/** Наше приложение.
 * */
function App() {
    const [addedTickets, setAddedTickets] = useState<ReactNode[]>([<Game8From19TicketCard key={0} />]);

    const addTicketCard = () => {
        setAddedTickets([...addedTickets, <Game8From19TicketCard key={addedTickets.length} />]);

      };


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