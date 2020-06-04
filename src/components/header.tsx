import React, { useContext, useMemo } from 'react';
import styled from 'styled-components';
import { MyContext } from '../contextProvider/myProvider';

interface ICustomTextFieldProps {
    fontSize?: string,
    color?: string
}

const HeaderLayer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height:20%;
    background:#efe7e7;
    border-bottom:red;
`

const CustomTextField = styled.span<ICustomTextFieldProps>`
    margin-left:10px;
    font-size:${props => props.fontSize ?? "0.6em"};
    color:${props => props.color ?? "black"}
`

const Header = (): JSX.Element => {

    const [val] = useContext(MyContext);

    return (
        useMemo(() => (
            <HeaderLayer>
                <CustomTextField>{'Balance'}</CustomTextField>
                <CustomTextField fontSize={"0.9em"}>{String(val.balance)}</CustomTextField>
                <CustomTextField color={"green"}>{"Income : " + String(val.income)}</CustomTextField>
                <CustomTextField color={"red"}>{"Spendings : " + String(val.spendings)}</CustomTextField>
            </HeaderLayer>
        ), [val.income, val.spendings, val.balance])

    )
}

export default Header;