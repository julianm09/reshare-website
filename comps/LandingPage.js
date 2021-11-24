import Head from "next/head";
import Image from "next/image";
import { Header } from "../comps/header";
import Scene from "../comps/Scene";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { client } from "../lib/sanity/client";
import { postQuery } from "../lib/sanity/postQuery";

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

const ReshareTitle = styled.p`
  position: absolute;
  color: white;
  font-weight: 500;
  font-family: poppins;
  font-size: 100px;
  z-index:2;
`;

export default function Home() {
  
    return (
        <LandingPageContainer>
  
  
          <Circle>
  
          <ReshareTitle>RESHARE</ReshareTitle>
  
             </Circle>
  
  
          {/* <Scene /> */}
  
        </LandingPageContainer>
    );
  }

  
  
  
  

  