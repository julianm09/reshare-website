import React from 'react';
import styled from 'styled-components';

const ImageCont = styled.div`
    width: ${props=>props.width}%;
    height: auto;
`;

const ImageInput = styled.img`
    width: ${props=>props.width}%;
    height: auto;
`;

//props
const Image = ({
    width = 30,
    src = "/vercel.svg",
}) => {
    return <ImageCont>
         <ImageInput width={width} src={src} /> 
    </ImageCont>
}

export default Image;