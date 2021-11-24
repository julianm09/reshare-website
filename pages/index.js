import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { client } from "../lib/sanity/client";
import { postQuery } from "../lib/sanity/postQuery";

// --------- Functions --------
import Parallax from "../comps/Parallax";

// --------- Components--------
import { Header } from "../comps/header";
import Scene from "../comps/Scene";
import LandingPage from "../comps/LandingPage"



const ContainerUI = styled.div`
  background: #fff;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  position: relative;
  flex-direction: column;
`;

const LandingPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0;
  padding: 0;
  width: 100vw;
  height: 300vh;
  background-color: white;

  overflow-x: hidden;
  /* transform: translate(-50%, -50%); */
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 503px;
  height: 503px;
  border-radius: 300px;
  background-color: #DFEFB9;
  z-index: 0;

  transform: translate(-50%,-50%);
`;

const Lime = styled.div`
  position: absolute;
  left: 225px;
  bottom: 300px;
  z-index: 1;
`;

const ReshareTitle = styled.p`
  position: absolute;
  color: white;
  font-weight: 500;
  font-family: poppins;
  font-size: 100px;
  z-index:2;
`;

const Orange = styled.div`
  position: absolute;
  top: 450px;
  left: 600px;
  z-index:1;
`;

const ArrowContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
`;

const ArrowDownScroll = styled.p`
  color: black;
  font-weight: 500;
  font-family: poppins;
  font-size: 24px;
`;

export default function Home() {

  const WrappedCustom = Parallax(
    <div>
      <LandingPage />
    </div>, 0.08
  )

  return (
      <ContainerUI>

{/* ----------- Landing Page ----------- */}

      <WrappedCustom />

        {/* <Circle>

        <ReshareTitle>RESHARE</ReshareTitle>

           </Circle> */}

        {/* <Lime>
          <Link href="/">
            <img height="400px" src="/landingpage_lime.png"/>
          </Link>
        </Lime> */}

        {/* <Orange>
          <Link href="/">
            <img height="400px" src="/orange.png" />
          </Link>
        </Orange> */}



      {/* </Orb> */}

{/* ----------- Landing Page ----------- */}

    <ArrowContainer>
      <ArrowDownScroll>Scroll Down 👇</ArrowDownScroll>
    </ArrowContainer>



        {/* <Scene /> */}

      </ContainerUI>
  );
}












// export async function getStaticProps({ params }) {
//   const posts = await client.fetch(postQuery);

//   return {
//     props: {
//       posts,
//     },
//   };
// }
