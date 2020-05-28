import { Action } from "redux";

const ls: string | null = window.localStorage.getItem('transactions');
const balance: string | null = window.localStorage.getItem('balance');
const income: string | null = window.localStorage.getItem('income');
const spendings: string | null = window.localStorage.getItem('spendings');

if (!ls) localStorage.setItem("transactions", String('[]'));
if (!income) localStorage.setItem("income", String('0'));
if (!spendings) localStorage.setItem("spendings", String('0'));
if (!balance) localStorage.setItem("balance", String('35000'));

const localdata = () => {
    return JSON.parse(localStorage.getItem('transactions') ?? '[]')
}

const localBalance = () => {
    return Number(localStorage.getItem('balance')) ?? 35000
}

const localIncome = () => {
    return Number(localStorage.getItem('income')) ?? 0
}

const localSpendings = () => {
    return Number(localStorage.getItem('spendings')) ?? 0
}

const deleteTransaction = (_id: any) => {
    let trnsc = JSON.parse(localStorage.getItem('transactions') ?? '');
    trnsc.forEach((element: any, indx: any) => {
        let el = JSON.parse(element);
        console.log('el = ', el);
        if (el.id == String(_id)) {
            trnsc.splice(indx, 1);
            return;
        }
    });
    localStorage.setItem('transactions', JSON.stringify(trnsc));
    return trnsc;
}

const initialState = {
    transactionData: localdata(),
    totalStorageItems: ls,
    localStorageData: {},
    renderPrompt: false,
    totalKeys: 0,
    balance: localBalance(),
    income: localIncome(),
    spendings: localSpendings()
};

interface CustomAction extends Action {
    payload?: any
}

const mainReducer = (state = initialState, action: CustomAction) => {
    switch (action.type) {
        case 'ADD_INCOME':
            localStorage.setItem('transactions', JSON.stringify([[action.payload], ...state.transactionData]));
            var amt: any = JSON.parse(action.payload);
            return {
                ...state,
                transactionData: [action.payload, ...state.transactionData],
                balance: amt.type == "income" ? state.balance + Number(amt.amount) : state.balance - Number(amt.amount),
                income: amt.type == "income" ? state.income + Number(amt.amount) : state.income,
                spendings: amt.type == "spending" ? state.spendings + Number(amt.amount) : state.spendings,
                renderPrompt: false
            };
        case 'DELETE_TRANSACTION':
            var amt: any = JSON.parse(action.payload).amount;
            return {
                ...state,
                transactionData: deleteTransaction(action.payload),
            };
        case 'ADD_EXPENSE':
            return {
                ...state
            };
        default:
            return state;
    }
};

export default mainReducer;
