import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    width: 400px;
    height: 400px;
    background-color: ${prop=>prop.color};
    border-radius: 200px;
`

//props
const Ellipse = ({
    color = "rgba(244, 255, 219, 0.54)",
}) => {
    return <Cont color={color}>
    </Cont>
}

export default Ellipse;