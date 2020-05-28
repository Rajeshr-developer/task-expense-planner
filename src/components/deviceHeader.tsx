import React from 'react';
import styled from 'styled-components';

const HeaderLayer = styled.div`
    height:7%;
    background:#efe7e7;
    border-bottom:red;
`

const DeviceName = styled.span`
    color:#000;
    font-size:0.5em
`

const Time = styled.span`
    color:red;
    font-size:0.5em
`

const Battery = styled.img`
`

export const DeviceHeader = (): JSX.Element => {
    return (
        <HeaderLayer>  
            <DeviceName>{"Iphone"}</DeviceName>
        </HeaderLayer>
    )
}