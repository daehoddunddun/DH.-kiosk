import Head from "next/head";
import Link from "next/link";
import css from "styled-jsx/css";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { useRecoilState } from "recoil";

export default function index() {
  return (
    <>
      <Head>
        <title>DH.Kiosk</title>
      </Head>
      <style jsx>{style}</style>
      <div className="main-wrap">
        <div className="main-item">메인 이미지</div>
      </div>
      <div className="order-wrap">
        <button className="order-btn">
          <Link href="/product">주문하기</Link>
        </button>
      </div>
    </>
  );
}

const style = css`
  .main-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 850px;
    background-color: #9aafaf;
  }
  .main-item {
    background: red;
    width: 90%;
    height: 98%;
  }

  .order-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 170px;
    background: #bee6bb;
  }

  .order-btn {
    width: 80%;
    height: 50%;
    font-size: 30px;
    border-radius: 50px;
    border: 1px solid #eb5feb;
    background: #eb5feb;
  }
`;
