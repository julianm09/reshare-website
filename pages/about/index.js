import { client } from "../../lib/sanity/client";
import styled from "styled-components";
import { postQuery } from "../../lib/sanity/postQuery";
import BlockContent from "@sanity/block-content-to-react";
import Header from "../../comps/header";

const ContainerUI = styled.div`
  display: flex;
  margin: 150px 0 0 0;
  justify-content: flex-start;
  align-items: center;
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

const About = ({}) => {
  return (
    <>
      <ContainerUI>
        <GridUI>
          <ImageUI src="/juhee.png" />
          <ImageUI src="/glian.png" />
          <ImageUI src="/tiffany.png" />
          <ImageUI src="/michael.png" />
          <ImageUI src="/daniel.png" />
          <ImageUI src="/julian.png" />
        </GridUI>
      </ContainerUI>
    </>
  );
};

export default About;
