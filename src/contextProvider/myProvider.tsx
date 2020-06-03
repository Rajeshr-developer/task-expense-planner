import React, { useState } from 'react';
import { _localStorageData, ILocalStorage } from '../interfaces/localstorage';

type IContextType = [
    ILocalStorage,
    React.Dispatch<React.SetStateAction<ILocalStorage>>
];

export const MyContext = React.createContext<IContextType>([
    _localStorageData,
    () => { }
]);

interface Props {
    children: React.ReactChild[];
}

export const MyProvider = ({ children }: Props) => {

    const [val, setState] = useState<ILocalStorage>(_localStorageData);

    return (
        <MyContext.Provider value={[val, setState]}>
            {children}
        </MyContext.Provider>
    );
};