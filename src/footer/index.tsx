import React from 'react';
import styled from 'styled-components';
import { Button } from '../components/button';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const FooterLayer = styled.div`
    display:flex;
    align-items:center;
    height:13%;
    background:#fff;
`

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addIncome: () => dispatch({ type: "RENDER_PROMPT", payload: true }),
    addSpending: () => dispatch({ type: "RENDER_PROMPT_SPENDING", payload: true }),
});

const Footer = ({ addIncome, addSpending }: any): JSX.Element => {
    return (
        <>
            <FooterLayer>
                <Button width={'50%'} height={'60%'} color={'green'} buttonName={'Add Income'} onClick={addIncome} />
                <Button width={'50%'} height={'60%'} color={'red'} buttonName={'Add Spending'} onClick={addSpending} />
            </FooterLayer>
        </>
    )
}

export default connect(null, mapDispatchToProps)(Footer);