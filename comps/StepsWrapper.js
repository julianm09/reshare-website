import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: ${props=>props};
    height: ${props=>props.height};
    background-color: white;
`;
const Title = styled.p`
    font-size: 18px;
    color: #535353;
    font-weight: 500;
    margin-bottom: 30px;
`;

const Steps = ({
    RectangleText = "Understand the app idea",
    height = "369px",
    width="376px",
    bgcolor = "#FDE9C2",
    Titles = "Plan week 0 - week 2"
}) => {

    return(
        <Container height={height}>
            <Title>{Titles}</Title>
        </Container>
    );
}

export default Steps;

