export const useLocalStorage: any = {
    setItem: (_type: string, _val: any, setState: React.Dispatch<any>) => {
        console.log('_type = ', _type, " _val = ", _val);
        window.localStorage.setItem(_type, _val);
        setState(splitDatas());
    },
    getItem: () => {
        let transactionData: any = window.localStorage.getItem('transactions') ?? null;
        if (transactionData !== 'null' && transactionData) { return transactionData } else return null;
    }
}

const splitDatas = () => {

    let balance: number = 0, income: number = 0, spendings: number = 0;
    const val = useLocalStorage.getItem();
    let transactionData = val;
    if (val) { transactionData = val.split('~') } else transactionData = null;

    transactionData && transactionData.map((val: any) => {
        let parsed = JSON.parse(val);
        if (parsed.type === "income") {
            income += Number(parsed.amount);
        } else {
            spendings += Number(parsed.amount);
        }
    })

    balance = income - spendings;

    window.localStorage.setItem('balance', String(balance));
    window.localStorage.setItem('income', String(income));
    window.localStorage.setItem('spendings', String(spendings));

    return {
        ls: window.localStorage.getItem('transactions') ?? null,
        balance: window.localStorage.getItem('balance') ?? '0',
        income: window.localStorage.getItem('income') ?? '0',
        spendings: window.localStorage.getItem('spendings') ?? '0',
    }
}