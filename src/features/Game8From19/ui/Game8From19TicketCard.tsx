import { useState } from 'react';
import NumberField from "@/shared/ui/NumberField";
import TicketCard from "@/entities/Game/ui/TicketCard";

import MagicWand from "@/shared/ui/MagicWand/MagicWand.tsx";

const Game8From19TicketCard = () => {
    const [selectedNumbersField1, setSelectedNumbersField1] = useState<number[]>([]);
    const [selectedNumbersField2, setSelectedNumbersField2] = useState<number[]>([]);

    const handleSelectionChangeField1 = (selectedNumbers: number[]) => {
        setSelectedNumbersField1(selectedNumbers);
    };

    const handleSelectionChangeField2 = (selectedNumbers: number[]) => {
        setSelectedNumbersField2(selectedNumbers);
    };

    const onSubmitGame8From19 = () => {
            const finalNumbersField1 = selectedNumbersField1.map(index => index + 1);
            const finalNumbersField2 = selectedNumbersField2.map(index => index + 1);
            console.log('Submitted numbers:', finalNumbersField1, ' + ', finalNumbersField2);
    };

    const MagicWandFunctionality = () => {
        // TODO: 'Implement functionality and call randomizer'
        console.log("Randomized")
    }

    return (
        <TicketCard
            ticketNum={1}
            onSubmit={onSubmitGame8From19}
            cornerElement={<MagicWand callback={MagicWandFunctionality}/>}
        >
            <NumberField
                fieldNum={1}
                description={"Выберите 8 чисел."}
                numOfNums={19}
                maxToSelect={8}
                selectedCells={selectedNumbersField1}
                onSelectionChange={handleSelectionChangeField1}
            />
            <NumberField
                fieldNum={2}
                description={"Выберите 1 число."}
                numOfNums={2}
                maxToSelect={1}
                selectedCells={selectedNumbersField2}
                onSelectionChange={handleSelectionChangeField2}
            />
        </TicketCard>
    );
};

export default Game8From19TicketCard;
