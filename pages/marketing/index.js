import styled from "styled-components";
import React, { useState, useEffect, Suspense } from "react";
import Link from "next/dist/client/link";

// --------- Functions --------

// --------- Components--------
import Images from "../../comps/Images";

const ContainerUI = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  height: 100%;
  background-color:white;

`;

const Arrow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 40px;

  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index:1000;
`;

//------- Marketing Container -------
const CartImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 700px;
    overflow: hidden;

    @media (max-width:450px) {
      height:auto;
      margin-top: 100px;
    }
`;

const ReshareProduct = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 1024px;
    padding: 100px 114px 0 80px ;

    @media (max-width:450px) {
      height:auto;
      padding: 0;
      margin-bottom: 10px;
    }
`;
const MarketingTitle = styled.p`
    font-size: 90px;
    font-weight: 500;
    margin-bottom: 100px;

    @media (max-width:450px) {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 28px;
      margin-bottom: 30px;
    }
`; 


export default function Home() {

  // const Orb = Parallax(<div style={styles.orb}><ReshareTitle>RESHARE</ReshareTitle></div>,0.05);
  
  return (
  <ContainerUI>
    <CartImage>
        <img width="100%" src="./Cart.png"/>
    </CartImage>

    <ReshareProduct>
        <MarketingTitle>
            Reshare Product
        </MarketingTitle>

        <Images/>

    </ReshareProduct>
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
