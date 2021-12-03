import styled from "styled-components";
import React, { useState, useEffect, Suspense } from "react";

// --------- Functions --------

// --------- Components--------
import { Header } from "../../comps/header";
import Persona from "../../comps/userPersona"
import LandingPage from "../../comps/LandingPage"
import Step from "../../comps/Steps.js"
import Member from "../../comps/memberCard"
import StepsWrapper from "../../comps/StepsWrapper"
import ColorCard from "../../comps/colorScheme"

const ContainerUI = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color:white;
`;

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
    height: 90%;
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
  font-size: 14px;
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
    height: 1300px;
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
      width: 120px;
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

  @media (max-width:450px) {
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
`;
//------------ Process Container End ----------

//------------ User Profile -------------
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100vw;
  height: 1024px;
  /* background-color: #F3F3F3; */
  @media (max-width:450px) {
      height: 1200px;
    }
`;

const ProfileTarget = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  /* margin-top: 100px; */
  margin-left: 150px;
  color: #EE9837;
  z-index:1;
  @media (max-width:450px) {
    margin-left: 30px;
  }
`;

const ProfileHeader = styled.p`
  color: #EE9837;
  font-size: 70px;
  font-weight: 500;
  margin: 0;
`;

const PersonaContainer = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  
  @media (max-width:950px) {
    flex-direction: column;
    padding-left: 30px;

    margin-left: 30px;
  }
`;
//--------- User Profile End ---------

//--------- Low Fidelity -------------
const LowFidelityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top:30px;
  width: 100vw;
  height: 1150px;
  background-color: #3C362A;

  @media (max-width:1000px) {
    display: none;
  }
`;

const LowFidelityTitle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  /* margin-top: 100px; */
  margin-left: 150px;
  color: #EE9837;
  z-index:1;
`;

const LowFidelityHeader = styled.p`
  color: #EE9837;
  font-size: 70px;
  font-weight: 500;
  margin: 0;
`;

const LoFi = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:100vw;
`;
//--------- LoFi Container End ----------

//--------- Style Guide Container ---------
const StyleguideContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100vw;
  height: 1024px;
  background-color: #F3F3F3;
  
  @media (max-width:450px) {
    flex-direction: column;
    }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 150px;
  width: 50%;
  height: 100%;
  background-color: #FFF9EE;

  @media (max-width:450px) {
    padding: 30px;
    width: 100%;
}
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  flex-grow: 1;
  background-color: white;

  @media (max-width:450px) {
    width: 100%;
    }
`;

const StyleGuideTitle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 100px;
  color: #EE9837;
  z-index:1;

  @media (max-width:450px) {
    }
`;

const StyleGuideHeader = styled.p`
  color: #EE9837;
  font-size: 70px;
  font-weight: 500;
  margin:0 0 50px 0;
  
`;

const StyleGuideInfo = styled.div`
  color: #262626;
  font-size: 14px;
  margin: 0;
  width: 420px;
  @media (max-width:450px) {
    font-size: 12px;
    width: 100%;
    max-width: 450px;
    }
`;
//---------- StyleGuide End ------------

//----------Typography Container ----------
const TypographyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100vw;
  height: 1024px;
  background-color: #EE9837;

  @media (max-width:450px) {
    display: none;
  }

`;
const TypoContainers = styled.div`
  display: flex;
  flex-direction: row;
`;
const TypographyTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-left: 150px;
  width: 50%;
  height: 100%;
  color: #FFEE90;
`;
const TypographyTitle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 100px;
  color: #FFEE90;
  z-index:1;
  margin-left: 150px;
`;
const TypographyHeader = styled.p`
  color: #FFEE90;
  font-size: 70px;
  font-weight: 500;
  margin:0 0 50px 0;
`;
const FirstFont = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;
const Primary = styled.p`
  font-size: 30px;
  font-weight: 500;
  margin:0;
`;
const Letters1 = styled.p`
  font-size: 144px;
  font-weight: 700;
  margin: 0;
`;
const SecondFont = styled.div`
  display: flex;
  flex-direction: column;
`;
const Secondary = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin-bottom:70px;//
  color: #FFEE90;
`;

const Letters2 = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 94px;
`;

const TypographyBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 50%;
  height: 100%;
  color: #FFEE90;
`;
const Text = styled.p`
  color: black;
  font-size: 14px;
  margin-right: 30px;
`;
//---------- Typography End ----------

//---------- Color Container --------
const ColorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100vw;
  height: 1024px;

  @media (max-width:350px) {
    display: none;
  }
`;
const ColorLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-left: 150px;
  width: 50%;
  height: 100%;
`;
const ColorTitle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 100px;
  color: #EE9837;
  z-index:1;
`;
const ColorHeader = styled.p`
  color: #EE9837;
  font-size: 70px;
  font-weight: 500;
  margin:0 0 50px 0;
`;
const ColorInfo = styled.div`
  color: #262626;
  font-size: 18px;
  margin: 0;
  width: 350px;
`;
const ColorRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`;
const ColorRow = styled.div`
  display: flex;
  flex-direction: row;
`;
//---------- Color End -----------

