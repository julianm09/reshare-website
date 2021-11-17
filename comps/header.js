import styled from "styled-components";
import Link from "next/link";

const HeaderUI = styled.div`
  display: flex;
  height: 150px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  z-index: 10000;
  align-items: center;
  z-index: 10000;

  font-weight: 500;
  color: black;

  @media (max-width: 800px ){
    padding: 50px 0 0 0;
    align-items: flex-start;
  }
`;

const ContainerUI = styled.div`
  width: 80%;
  align-items: center;
  flex-direction: row;
  display: flex;
  @media (max-width: 800px ){
    flex-direction: column;
  }
  
`;

const Icon = styled.div`
  flex-grow: 10;
`;

const LinkContainer = styled.div`
  display: flex;
  font-family: Poppins;
  flex-grow: 1;
`;


const Text = styled.p`
  margin-right: 50px;
  color:${props=>props.color};
`;

const RightHeader = styled.div`
  flex-grow: 4;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const MarginRight = styled.div`
  margin-left: 40px;
`;

export const Header = ({
  color = "#C0C0C0"
}) => {
  return (
    <HeaderUI>
      <ContainerUI>

        <Icon>
          <Link href="/">
            <img style={{ cursor: "pointer" }} height="75px" src="/Group 75.svg" />
          </Link>
        </Icon>

      <LinkContainer>

        <Text style={{cursor: "pointer"}} color={color}>Home</Text>
        <Text style={{cursor: "pointer"}} color={color}>Progress</Text>
        <Text style={{cursor: "pointer"}} color={color}>Reshare Team</Text>
        <Text style={{cursor: "pointer"}} color={color}>Marketing</Text>

      </LinkContainer>

      <RightHeader>

        <MarginRight>
        <Link href="/">
          <img style={{cursor: "pointer"}} height="24px" src="Group-1.svg" />
        </Link>
        </MarginRight>

        <MarginRight>
        <Link href="/">
          <img style={{cursor: "pointer"}} height="24px" src="Vector.svg" />
        </Link>
        </MarginRight>

        <MarginRight>
        <Link href="/">
          <img style={{cursor: "pointer"}} height="24px" src="Group.svg" />
        </Link>
        </MarginRight>

      </RightHeader>

      </ContainerUI>
    </HeaderUI>
  );
};
