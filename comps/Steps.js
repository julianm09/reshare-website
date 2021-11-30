import React from "react";
import styled from "styled-components";

const Rectangle = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: ${props=>props.marginleft};
    margin-bottom: 15px;
    background-color: ${props=>props.bgcolor};
    width: 230px;
    height: 50px;
    padding: 10px;
    border-radius: 10px;
`;
const Text = styled.p`
    font-size: 14px;
    color: #535353;
`;

const Steps = ({
    RectangleText = "Understand the app idea",
    marginleft = "0px",
    bgcolor = "#FDE9C2"
}) => {

    return(
        <Rectangle marginleft={marginleft} bgcolor={bgcolor}>
            <Text>{RectangleText}</Text>
        </Rectangle>
    );
}

export default Steps;

