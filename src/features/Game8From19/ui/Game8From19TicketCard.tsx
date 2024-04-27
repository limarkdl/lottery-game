import {useEffect, useRef, useState} from 'react';
import NumberField from "@/entities/Game/ui/NumberField";
import TicketCard from "@/entities/Game/ui/TicketCard";

import MagicWand from "@/entities/Game/ui/MagicWand/MagicWand.tsx";
import {processTicket} from "@/features/Game8From19/model/services/processTicket.ts";
import {Game8from19Ticket} from "@/features/Game8From19";
import WinOrLostOrError from "@/entities/Game/ui/WinOrLostOrError/WinOrLostOrError.tsx";
import Loader from "@/shared/ui/Loader/Loader.tsx";
import generateRandomNumbers from "@/shared/lib/randomizer.ts";

const Game8From19TicketCard = () => {


    const [selectedNumbersField1, setSelectedNumbersField1] = useState<number[]>([]);
    const [selectedNumbersField2, setSelectedNumbersField2] = useState<number[]>([]);
    const [isReadyToSubmit, setIsReadyToSubmit] = useState<boolean>(false);
    const [ticketStatus, setTicketStatus] = useState<'active' | 'pending' | 'completed' | 'error'>('active');
    const NewTicket = new Game8from19Ticket(`${Date.now()}`, { firstField: [], secondField: [] })

    const [ticketResult, setTicketResult] = useState<null | 'won' | 'lost' | 'error'>(null);

    const ticketRef = useRef(NewTicket);

    const updateReadyToSubmit = (selectedNumbersField1: number[], selectedNumbersField2: number[]) => {
        if (selectedNumbersField1.length === 8 && selectedNumbersField2.length === 1) {
            setIsReadyToSubmit(true);
        } else {
            setIsReadyToSubmit(false);
        }
    };

    const handleSelectionChangeField1 = (selectedNumbers: number[]) => {
        setSelectedNumbersField1(selectedNumbers);
        updateReadyToSubmit(selectedNumbers, selectedNumbersField2);
    };

    const handleSelectionChangeField2 = (selectedNumbers: number[]) => {
        setSelectedNumbersField2(selectedNumbers);
        updateReadyToSubmit(selectedNumbersField1, selectedNumbers);
    };

    const onSubmitGame8From19 = async () => {
        const finalNumbersField1 = selectedNumbersField1.map(index => index + 1);
        const finalNumbersField2 = selectedNumbersField2.map(index => index + 1);
        ticketRef.current.selectedNumbers.firstField = finalNumbersField1;
        ticketRef.current.selectedNumbers.secondField = finalNumbersField2;

        setTicketStatus('pending')
            await processTicket(ticketRef.current, setTicketResult).then(() => {
                setTicketStatus('completed');
            }).catch(() => {setTicketStatus('error');}
            );


    };

    const MagicWandFunctionality = () => {
        const field1Generated = generateRandomNumbers(18, 8);
        const field2Generated = generateRandomNumbers(1, 1)

        setSelectedNumbersField1(field1Generated);
        setSelectedNumbersField2(field2Generated);

        setIsReadyToSubmit(true);
    };

    const dropTicketStatus = () => {
        setTicketStatus('active');
    }

    const getBodyContentBasedOnStatus = () => {
        switch (ticketStatus) {
            case "active":
                return (
                    <>
                        <NumberField
                            fieldNum={1}
                            description="Выберите 8 чисел из 19."
                            numOfNums={19}
                            maxToSelect={8}
                            selectedCells={selectedNumbersField1}
                            onSelectionChange={handleSelectionChangeField1}
                        />
                        <NumberField
                            fieldNum={2}
                            description="Выберите 1 число из 2."
                            numOfNums={2}
                            maxToSelect={1}
                            selectedCells={selectedNumbersField2}
                            onSelectionChange={handleSelectionChangeField2}
                        />
                    </>
                )
            case "pending":
                return (<div style={{margin: '0 auto 0 auto'}}><Loader/></div>);
            case "completed":
                return (ticketResult === 'won' ? (
                    <WinOrLostOrError result='won' />
                ) : (
                    <WinOrLostOrError result='lost' />
                ))
            case "error":
                return <WinOrLostOrError result='error' callback={dropTicketStatus} />
    }}

    return (
        <TicketCard
            ticketNum={ticketRef.current.ticketId}
            onSubmit={onSubmitGame8From19}
            cornerElement={ticketStatus === 'active' ? <MagicWand callback={MagicWandFunctionality}/> : <></>}
            readyToSubmit={isReadyToSubmit}
            buttonToSubmitShown={ticketStatus === 'active'}
        >
            {getBodyContentBasedOnStatus()}
        </TicketCard>

    );
};





export default Game8From19TicketCard;
