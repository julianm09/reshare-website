import styled from "styled-components";
import Link from "next/dist/client/link";

const HeaderUI = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  position: fixed;
  justify-content: center;
  z-index: 10000;
  background-color: white;
  box-shadow: 0px 0px 15px #ccc;

  @media (max-width: 800px ){
    padding: 20px 0 0 0;
    align-items: flex-start;
    height: 120px;
  }

`;
const ContainerUI = styled.div`
  width: 80%;
  align-items: center;
  flex-direction: row;
  display: flex;
  
  @media (max-width: 950px ){
    flex-direction: column;
  }

  @media (max-width:450px) {
    justify-content: center;
  }
`;
const Icon = styled.div`
  width: 55px;
  height: 55px;
  @media (max-width:450px) {
    
    width: 45px;
    height: 45px;
  }
`;
const LinkContainer = styled.div`
  display: flex;
  `;
const Text = styled.p`
  margin-right: 50px;
  color:${props=>props.color};
  @media (max-width:450px) {
    margin-right: 20px;
    font-size: 14px;
  }
`;

export const Header = ({
  color = "#C0C0C0"
}) => {
  return (
    <HeaderUI>
      <ContainerUI>

        <Icon>
          <Link href="/">
            <img style={{ cursor: "pointer" }} height="100%" width="100%" src="/Reshare.svg" />
          </Link>
        </Icon>

      <LinkContainer>
      <Link href="/">
        <Text style={{cursor: "pointer"}} color={color}>Home</Text>
      </Link>

      <Link href="/progress">
        <Text style={{cursor: "pointer"}} color={color}>Progress</Text>
      </Link>

      <Link href="/reshareTeam">
        <Text style={{cursor: "pointer"}} color={color}>Team</Text>
      </Link>

      <Link href="/marketing">
        <Text style={{cursor: "pointer"}} color={color}>Marketing</Text>
      </Link>
      </LinkContainer>


      </ContainerUI>
    </HeaderUI>
  );
};
