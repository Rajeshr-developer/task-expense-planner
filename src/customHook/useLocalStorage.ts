export const useLocalStorage: any = {
    setItem: (_type: string, _val: any, setState: React.Dispatch<any>) => {
        window.localStorage.setItem(_type, _val);
        setState(splitDatas());
    }
}

const splitDatas = () => {

    let balance: number = 0, income: number = 0, spendings: number = 0;
    const val = window.localStorage.getItem('transactions') ?? '';
    let transactionData = val ? val.split('~') : null;

    transactionData && transactionData.map((val: any) => {
        let parsed = JSON.parse(val);
        if (parsed.type == "income") {
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
        ls: window.localStorage.getItem('transactions') ?? '',
        balance: window.localStorage.getItem('balance') ?? '0',
        income: window.localStorage.getItem('income') ?? '0',
        spendings: window.localStorage.getItem('spendings') ?? '0',
    }
}