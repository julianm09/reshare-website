import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    width: 780px;
    height: 450px;
    background: #FFEE90;
    color: #838383;
    display: flex;
    font-family: 'Poppins', sans-serif;
    flex-direction: column;
`;

const Top = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    margin-bottom: 80px;
    margin-left: 50px;
`

const TopSec = styled.div`
    margin-right: ${prop=>prop.margin};
`

const TopTitle = styled.div`
    font-size: 14px;
    color: #838383;
    margin-bottom: 20px;
`

const TopTitleInput = styled.input`
    outline: 0;
    border-width: 0 0 2px;
    border-color: #838383;
    background: #FFEE90;
    width: ${prop=>prop.line};
    font-size: 16px;
`

const Mid = styled.div`
    display: flex;
    margin-left: 50px;
    margin-bottom: 80px;
`

const Bot = styled.div`
    width: 127px;
    height: 36px;
    font-size: 14px;
    background-color: #838383;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    margin-left: 50px;
`

const ButtonText = styled.text`
    color: #FFF;
`


//props
const Form = ({
    margin = "0px",
    line = "225px",
}) => {
    return <Cont>
        <Top>
            <TopSec margin="50px">
                <TopTitle>NAME *</TopTitle>
                <TopTitleInput line={line}></TopTitleInput>
            </TopSec>
            <TopSec margin={margin}>
                <TopTitle>E-MAIL *</TopTitle>
                <TopTitleInput line={line}></TopTitleInput>
            </TopSec>
        </Top>
        <Mid>
            <TopSec margin={margin}>
                <TopTitle>MESSAGE *</TopTitle>
                <TopTitleInput line="500px"></TopTitleInput>
            </TopSec>
        </Mid>
        <Bot onClick="/">
            <ButtonText>SUBMIT</ButtonText>
        </Bot>
    </Cont>
}

export default Form;