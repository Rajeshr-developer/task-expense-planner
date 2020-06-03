import React, { useContext } from 'react';
import styled from 'styled-components';
import DashBoardContents from './dashBoardContents';
import { MyContext } from '../contextProvider/myProvider';
import { useLocalStorage } from '../customHook/useLocalStorage';

const DashBoardBody = styled.div`
    height:60%;
    background:#fff;
    overflow:scroll;
`

const DashBoard = (): JSX.Element => {

    const [val, setstate] = useContext(MyContext);

    let transactionData = val.ls ? val.ls.split('~') : null;

    const deleteInfo = (e: any) => {
        if (!transactionData) return null;
        transactionData = transactionData.filter((val: any) => { return JSON.parse(val).id !== e });
        useLocalStorage.setItem('transactions', transactionData.join('~'), setstate);
    }

    return (
        <DashBoardBody>
            {
                transactionData && transactionData.map((val: any, indx: number) => {
                    return <DashBoardContents key={'#' + indx} data={JSON.parse(JSON.stringify(val))} deleteData={deleteInfo} />
                })
            }

        </DashBoardBody>
    )
}

export default DashBoard;