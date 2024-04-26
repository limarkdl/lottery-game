
export interface IGameTicket {
    gameId: string;
    validate(): boolean;
}

export interface IGameState {
    tickets: IGameTicket[];
    gameStatus: 'pending' | 'active' | 'completed';
    updateState(): void;
}