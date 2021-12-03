import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    height: 360px;
    width: 443px;
    margin: 100px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    @media (max-width:450px) {
        width: 300px;
        overflow: hidden;
        height: auto;
        margin: 0px;
        margin-bottom: 50px;
    }
`;
const Top = styled.div`
    display: flex;
    margin-top: 25px;
    width: 443px;
    justify-content: space-between;
`;
const Img = styled.img`
    width: 150px;
    height: 150px;

    @media (max-width:450px) {
        width: 100%;
        max-width: 150px;
        height: 100%;
        max-height: 150px;
    }
`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`;

const Name = styled.text`
    width: 295px;
    height: 54px;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 36px;

    @media (max-width:450px) {
        font-size: 16px;
    }
`;
const InfoItems = styled.div`
    width: 295px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1px;

    @media (max-width:450px) {
        justify-content: flex-start;
    }
`;
const InfoTitle = styled.text`
    font-weight: bold;
    font-size: 14px;
    @media (max-width:450px) {
        font-size: 12px;
    }
`;
const InfoDetail = styled.text`
    font-size: 14px;

    @media (max-width:450px){
        font-size: 12px;
    }
`;
const Bot = styled.div`
    margin-top: 30px;
`;
const Bio = styled.text`
    font-size: 14px;

    @media (max-width:450px) {
        font-size: 12px;
    }
`;


//props
const UserPersona = ({
    src = "/Ezekiel-Davis.svg",
    name = "Ezekiel Davis",
    age = " 22",
    location = " Vancouver, BC",
    occupation = " Student",
    income = " $18,000 / Year",
    bio = "Ezekiel is a Business student at BCIT. He is very environmentaly concious and loves to cook at home. Ezekial stays active by playing intramural soccer every wednesday. He values the importance of cooking high quality ingredients, but sometimes finds that they are hard to acquire on a budget.",
}) => {
    return <Cont>
        <Top>
            <Img src={src}></Img>
            <Info>
                <Name>{name}</Name>
                <InfoItems>
                    <InfoTitle>Age: </InfoTitle>
                    <InfoDetail>{age}</InfoDetail>
                </InfoItems>
                <InfoItems>
                    <InfoTitle>Location: </InfoTitle>
                    <InfoDetail>{location}</InfoDetail>
                </InfoItems>
                <InfoItems>
                    <InfoTitle>Occupation: </InfoTitle>
                    <InfoDetail>{occupation}</InfoDetail>
                </InfoItems>
                <InfoItems>
                    <InfoTitle>Income: </InfoTitle>
                    <InfoDetail>{income}</InfoDetail>
                </InfoItems>
            </Info>
        </Top>
        <Bot>
            <Bio>{bio}</Bio>
        </Bot>
    </Cont>
}

export default UserPersona;