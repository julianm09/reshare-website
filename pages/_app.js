import "../styles/globals.css";
import styled from "styled-components";
import { Header } from "../comps/header";
import { Images } from "../comps/Images";

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
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header /> 
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
