import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Button } from './button';
import { Dispatch } from 'redux';

const PromptLayer = styled.div`
    position:absolute;
    height:100%;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    background:rgba(0,0,0,0.8);
`

const CustomInput = styled.input`
    height:6%;
    text-align:center;
    background:#fff;
`

const Title = styled.span`
    position:abolute;
    height:6%;
    color:white;
`

const mapStateToProps = (state: any) => ({
    renderPrompt: state.viewData.renderPrompt,
    promptType: state.viewData.promptType
});

const formatted_date = () => {
    var result = "";
    var d = new Date();
    result += d.getDate() + "." + (d.getMonth()) + "." + d.getFullYear();
    return result;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addIncome: (_val: string, _amntVal: number, promptType: string) => dispatch({
        type: "ADD_INCOME", payload: JSON.stringify({
            "amount": _amntVal,
            "remarks": _val,
            "time": String(formatted_date()),
            "id": String(Date.now()),
            "type": promptType
            , payload: false
        })
    }),
    closepopup: () => dispatch({ type: "RENDER_PROMPT", payload: false })
});

const PromptPopup = ({ renderPrompt, promptType, addIncome, closepopup }: any): JSX.Element | null => {

    const [val, setState] = useState('');
    const [amntVal, setAmountState] = useState('');

    return (
        renderPrompt ? (
            <>
                <PromptLayer>
                    <Title>{'Amount'}</Title>
                    <CustomInput type="input" value={amntVal} onChange={(e) => {
                        if (e.target.value.length <= 6)
                            setAmountState(e.target.value);
                    }} />
                    <Title>{'Comments'}</Title>
                    <CustomInput type="input" value={val} onChange={(e) => {
                        if (e.target.value.length <= 30)
                            setState(e.target.value);
                    }} />
                    <Button buttonName={'OK'} height={'8%'} width={'57%'} color={'green'} onClick={() => addIncome(val, amntVal, promptType)} />
                    <Button buttonName={'CANCEL'} height={'8%'} width={'57%'} color={'green'} onClick={closepopup} />
                </PromptLayer>
            </>
        ) : null
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(PromptPopup);