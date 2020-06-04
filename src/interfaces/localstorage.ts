export interface ILocalStorage {
    ls?: string | null;
    balance?: string | null;
    income?: string | null;
    spendings?: string | null;
    addIncome?: Function
}

export const _localStorageData: ILocalStorage = {
    ls: window.localStorage.getItem('transactions') ?? null,
    balance: window.localStorage.getItem('balance') ?? '0',
    income: window.localStorage.getItem('income') ?? '0',
    spendings: window.localStorage.getItem('spendings') ?? '0',
}