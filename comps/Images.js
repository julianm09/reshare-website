import styled from "styled-components";
import Link from "next/dist/client/link";
import React from "react";
import Steps from "./Steps";

const ImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
`;

const ImageCard = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 10px;
`;

const Text = styled.p`
    font-size: 20px;
`;

const Images = ({

}) => {
  return (
    <ImageContainer>
    <ImageCard >
        <Link href="/businesscard">
            <img style={{cursor: "pointer"}} width="300px" src="./BusinessCard.png"/>
        </Link>
        <Link href="/businesscard">
            <Text style={{cursor: "pointer"}}>Business Card</Text>
        </Link>
    </ImageCard>

    <ImageCard >
        <Link href="/totebag">
            <img style={{cursor: "pointer"}} width="300px" src="./ToteBag.png"/>
        </Link>
        <Link href="/totebag">
            <Text style={{cursor: "pointer"}}>Reshare Tote Bag</Text>
        </Link>
    </ImageCard>

    <ImageCard >
        <Link href="/digitalbrochure">
            <img style={{cursor: "pointer"}} width="300px" src="./DigitalBrochure.png"/>
        </Link>
        <Link href="/digitalbrochure">
            <Text style={{cursor: "pointer"}}>Reshare Digital Brochure</Text>
        </Link>
    </ImageCard>
</ImageContainer>
  );
};

export default Images;