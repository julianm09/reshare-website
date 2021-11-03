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
  align-items: center;
  z-index: 10000;
  background: #ee9837;
  font-size: 16px;
  font-weight: 500;
  color: white;
`;

const ContainerUI = styled.div`
  width: 80%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  display: flex;
`;

const LinkContainerUI = styled.div`
  display: flex;
`;

const LinkUI = styled.div`
  margin: 0 25px;
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
            <Link href="/progress">our progress</Link>
          </LinkUI>
          <LinkUI>
            <Link href="/about">about us</Link>
          </LinkUI>
        </LinkContainerUI>
      </ContainerUI>
    </HeaderUI>
  );
};
