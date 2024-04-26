import '@/app/styles/App.css'
import TicketCard from "@/widgets/TicketCard";
import NumberField from "@/widgets/NumberField";

function App() {

  return (
    <div className='app'>
        <TicketCard ticketNum={1}>
            <NumberField
                fieldNum={1}
                description={"Выберите 8 чисел."}
                numOfNums={19}
                maxToSelect={8} />
            <NumberField
                fieldNum={2}
                description={"Выберите 1 число."}
                numOfNums={2}
                maxToSelect={1} />

        </TicketCard>
    </div>
  )
}

export default App
