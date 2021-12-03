import { client } from "../../lib/sanity/client";
import styled from "styled-components";
import { postQuery } from "../../lib/sanity/postQuery";
import BlockContent from "@sanity/block-content-to-react";
import Header from "../../comps/header";
import MemberCard from "../../comps/memberCard";
import Ellipse from "../../comps/ellipse";
import Email from "../../comps/email";

const ContainerUI = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  color: #484349;
  font-family: "Poppins", sans-serif;
  width: 100%;

  @media (max-width:450px){
    padding-top: 130px;
  }
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
`;

const AboutCont = styled.div`
  font-family: 'Poppins', sans-serif;
  margin:0;
  height: 100vh;

  .memberCard{
    display: flex;
    width: 100vw;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .info{
    width:100vw;
    display: flex;
    justify-content: center;

    @media (max-width:450px) {
      margin-left: 40px;
      margin-right: 40px;
      justify-content: center;
      text-align: center;
      width: auto;
    }
  }

  .contactInfo{
    margin-left: 130px;
    margin-right: 100px;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    @media (max-width:450px) {
      margin-bottom: 40px;
      margin-right: 50px;
      margin-left: 50px;
    }
  }

  .icon {
    margin-left: 130px;
    margin-right: 100px;
    margin-bottom: 50px;
    @media (max-width:450px) {
      margin-top: 0px;
      margin-left: 50px;
    }
  }

  .contactInfoSec{
    display: flex;
    flex-direction: column;

    @media (max-width:450px) {
      margin-top: 40px;
    }
  }

  .bcit{
    width: 45px;
    height: 45px;
    margin-left: 40px;
  }

  .ellipse{
    @media (max-width:450px) {
      display: none;
    }
  }
`;

const Title = styled.div`
  margin-top: 130px;
  font-weight: 600;
  font-size: 22px;
  color: #848484;
  display: flex;
  justify-content: center;

  @media (max-width:450px) {
      margin-top: 50px;
    }
`
const Info = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
  width: 700px;
  height: auto;
  font-size: 14px;
`

const SubTitle = styled.text`
  width: 610px;
  height: auto;
  font-weight: 500;
  font-size: 60px;
  color: #2B2B2B;
  margin-left: 130px;
  margin-top: 100px;
  margin-bottom: 30px;

  @media (max-width:450px) {
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    margin-left: 0px;
    font-size: 20px;
    margin-top: 50px;
  }
`

const About = ({}) => {
  return <AboutCont>
      <ContainerUI>
        <Title>
          Our Developer Team
        </Title>
        <div className="info">
          <Info>
          Reshare’s development team consists of three developers, meet Julian, Michael, and Daniel. While developing Reshare, Julian focused on the front/ back-end and the user interface for customer side. Michael focused on the front/ back-end user interface for the store side. Daniel focused on the map API and the Reshare website. Reshare is currently using React.js and Expo to code, and Vercel to deploy the application.
          </Info>
        </div>
        <div className="memberCard">
          <MemberCard name="Julian Mayes" title="Project manager & Lead Developer" src="/Julian.svg" size="250px" linkin="https://www.linkedin.com/in/julian-mayes-b27898134/" ig="https://www.instagram.com/julianmayes.dev/"/>
          <MemberCard name="Michael Trinh" title="Project manager & Developer" src="/Michael.svg" linkin="https://www.linkedin.com/in/michael-trinh-5558a71ba/" ig="https://www.instagram.com/michaelmikyle/"/>
          <MemberCard/>
        </div>

        <Title>
          Our Designer Team
        </Title>
        <div className="info">
          <Info>
          Reshare’s design team consists of three designers, meet Juhee, Glian, and Tiffany. While creating the contents and assets for Reshare, the designers went through a design sprint, design drafts, wireframe, low/ medium/ high fidelity prototyping, user testing, style guide, user personas, task models, website, business card, brochure, and tote bag designing. Main tools used includes Figma and Adobe Illustrator. Juhee focused on main design flow of the application. Glian focused on the design and interface of the Reshare website, and Tiffany focused on design and marketing aspects.
          </Info>
        </div>
        <div className="memberCard">
          <MemberCard name="Juhee Kim" title="Lead Designer & UI/UX Designer" src="/Juhee.svg" color="#EE9837" linkin="https://www.linkedin.com/in/juhee-kim-10771a1b1/" ig="https://www.instagram.com/juheekimdesign/"/>
          <MemberCard name="Glian Palma" title="UI/UX Designer & Front-end Developer" src="/Glian.svg" color="#EE9837" size="220px" linkin="https://www.linkedin.com/in/glian-palma-6330b8227" ig="https://www.instagram.com/gliandesigns/"/>
          <MemberCard name="Tiffany Tu" title="UI/UX Designer & Marketer" src="/Tiffany.svg" color="#EE9837" ig="https://www.instagram.com/tiff_tu/" linkin="https://www.linkedin.com/in/tiffany-t-334858188/"/>
        </div>

        <SubTitle>Want to get started?</SubTitle>
          <div className="contactInfoSec">
            <div className="contactInfo">
              Reshare helps reduce food waste in Vancouver by letting grocery stores sell excess inventory at a discounted price.
            </div>
            <div className="contactInfo">
              Want to get started?
              <Email/>
            </div>
            <div className="icon">
              <img src="/Union.svg"></img>
              <img className="bcit" src="/bc-institute-technology.png"></img>
            </div>
          </div>
        <div className="ellipse">       
        <Ellipse color="rgba(231, 247, 195, 0.45)"/>
        <Ellipse top="500px" left="-100px"/>
        <Ellipse color="rgba(238, 152, 55, 0.1)" top="850px"/>
        <Ellipse color="rgba(238, 152, 55, 0.4)" top="1200px" left="-100px"/>
        </div>
      </ContainerUI>
  </AboutCont>
};

export default About;
