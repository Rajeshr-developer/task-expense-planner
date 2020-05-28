import React from 'react';
import styled from 'styled-components';
import DashBoardContents from './dashBoardContents';
import { connect } from 'react-redux';

const DashBoardBody = styled.div`
    height:60%;
    background:#fff;
    overflow:scroll;
`

const mapStateToProps = (state: any) => ({
    transactionData: state.mainData.transactionData
});

const DashBoard = ({ transactionData }: any): JSX.Element => {
    console.log('transactionData = ', transactionData);
    return (
        <DashBoardBody>
            {
                transactionData && transactionData.map((val: any, indx: number) => {
                    return <DashBoardContents key={'#' + indx} data={val} />
                })
            }

        </DashBoardBody>
    )
}

export default connect(mapStateToProps)(DashBoard);