export default function Home() {

  // const Orb = Parallax(<div style={styles.orb}><ReshareTitle>RESHARE</ReshareTitle></div>,0.05);
  
  return (
  <ContainerUI>
<div>
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
      <Title>Design/ Development Research week 3 - week 5</Title>
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
      <Title>Design / Validation / Testing / Development week 6 - Final week</Title>
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

  <ProfileContainer>
    <ProfileTarget>
      target market
      <ProfileHeader>Research User Profile</ProfileHeader>
    </ProfileTarget>

    <PersonaContainer>
      <Persona/>
      <Persona src="./Janeth.png" name="Janeth Guzman" age="22" occupation="Administrative Associate" income="$60,000 / Year" bio="Janeth is a single mother of two children and works full time at a health tech company downtown. She loves to stay active and healthy when she can, and wants the same for her kids. Janeth enjoys staying active by going on hikes and riding her bike on the weekend. It is very important for Janeth to eat high quality produce but finds that sometimes it can get a little expensive. She is very concious about food waste, so she cooks little by little every day."/>
    </PersonaContainer>
  </ProfileContainer>

  <LowFidelityContainer>
    <LowFidelityTitle>
      Prototypes process
      <LowFidelityHeader>Low Fidelity Prototype</LowFidelityHeader>
    </LowFidelityTitle>
    <LoFi>
      <img width="1100px" height="942px" src="./lofi.png"/>
    </LoFi>
  </LowFidelityContainer>

  <StyleguideContainer>
    <TextContainer>
      <StyleGuideTitle>
        Styleguide
        <StyleGuideHeader>Logo</StyleGuideHeader>
      </StyleGuideTitle>

      <StyleGuideInfo>
      ReShare’s logo represents the cycle of reusing. The lifecycle of fresh foods is often very short and we wanted to show a way to upcycle food to benifit low income individuals and families. 
      <br/>
      <br/>
      The R in the reshare logo.
      <br/> 
      The Reuse, Reduce Recycle arrow direction.
      </StyleGuideInfo> 
    </TextContainer>

    <ImageContainer>
      <img width="457px" height="578px" src="./Logos.svg"/>
    </ImageContainer>
  </StyleguideContainer>
</div>

  <TypographyContainer>
      <TypographyTitle>
        Styleguide
        <TypographyHeader>Typography</TypographyHeader>
      </TypographyTitle>

      <TypoContainers>
  <TypographyTopContainer>
      
      <FirstFont>
        <Primary>Primary - Poppins</Primary>
        <Letters1>Aa</Letters1>
      </FirstFont>

      <Text>
      Geometric sans serif typefaces have been a popular design tool ever since these actors took to the world’s stage. Poppins is one of the new comers to this long tradition. With support for the Devanagari and Latin writing systems, it is an internationalist take on the genre.
      </Text>
    </TypographyTopContainer>
    <TypographyBottomContainer>

      <SecondFont>
        <Secondary>Secondary - Ubuntu</Secondary>
        <Letters2>
        <img width="190px" height="100px" src="./Aa.svg"/>
        </Letters2>
      </SecondFont>  

      <Text>
      The Ubuntu Font Family are a set of matching new libre/open fonts in development during 2010-2011. The development is being funded by Canonical Ltd on behalf the wider Free Software community and the Ubuntu project. The technical font design work and implementation is being undertaken by Dalton Maag.
      </Text>

    </TypographyBottomContainer>

      </TypoContainers>
  </TypographyContainer>

  <ColorContainer>
    <ColorLeftContainer>
    <ColorTitle>
      Styleguide
      <ColorHeader>Primary Color</ColorHeader>
    </ColorTitle>
    <ColorInfo>ReShare’s colour pallete represents and promotes freshness by giving foods a new life. We went with a fun, fresh, and bright primary colour scheme. 
<br/>
<br/>
The two tones of green means freshness, growth, and health.
<br/>
<br/>
The orange and yellow means joy, happiness, and creativity. 
</ColorInfo>
    </ColorLeftContainer>

    <ColorRightContainer>
      <ColorRow>
        <ColorCard/>
        <ColorCard color="#FFEE90" title="~ Yellow Crayola" hexNumber="#FFEE90" R="255" G="238" B="144"/>
      </ColorRow>
      <ColorRow>
        <ColorCard color="#EE9837" title="~ Carrot Orange" hexNumber="#EE9837" R="238" G="152" B="55"/>
        <ColorCard color="#57BA68" title="~ Tea Green" hexNumber="#57BA68" R="87" G="186" B="104"/>
      </ColorRow>
    </ColorRightContainer>
  </ColorContainer>

  <ColorContainer>
    <ColorLeftContainer>
    <ColorTitle>
      Styleguide
      <ColorHeader>Secondary Color</ColorHeader>
    </ColorTitle>
    <ColorInfo>
      For secondary colors, Reshare chose similar colors as primary colors. But, secondary colors are more faded and less saturated compared to the primary colors. It helps us utilize and arrange secondary colors with the primary colors in a proper way. 
</ColorInfo>
    </ColorLeftContainer>

    <ColorRightContainer>
      <ColorRow>
        <ColorCard color="#FFC696" title="~ Peach Crayola" hexNumber="#FFC696" R="250" G="198" B="150"/>
        <ColorCard color="#ECEEF4" title="~ Alice Blue" hexNumber="#ECEEF4" R="236" G="238" B="244"/>
      </ColorRow>
      <ColorRow>
        <ColorCard color="#F2BCBC" title="~ Spanish Pink" hexNumber="#F2BCBC" R="242" G="188" B="188"/>
        <ColorCard color="#FDE9C2" title="~ Blanched Almond" hexNumber="#FDE9C2" R="253" G="233" B="194"/>
      </ColorRow>
    </ColorRightContainer>
  </ColorContainer>

  <Arrow>
      <img height="25px" src="./Arrow.svg"/>
  </Arrow>

  </ContainerUI>
  );
}
