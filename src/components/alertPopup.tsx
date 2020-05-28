import React from 'react';
import styled from 'styled-components';
import { Button } from '../components/button';
import { connect } from 'react-redux';

const PromptLayer = styled.div`
    position:abolute;
    display:flex;
    align-items:center;
    height:13%;
    background:rgba(0,0,0,0.8);
`

const Title = styled.span`
    position:abolute;
    height:13%;
    background:#fff;
`

const mapStateToProps = (state: any) => ({
    count: state.renderAlert
});

const AlertPopup = ({ renderAlert }: any): JSX.Element | null => {
    return (
        renderAlert ? (
            <>
                <PromptLayer>
                    <Title>{'Are you sure , you want to delete ?'}</Title>
                    <Button buttonName="yes" />
                    <Button buttonName="no" />
                </PromptLayer>
            </>
        ) : null
    )
}

export default connect(mapStateToProps)(AlertPopup);