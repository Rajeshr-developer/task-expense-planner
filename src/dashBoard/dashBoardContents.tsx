import React, { useMemo } from 'react';
import styled from 'styled-components';
import deleteIcon from '../delete.png';

const DateEl = styled.span`
    height:3vh;
    display:flex;
    align-items:center;
    margin-left:5px;
    font-size:0.3em;
`

const Amount = styled.span`
    display:block;
    margin-left:5px;
    color:${props => props.color ?? 'green'};
    font-size:0.8em;
`

const Remarks = styled.span`
    margin-top:6px;
    display:block;
    margin-left:5px;
    font-size:0.6em;
    font-style:italic;
`

const Delete = styled.img`
    float: left;
    top: 34%;
    height: 44%;
    margin-left: 144px;
    margin-top: -31px;
    cursor:pointer;
`

const Container = styled.div`
    height:29%;
`

const DashBoardContents = ({ data, deleteData }: any) => {

    const info = JSON.parse(data);

    return (
        useMemo(() => (
            <Container>
                <DateEl>{info.time}</DateEl>
                <Amount color={info.type == "income" ? 'green' : 'red'}>{info.amount}</Amount>
                <Remarks>{info.comments}</Remarks>
                <Delete src={deleteIcon} id={info.id} onClick={(e: any) => { deleteData(e.target.id) }} />
            </Container>
        ), [info.time, info.type, info.comments, info.id])

    )
}

export default DashBoardContents;