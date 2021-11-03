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
  background: #ee9837;
  font-weight: 500;
  color: white;

  @media (max-width: 800px ){
    margin: 50px 0 0 0;
    align-items: flex-start;
  }
`;

const ContainerUI = styled.div`
  width: 80%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  display: flex;
  @media (max-width: 800px ){
    flex-direction: column;
  }
  
`;

const LinkContainerUI = styled.div`
  display: flex;
  @media (max-width: 800px ){
    margin: 50px 0 0 0;
  }

`;

const LinkUI = styled.div`
  margin: 0 25px;
  font-size: 12px;
`;

export const Header = ({}) => {
  return (
    <HeaderUI>
      <ContainerUI>
        <Link href="/">
          <img style={{ cursor: "pointer" }} height="75px" src="/logo.png" />
        </Link>
        <LinkContainerUI>
          <LinkUI>
            <Link href="/">home</Link>
          </LinkUI>
          <LinkUI>
            <Link href="/progress">progress</Link>
          </LinkUI>
          <LinkUI>
            <Link href="/about">about</Link>
          </LinkUI>
        </LinkContainerUI>
      </ContainerUI>
    </HeaderUI>
  );
};
