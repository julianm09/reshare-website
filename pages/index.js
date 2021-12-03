import styled from "styled-components";
import React, { useState, useEffect, Suspense } from "react";

// --------- Functions --------
import Parallax from "../comps/Parallax";

// --------- Components--------
import { Header } from "../comps/header";
import LandingPage from "../comps/LandingPage"
import Step from "../comps/Steps.js"
import StepsWrapper from "../comps/StepsWrapper"



const ContainerUI = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
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
  @media (max-width:450px) {
      
  }
`;
const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 503px;

  height: 100%;
  max-height: 503px;
  border-radius: 300px;
  background-color: #DFEFB9;
  z-index: 0;

  @media (max-width:503px) {
    height: 100%;
    max-height: 300px;
    width: 100%;
    max-width: 300px;
  }

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

  @media (max-width:910px) {
    font-size: 12vw;
  }
`;
//------- Landing Page End --------

const Arrow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 40px;

  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index:1000;

  @media (max-width:450px) {
    height: 100%;
  }
`;


//------- Progess Container --------
const ProgressContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 1024px;
  padding: 30px;
  /* background-color: #F3F3F3; */
  
  @media (max-width:950px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 900px;
  }
`;
const ProgressReshare = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;

  @media (max-width:950px) {
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

  @media (max-width:910px){
    font-size: 60px;
  }

`;
const ReshareParagraph = styled.p`
  color: grey;
  font-size: 12px;
  width: 387px;

  @media (max-width:450px) {
    width: 80vw;
  }
  
`;
const ProgressImage = styled.div`
  display: flex;
  width: 100%;
  max-width: 450px;
  justify-content: center;
  align-items: center;
  
  @media (max-width:450px) {
    max-width: 450px;
    overflow: hidden;
  }
`;
//--------- Progress Container End ---------


//--------- Solution Container ---------
const SolutionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100vw;
  height: 1024px;

  @media (max-width:450px) {
    overflow: hidden;
  }
`;
const SolutionCircle = styled.div`
  position: absolute;
  z-index:0;

  @media (max-width:450px) {
    display: none;
  }
`;
const SolutionHow = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: 100px;
  margin-left: 150px;
  color: #EE9837;
  z-index:1;

  @media (max-width:450px) {
    margin-left: 30px;
  }
`;
const SoltuionHeader = styled.p`
  color: #EE9837;
  font-size: 70px;
  font-weight: 500;
  margin: 0;

`;
const Solutions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1;

  @media (max-width:950px) {
    flex-direction: row;  }
`;
const SolutionStore = styled.div`
  display:flex ;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin:75px;
  width: 185px;
  height: 350px;

  @media (max-width:950px) {
    margin:10px;
  }
`;
const SolutionText = styled.p`
  font-size: 18px;
  color:#A6A6A6;

  @media (max-width:450px) {
    font-size: 12px;
  }
`;
//---------- Solution Container End --------


//---------- Process Container ----------
const ProcessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100vw;
  height: 800px;
  /* background-color: #F3F3F3; */
  @media (max-width:910px) {
    height: 100%;
  }
`;
const ProcessTimeline = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  font-size:14px ;
  /* margin-top: 100px; */
  margin-left: 150px;
  color: #EE9837;
  z-index:1;

  @media (max-width:450px) {
    margin-left: 30px;
  }
`;
const ProcessHeader = styled.p`
  color: #EE9837;
  font-size: 70px;
  font-weight: 500;
  margin: 0;
`;
const TableContainer = styled.div`
  display: flex;
  flex-direction:row ;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
  padding: 100px;
  /* background-color: blue; */
  @media (max-width:910px) {
    max-width: 100%;
    height: 100%;
    overflow: hidden;
    flex-direction: column;
    justify-content: flex-start;
    padding-left: 30px;
    }
`;
const ProcessTable = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 376px;
    background-color: white;
    
    @media (max-width:450px) {
      width: 100%;
      margin-bottom: 30px;
    }
`;
const Title = styled.p`
    font-size: 18px;
    color: #535353;
    font-weight: 500;
    margin-bottom: 30px;

    @media (max-width:450px) {
      font-size: 15px;
    }
`;
const DashedLine = styled.div`
  margin-right: 20px;

  @media (max-width:910px) {
      display: none;
    }
`;

const ProcessTable2 = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 511px;
    height: ${props=>props.height};
    background-color: white;

    @media (max-width:450px) {
      width: 100%;
      height: 100%;
    }
`;



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
      <img maxWidth="500px" width="100%" src="./MobileApp.svg"/>
    </ProgressImage>
  </ProgressContainer>

  <SolutionContainer>
    <SolutionCircle>
      <img src="./SolutionCircle.png"/>
    </SolutionCircle>

    <SolutionHow>
      How does it work
      <SoltuionHeader>
        Solution
      </SoltuionHeader>
    </SolutionHow>

  <Solutions>
    <SolutionStore>
      <img maxWidth="185px" width="100%" height="100%" src="./StoreMobile.svg"/>
      <SolutionText>Grocery stores upload photos of ingredients</SolutionText>
    </SolutionStore>

    <SolutionStore>
      <img maxWidth="185px" width="100%" height="100%" src="./CustomerMobile.svg"/>
      <SolutionText>Customer schedules pickup time</SolutionText>
    </SolutionStore>

    <SolutionStore>
      <img maxWidth="185px" width="100%" height="100%" src="./OrangeMobile.svg"/>
      <SolutionText>Customer picks up food</SolutionText>

    </SolutionStore>
  </Solutions>

  </SolutionContainer>

  <ProcessContainer>
    <ProcessTimeline>
      Timeline
      <ProcessHeader>Project Process</ProcessHeader>
    </ProcessTimeline>

    <TableContainer>

    <ProcessTable>
      <Title>Plan week 0 - week 1</Title>
      <Step/>
      <Step RectangleText="Set Objectives" marginleft="40px"/>
      <Step RectangleText="Determine a scope" marginleft="40px"/>
      <Step RectangleText="Set up a SMART goal" marginleft="40px"/>
      <Step RectangleText="Set team members' roles" marginleft="80px"/>
    </ProcessTable>

    <DashedLine>
      <img src="./DashedLines.svg"/>
    </DashedLine>

    <ProcessTable>
      <Title>Research week 1</Title>
      <Step bgcolor="#DFEFB9" RectangleText="Understand the competitions" />
      <Step bgcolor="#DFEFB9" RectangleText="Define FABs - function, advantages, benefits" marginleft="40px"/>
      <Step bgcolor="#DFEFB9" RectangleText="Define primary users & secondary users" marginleft="40px"/>
    </ProcessTable>

    <DashedLine>
      <img src="./DashedLines.svg"/>
    </DashedLine>

    <ProcessTable>
      <Title>Analysis Week 1 - Week 2</Title>
      <Step bgcolor="#ECEEF4" RectangleText="User Persona"/>
      <Step bgcolor="#ECEEF4" RectangleText="Design sprint - user flow" marginleft="40px"/>
    </ProcessTable>
    </TableContainer>

  </ProcessContainer>

  <ProcessContainer>
    <TableContainer>
    <ProcessTable2>
      <Title>Design/ Development Research
        <br/> week 3 - week 5</Title>
      <Step bgcolor="#FFE5E5" RectangleText="Wireframe" />
      <Step bgcolor="#FFE5E5" RectangleText="Low fidelity prototype" marginleft="20px"/>
      <Step bgcolor="#FFE5E5" RectangleText="create a development flow" marginleft="60px"/>
      <Step bgcolor="#FFE5E5" RectangleText="Set up repo on github" marginleft="60px" />
      <Step bgcolor="#FFE5E5" RectangleText="Prioritize app elements (development)" marginleft="60px"/>
      <Step bgcolor="#FFE5E5" RectangleText="Set up firebase database/ authorization" marginleft="100px"/>
      <Step bgcolor="#FFE5E5" RectangleText="Map API testing / research" marginleft="100px"/>
      <Step bgcolor="#FFE5E5" RectangleText="Styleguide" marginleft="140px"/>
    </ProcessTable2>

    <DashedLine>
      <img src="./DashedLinesLong.svg"/>
    </DashedLine>

    <ProcessTable2>
      <Title>Design / Validation / Testing / Development
        <br/> week 6 - Final week</Title>
      <Step bgcolor="#FFF3B2" RectangleText="User testing with Lo-Fi prototypes" />
      <Step bgcolor="#FFF3B2" RectangleText="Build pages" marginleft="40px"/>
      <Step bgcolor="#FFF3B2" RectangleText="State management with react context" marginleft="40px"/>
      <Step bgcolor="#FFF3B2" RectangleText="Mid fidelity Prototypes" marginleft="80px" />
      <Step bgcolor="#FFF3B2" RectangleText="User testing with Mid-Fi prototypes" marginleft="110px"/>
      <Step bgcolor="#FFF3B2" RectangleText="High fidelity prototypes" marginleft="110px"/>
      <Step bgcolor="#FFF3B2" RectangleText="Build progress / marketing website" marginleft="140px" />
      <Step bgcolor="#FFF3B2" RectangleText="Design Reshare merch" marginleft="140px"/>
    </ProcessTable2>

    </TableContainer>
  </ProcessContainer>

  <Arrow>
      <img height="25px" src="./Arrow.svg"/>
  </Arrow>

  </ContainerUI>
  );
}












// export async function getStaticProps({ params }) {
//   const posts = await client.fetch(postQuery);

//   return {
//     props: {
//       posts,
//     },
//   };
// }
