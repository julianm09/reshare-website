import styled from "styled-components";
import React, { useState, useEffect, Suspense } from "react";

// --------- Functions --------
import Parallax from "../comps/Parallax";

// --------- Components--------
import { Header } from "../comps/header";
import LandingPage from "../comps/LandingPage"



const ContainerUI = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  margin: 0;
  padding: 0;
  height: 100%;
  background-color:white;
`;

//------- Landing Page -------
const LandingPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 1024px;
  background-color: white;
`;
const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 503px;
  height: 503px;
  border-radius: 300px;
  background-color: #DFEFB9;
  z-index: 0;
`;
const Lime = styled.div`
  position: absolute;
  margin-left: -400px;
  margin-bottom: 50px;
  z-index: 1;

  @media (max-width:950px){
    display: none;
  }
`;
const Orange = styled.div`
  position: absolute;
  margin-left: 300px;
  margin-bottom:-400px;
  z-index: 1;

  @media (max-width: 950px ){
    display: none;
  }
`;
const ReshareTitle = styled.p`
  color: white;
  font-weight: 500;
  font-family: poppins;
  font-size: 100px;
  z-index:2;
`;
//------- Landing Page End --------

const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 650px;
  width: 100%;
  z-index:1000;
`;

//------- Progess Container --------

const ProgressContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  max-height: 1024px;
  
  @media (max-width:950px) {
    flex-direction: column;
  }
`;

const ProgressReshare = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 150px;
  flex-grow: 1;

  @media (max-width:950px) {
    margin-left: 0px;
    position: relative;
    top: 150px;
  }
`;

const Hashtag = styled.p`
  color: #57BA68;
  font-size: 14px;
`;

const ReshareHeader = styled.p`
  color: #57BA68;
  font-size: 70px;
  font-weight: 500;
  margin: 0;
`;

const ReshareParagraph = styled.p`
  color: grey;
  font-size: 14px;
  width: 387px;

  
`;

const ProgressImage = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;

//--------- Progress Container End ---------

//--------- Process Container ---------





export default function Home() {

  // const Orb = Parallax(<div style={styles.orb}><ReshareTitle>RESHARE</ReshareTitle></div>,0.05);


  return (
  <ContainerUI>
  <LandingPageContainer>
    
    <Circle>
      <Lime>
      <img height="400px" src="/landingpage_lime.png"/>
      </Lime>

      <Orange>
        <img src="./orange.png"/>
      </Orange>

      <ReshareTitle>RESHARE</ReshareTitle>
    </Circle>

  </LandingPageContainer>

  <ProgressContainer>
    <ProgressReshare>
      <Hashtag>#foodwaste</Hashtag>
      <ReshareHeader>Reshare</ReshareHeader>
      <ReshareParagraph>
        Within Metro Vancouver, 13,000 tonnes of perfectly ripe and edible food are disposed of each year.
        <br/>
        <br/>
        Also, a survey conducted by Vancouver Coastal Health revealed that nearly 10% of Vancouverites report food insecurity.
        <br/>
        <br/>
        As a solution of the issue, Reshare is a grocery app that lets stores sell excess inventory at a discounted price.
        <br/>
        <br/>
      </ReshareParagraph>
    </ProgressReshare>

    <ProgressImage>
      <img src="./MobileApp.png"/>
    </ProgressImage>
  </ProgressContainer>

  <Arrow>
      <img height="25px" src="./Arrow.svg"/>
</Arrow>



  </ContainerUI>
  );
}



const styles = {
  orb: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width:'503px',
    height:'503px',
    borderRadius: '50%',
    position:'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: "#DFEFB9",

    boxShadow: "0px 2px  #C4C4C4", 
  },

}


















// export async function getStaticProps({ params }) {
//   const posts = await client.fetch(postQuery);

//   return {
//     props: {
//       posts,
//     },
//   };
// }
