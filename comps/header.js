import styled from "styled-components";

const HeaderUI = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  position: fixed;
  justify-content: center;
  z-index: 10000;
  align-items: center;
  z-index: 10000;
  background-color: white;

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
  
  @media (max-width: 950px ){
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

const MarginLeft = styled.div`
  margin-left: 40px;
`;

export const Header = ({
  color = "#C0C0C0"
}) => {
  return (
    <HeaderUI>
      <ContainerUI>

        <Icon>
          
            <img style={{ cursor: "pointer" }} height="46px" src="/Group 75.svg" />
          
        </Icon>

      <LinkContainer>

        <Text style={{cursor: "pointer"}} color={color}>Home</Text>
        <Text style={{cursor: "pointer"}} color={color}>Progress</Text>
        <Text style={{cursor: "pointer"}} color={color}>Reshare Team</Text>
        <Text style={{cursor: "pointer"}} color={color}>Marketing</Text>

      </LinkContainer>

      <RightHeader>

        <MarginLeft>
          <img style={{cursor: "pointer"}} height="24px" src="Group-1.svg" />
        </MarginLeft>

        <MarginLeft>
          <img style={{cursor: "pointer"}} height="24px" src="Vector.svg" />
        </MarginLeft>

        <MarginLeft>
          <img style={{cursor: "pointer"}} height="24px" src="Group.svg" />
        </MarginLeft>

      </RightHeader>

      </ContainerUI>
    </HeaderUI>
  );
};
