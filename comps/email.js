import React from 'react';
import styled from 'styled-components';
import Link from 'next/dist/client/link';

const Cont = styled.div`
    width: 127px;
    height: 36px;
    font-size: 14px;
    background-color: #838383;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
    border-radius: 15px;
`;

const ButtonText = styled.text`
    color: #FFF;
`

//props
const Email = ({
}) => {
    return <Cont>
        <Link href="mailto:juliantmayes@gmail.com">
            <ButtonText>Email us!</ButtonText>
        </Link>
    </Cont>
}

export default Email;

