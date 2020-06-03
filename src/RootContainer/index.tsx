import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BodyContents from '../Body/body';

type BodyRootProps = {
    height: number;
}

const BodyOfRoot = styled.div<BodyRootProps>`
    position:absolute;
    width:22%;
    height:${props => ((props.height * 69) / 100) + 'px'};
`

const RootContainer = () => {

    const [val, setState] = useState(0);

    useEffect(() => {
        document.onreadystatechange = () => {
            console.log(document.getElementsByClassName('Background')[0]);
            let clientHeight = document.getElementsByClassName('Background')[0].clientHeight;
            if (clientHeight != 0) {
                setState(clientHeight)
            }
        }

    }, [])

    return <BodyOfRoot height={val}><BodyContents/></BodyOfRoot>
}

export default RootContainer;