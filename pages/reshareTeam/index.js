import { client } from "../../lib/sanity/client";
import styled from "styled-components";
import { postQuery } from "../../lib/sanity/postQuery";
import BlockContent from "@sanity/block-content-to-react";
import Header from "../../comps/header";
import MemberCard from "../../comps/memberCard";
import Form from "../../comps/form";


const ContainerUI = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  color: #484349;
  font-family: "Poppins", sans-serif;
  width: 100%;
`;
const HeaderUI = styled.div`
  position: relative;
  margin: 0 0 0 0;
  color: #484349;
  font-size: 24px;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  margin: 0 0 50px 0;
`;

const TimelineUI = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

const PostUI = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 0 50px 0;
`;

const TitleUI = styled.div`
  position: relative;
  margin: 0 0 0 0;
  color: #484349;
  font-size: 18px;
  font-family: "Poppins", sans-serif;
`;

const GridUI = styled.div`
  position: relative;
  display: grid;
  justify-content: space-between;
  grid-template-columns: 2fr 2fr 2fr;
  width: 50%;
  grid-gap: 150px;
`;

const ImageUI = styled.img`
  width: 100%;
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
  }

  .contactSec{
    margin-left: 130px;
    margin-bottom: 50px;
    display: flex;
  }

  .contactInfo , .icon{
    margin-left: 50px;
    margin-right: 100px;
    margin-bottom: 50px;
  }

  .contactInfoSec{
    display: flex;
    flex-direction: column;
  }

  .bcit{
    width: 45px;
    height: 45px;
    margin-left: 40px;
  }
`;

const Title = styled.div`
  margin-top: 130px;
  font-weight: 600;
  font-size: 22px;
  color: #848484;
  display: flex;
  justify-content: center;
`
const Info = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
  width: 700px;
  height: auto;
  font-size: 14px;
`

const SubTitle = styled.div`
  width: 610px;
  height: auto;
  font-weight: 500;
  font-size: 60px;
  color: #2B2B2B;
  margin-left: 130px;
  margin-top: 100px;
  margin-bottom: 30px;
`

const About = ({}) => {
  return <AboutCont>
      <ContainerUI>
        <Title>
          Our Developer Team
        </Title>
        <div className="info">
          <Info>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          </Info>
        </div>
        <div className="memberCard">
          <MemberCard name="Julian Mayes" title="Project manager &amp; Lead Developer" src="/Julian.svg" size="250px"/>
          <MemberCard name="Michael Trinh" title="Project manager &amp; Front-end Developer" src="/Michael.svg"/>
          <MemberCard/>
        </div>

        <Title>
          Our Designer Team
        </Title>
        <div className="info">
          <Info>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          </Info>
        </div>
        <div className="memberCard">
          <MemberCard name="Juhee Kim" title="Lead Designer &amp; UI/UX Designer" src="/Juhee.svg" color="#EE9837"/>
          <MemberCard name="Glian Palma" title="UI/UX Designer &amp; Front-end Develper" src="/Glian.svg" color="#EE9837" size="220px"/>
          <MemberCard name="Tiffany Tu" title="UI/UX Designer &amp; Marketer" src="/Tiffany.svg" color="#EE9837"/>
        </div>

        <SubTitle>Want to get started?</SubTitle>
        <div className="contactSec">
          <Form/>
          <div className="contactInfoSec">
            <div className="contactInfo">
              Reshare helps reduce food waste in Vancouver by letting grocery stores sell excess inventory at a discounted price.
            </div>
            <div className="contactInfo">
              Want to get started?
            </div>
            <div className="icon">
              <img src="/Union.svg"></img>
              <img className="bcit" src="/bc-institute-technology.png"></img>
            </div>
          </div>        
        </div>
      </ContainerUI>
  </AboutCont>
};

export default About;
