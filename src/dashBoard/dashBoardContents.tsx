import React, { useEffect } from 'react';
import styled from 'styled-components';
import deleteIcon from '../delete.png';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

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

const mapDispatchToProps = (dispatch: any) => ({
    closepopup: (_id: any) => dispatch({ type: "DELETE_TRANSACTION", payload: _id })
});

const DashBoardContents = ({ data, closepopup }: any) => {

    const info = JSON.parse(data);

    console.log('info = ', info);

    return (
        <Container>
            <DateEl>{info.time}</DateEl>
            <Amount color={info.type == "income" ? 'green' : 'red'}>{info.amount}</Amount>
            <Remarks>{info.remarks}</Remarks>
            <Delete src={deleteIcon} id={info.id} onClick={(e: any) => { closepopup(e.target.id) }} />
        </Container>
    )
}

export default connect(null, mapDispatchToProps)(DashBoardContents);