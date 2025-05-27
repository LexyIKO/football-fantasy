export interface userType {
    id: number,
    login: string,
    avatar: string,
    rating?: number
}

export interface userTypeForTournament extends userType {
    needToPick: boolean,
    balance: number,
    isLobbyHost?: boolean
}