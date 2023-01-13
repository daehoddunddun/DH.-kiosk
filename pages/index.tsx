import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { useRecoilState } from "recoil";

const Main = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: black;
`;

const Test = styled.img`
  width: 1000px;
`;

const Navs = styled.p`
  width: 100%;
  height: 20px;
  background-color: black;
  font-size: 30px;
  color: blue;
`;

export default function index() {
  return (
    <>
      <Head>
        <title>DH.Kiosk</title>
      </Head>
      <Main>
        <Navs>ss</Navs>
        <Test src="/virtual.gif" />
      </Main>
    </>
  );
}
