import React from 'react';
import styled from 'styled-components';
import { Button } from '../components/button';

const FooterLayer = styled.div`
    display:flex;
    align-items:center;
    height:13%;
    background:#fff;
`

const Footer = (): JSX.Element => {

    return (
        <>
            <FooterLayer>
                <Button width={'50%'} height={'60%'} color={'green'} buttonName={'Add Income'} onClick={() => { window.dispatchEvent(new CustomEvent("showPrompt", { detail: { prompttype: "income" } })) }} />
                <Button width={'50%'} height={'60%'} color={'red'} buttonName={'Add Spending'} onClick={() => { window.dispatchEvent(new CustomEvent("showPrompt", { detail: { prompttype: "spending" } })) }} />
            </FooterLayer>
        </>
    )
}

export default Footer;