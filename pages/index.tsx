import Link from "next/link";
import css from "styled-jsx/css";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { useRecoilState } from "recoil";

export default function index() {
  return (
    <>
      <style jsx>{style}</style>
      <div className="main-wrap">
        <div className="main-nav">2023년 1월 14일 신규 키오스크 출시!</div>
        <img className="main-item" src="/main.jpg" alt="커피 이미지" />
        <div className="order-wrap">
          <button className="order-btn">
            <Link href="/order" style={{ color: "white", fontSize: "40px" }}>
              주문하기
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

const style = css`
  .main-wrap {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: #cfadad;
  }
  .main-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    width: 100%;
    height: 4%;
    color: white;
    background-color: #000000;
  }

  .main-item {
    width: 100%;
    height: 96%;
    object-fit: cover;
  }

  .order-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: absolute;
    bottom: 10%;
  }

  .order-btn {
    width: 80%;
    height: 150px;
    font-size: 30px;
    border-radius: 90px;
    background: #2f3545;
    line-height: 42px;
    padding: 0;
    border: none;
    cursor: pointer;
  }
`;
