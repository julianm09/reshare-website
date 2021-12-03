import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    width: 400px;
    height: 400px;
    background-color: ${prop=>prop.color};
    border-radius: 200px;
    position: absolute;
    z-index: -1;
    top: ${prop=>prop.top};
    left: ${prop=>prop.left};
`

//props
const Ellipse = ({
    color = "rgba(244, 255, 219, 0.54)",
    top = "100px",
    left = "1300px",
}) => {
    return <Cont color={color} top={top} left={left}>
    </Cont>
}

export default Ellipse;