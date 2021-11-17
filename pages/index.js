import Head from "next/head";
import Image from "next/image";
import { Header } from "../comps/header";
import Scene from "../comps/Scene";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import Progress from "./progress";
import { client } from "../lib/sanity/client";
import { postQuery } from "../lib/sanity/postQuery";


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
  width: 100%;
  height: 900px;
  background-color: white;
`;

const Circle = styled.div`
  width: 503px;
  height: 503px;
  border-radius: 300px;
  background-color: #DFEFB9;
  z-index: 0;
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

export default function Home() {
  return (
      <ContainerUI>

{/* ----------- Landing Page ----------- */}

      <LandingPageContainer>

        <Circle/>

        <Lime>
          <Link href="/">
            <img height="400px" src="/landingpage_lime.png"/>
          </Link>
        </Lime>

        <Orange>
          <Link href="/">
            <img height="400px" src="/orange.png" />
          </Link>
        </Orange>

        <ReshareTitle>RESHARE</ReshareTitle>

      </LandingPageContainer>

{/* ----------- Landing Page ----------- */}

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
