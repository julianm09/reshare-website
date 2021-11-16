import Head from "next/head";
import Image from "next/image";
import { Header } from "../comps/header";
import Scene from "../comps/Scene";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import { useState, useEffect, Suspense } from "react";
import Progress from "./progress";
import { client } from "../lib/sanity/client";
import { postQuery } from "../lib/sanity/postQuery";


const ContainerUI = styled.div`

  background: #fff;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  position: relative;
  flex-direction: column;
  padding-top: 50vh;
`;

const HeadingUI = styled.div`
  font-family: Poppins;
  color: white;
  font-size: calc(36px + 5vw);
  text-align: center;

  
`;

const CircleLandingPage = styled.div`

`;

const TextUI = styled.div`
  font-family: Poppins;
  color: white;
  font-size: 16px;
  position: relative;
  top: 100px;
`;

export default function Home() {
  return (
      <ContainerUI>

        <HeadingUI>RESHARE</HeadingUI>
        <TextUI>Scroll Down 👇</TextUI>
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
