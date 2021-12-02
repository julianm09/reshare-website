import React from 'react';
import styled from 'styled-components';
import Link from 'next/dist/client/link';

const Cont = styled.div`
    height: 397px;
    width: 250px;
    display: flex;
    flex-direction: column;
`;

const Top = styled.div`
    height: 250px;
    width: 250px;
    background-color: ${prop=>prop.color};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px 4px 0px 0px;
`

const MemberImg = styled.img`
    height: ${prop=>prop.size};
    width: ${prop=>prop.size};
`;

const Bot = styled.div`
    display: flex;
    flex-direction: column;
    height: 95px;
    width: 250px;
    background: linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 4px 4px;
`

const Textbox = styled.div`
    font-family: 'Poppins', sans-serif;
    color: #848484;
    margin-left: 20px;
`;

const Name = styled.div`
    font-size: 18px; 
    font-weight: 600;
    margin-top: 5px;
    margin-bottom: 5px;
`

const Title = styled.div`
    font-weight: 500;
    font-size: 11px;
    margin-bottom: 10px;
`

const Icon = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 20px;
`

const SocialIcon = styled.img`
    height: 12px;
    width: 12px;
    margin-right: 10px;
`;

//props
const MemberCard = ({
    name = "Daniel Fu",
    title = "Front-end Developer",
    src = "/daniel.svg",
    color = "#DFEFB9",
    size = "200px",
    linkin = "https://www.linkedin.com/in/danielfu-/",
    ig = "https://www.instagram.com/daniel_fu/",
}) => {
    return <Cont>
        <Top color={color}>
            <MemberImg src={src} height={size} width={size}></MemberImg>
        </Top>
        <Bot>
            <Textbox>
                <Name>{name}</Name>
                <Title>{title}</Title>
            </Textbox>
            <Icon>
                <Link href={linkin}>
                    <a target="_blank">
                        <SocialIcon src="/smol_linkedin.svg"></SocialIcon>
                    </a>
                </Link>
                <Link href={ig}>
                    <a target="_blank">
                        <SocialIcon src="/Vector.svg"></SocialIcon>
                    </a>
                </Link>
            </Icon>
        </Bot>
    </Cont>
}

export default MemberCard;