import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Button } from './button';
import { MyContext } from '../contextProvider/myProvider';
import { useEffect } from 'react';
import { useLocalStorage } from '../customHook/useLocalStorage';

const { Map } = require('immutable');

let prmptType = 'income';

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

const PromptBox = () => {

    const [commentTxt, commentState] = useState('');
    const [amntVal, setAmountState] = useState('');
    const [renderPrompt, setDisplayState] = useState(false);

    const [val, setstate] = useContext(MyContext);

    const emitEvent = (event: any) => {
        prmptType = event.detail['prompttype'];
        commentState('');
        setAmountState('');
        setDisplayState(true);
    }

    useEffect(() => {
        window.addEventListener('showPrompt', emitEvent);
        return () => {
            window.removeEventListener('showPrompt', emitEvent);
        };
    }, [])

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
                    <CustomInput type="input" value={commentTxt} onChange={(e) => {
                        if (e.target.value.length <= 30)
                            commentState(e.target.value);
                    }} />
                    <Button buttonName={'OK'} height={'8%'} width={'57%'} color={'green'} onClick={() => {
                        if (commentTxt != '' && amntVal != '') {
                            const deep = Map({ 'amount': amntVal, "comments": commentTxt, "type": prmptType, "id": String(Date.now()) });
                            let val = window.localStorage.getItem('transactions') ?? '';
                            val += (val != '' ? '~' : '') + JSON.stringify(deep);
                            useLocalStorage.setItem('transactions', val, setstate);
                            setDisplayState(false);
                        }
                    }} />
                    <Button buttonName={'CANCEL'} height={'8%'} width={'57%'} color={'red'} onClick={() => { setDisplayState(false) }} />
                </PromptLayer>
            </>
        ) : null
    )
}

const PromptPopup = (): JSX.Element | null => {
    return (
        <PromptBox />
    )
}

export default PromptPopup;