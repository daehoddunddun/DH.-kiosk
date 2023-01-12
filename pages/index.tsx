import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";
import { useState } from "react";
import { useRecoilState } from "recoil";

const index = () => {
  return (
    <>
      <Head>
        <title>DH.Kiosk</title>
      </Head>
      <Main>
        <Link href="/login">Link 태그 사용하기/css 적용하기</Link>
      </Main>
    </>
  );
};

export default index;

const Main = styled.div``;

const Nav = styled.div`
  width: 100%;
  background: #000;
`;
