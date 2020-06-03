/**
 *  Custom Button Component ...
 */

import React from 'react';
import styled from 'styled-components';

interface IButtonProps {
    color?: string;
    width?: string;
    height?: string;
    buttonName?: string;
}

const ButtonText = styled.span`
    font-size:0.7em;
    color:white;
`

const CustomButton = styled.button<IButtonProps>`
    background:${props => props.color ?? "grey"};
    width:${props => props.width ?? "100px"};
    height:${props => props.height ?? "100px"};
    margin-top:7%;
`

export const Button: Function = (props: IButtonProps): JSX.Element => {
    return (
        <CustomButton {...props} >
            <ButtonText>{props.buttonName}</ButtonText>
        </CustomButton>
    )
}