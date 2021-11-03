import Head from "next/head";
import Image from "next/image";
import { Header } from "../comps/header";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import { useState, useEffect, Suspense } from "react";
import Progress from "./progress";
import { client } from "../lib/sanity/client";
import { postQuery } from "../lib/sanity/postQuery";

import dynamic from "next/dynamic";

const Scene = dynamic(() => import("../comps/Scene"));

const ContainerUI = styled.div`
  background: #ee9837;
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

const TextUI = styled.div`
  font-family: Poppins;
  color: white;
  font-size: 16px;
  position: relative;
  top: 100px;
`;

export default function Home({ posts }) {
  return (
    <ContainerUI>
      <HeadingUI>Welcome to reshare</HeadingUI>
      <TextUI>Scroll Down 👇</TextUI>
      <Scene />

      <Progress posts={posts} />
    </ContainerUI>
  );
}

export async function getStaticProps({ params }) {
  const posts = await client.fetch(postQuery);

  return {
    props: {
      posts,
    },
  };
}
