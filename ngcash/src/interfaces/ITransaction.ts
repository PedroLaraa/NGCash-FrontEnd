interface IAccount {
    id: number
    balance: string
}

export interface ITransaction {

    creditedAccountId: IAccount
    debitedAccountId: IAccount
    created_at: string
    id: number
    value: number

}