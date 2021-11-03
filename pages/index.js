import Head from "next/head";
import Image from "next/image";
import { Header } from "../comps/header";
import Scene from "../comps/Scene";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import { useState, useEffect } from "react";

const ContainerUI = styled.div`
  height: 110vh;
  background: #ee9837;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  flex-direction: column;
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

export default function Home() {
  return (
    <ContainerUI>
      <HeadingUI>Welcome to reshare</HeadingUI>
      <TextUI>Scroll Down 👇</TextUI>
      <Scene />
    </ContainerUI>
  );
}
