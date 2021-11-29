import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    height: 283px;
    width: 206px;
    display: flex;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
`;

const Top = styled.div`
    display: flex;
    width: 206px;
    height: 207px;
    background: ${prop=>prop.color};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Bot = styled.div`
    display: flex;
    flex-direction: column;
    width: 206px;
    height: 76px;
    background: linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Textbox = styled.div`
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    margin-top: 7px;
    margin-left: 18px;
`;

const Title = styled.text`
    font-weight: bold;
`

const Hex = styled.text`
    font-weight: bold;
`

const HexNumber = styled.text`
    font-weight: normal;
`

const RGBDiv = styled.div`
    display: flex;
`

const RGB = styled.text`
    font-weight: bold;
    margin-right: 3px;
`

const RGBNumber = styled.text`
    font-weight: normal;
`


//props
const ColorScheme = ({
    color = "#DFEFB9;",
    title = "~ Tea Green",
    hexNumber = "#DFEFB9",
    R = "223",
    G = "239",
    B = "185",
}) => {
    return <Cont>
        <Top color={color}>
        </Top>
        <Bot>
            <Textbox>
                <Title>{title}</Title>
                <Hex>HEX <HexNumber>{hexNumber}</HexNumber></Hex>
                <RGBDiv>
                <RGB>R <RGBNumber>{R}</RGBNumber> -</RGB>
                <RGB>G <RGBNumber>{G}</RGBNumber> -</RGB>
                <RGB>B <RGBNumber>{B}</RGBNumber></RGB>
                </RGBDiv>
            </Textbox>
        </Bot>
    </Cont>
}

export default ColorScheme;