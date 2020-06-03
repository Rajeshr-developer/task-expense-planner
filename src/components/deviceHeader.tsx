import React from 'react';
import styled from 'styled-components';
import battery from '../battery.png';

const HeaderLayer = styled.div`
    height:7%;
    background:#efe7e7;
    border-bottom:1px solid rgba(0,0,0,0.1)
`

const DeviceName = styled.span`
    color:#000;
    font-size:0.5em;
    margin-left:4%
`

const Time = styled.span`
    color:#000;
    font-size:0.5em;
    margin-left:25%
`

const Battery = styled.img`
    width: 10%;
    position: absolute;
    right: 3%
`

const returnDate = (): string => {
    var date = new Date;

    var minutes = date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
    var hour = date.getHours() > 9 ? date.getHours() : "0" + date.getHours();

    return hour + " : " + minutes;
}

export const DeviceHeader = (): JSX.Element => {
    return (
        <HeaderLayer>
            <DeviceName>{"Iphone"}</DeviceName>
            <Battery src={battery} />
            <Time>{returnDate()}</Time>
        </HeaderLayer>
    )
}