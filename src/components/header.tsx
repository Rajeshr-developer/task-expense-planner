import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const HeaderLayer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height:20%;
    background:#efe7e7;
    border-bottom:red;
`

const BalanceText = styled.div`
    margin-left:10px;
    font-size:0.5em
`

const Balance = styled.div`
    margin-top:5px;
    margin-left:10px;
    font-size:0.9em
`

const Income = styled.span`
    margin-left:10px;
    color:green;
    font-size:0.5em
`

const Spendings = styled.span`
    margin-left:10px;
    color:red;
    font-size:0.5em
`

const mapStateToProps = (state: any) => ({
    balance: state.mainData.balance,
    income: state.mainData.income,
    spendings: state.mainData.spendings
});

const Header = ({ balance, income, spendings }: any): JSX.Element => {
    console.log('transactionData = ', balance, income, spendings);
    return (
        <HeaderLayer>
            <BalanceText dangerouslySetInnerHTML={{ __html: 'Balance' }}></BalanceText>
            <Balance dangerouslySetInnerHTML={{ __html: balance }}></Balance>
            <Income>{"Income : " + String(income)}</Income>
            <Spendings>{"Spendings : " + String(spendings)}</Spendings>
        </HeaderLayer>
    )
}

export default connect(mapStateToProps)(Header);