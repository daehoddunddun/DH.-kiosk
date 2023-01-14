import { OrderCase } from "./OrderContainer";
import css from "styled-jsx/css";
import Link from "next/link";

export default function OrderPresenter() {
  return (
    <>
      <style jsx>{style}</style>
      <div className="order-wrap">
        <strong className="order-nav">주문 방식을 선택해주세요.</strong>
        <div className="order-item">
          <a className="order-btn">{OrderCase.direct}</a>
          <a className="order-btn">{OrderCase.suggestion}</a>
        </div>
      </div>
    </>
  );
}

const style = css`
  .order-nav {
    position: absolute;
    top: 10%;
    font-size: 100px;
  }
  .order-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  }

  .order-item {
    display: flex;
  }

  .order-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 600px;
    height: 600px;
    margin: 0 80px;
    font-size: 100px;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    border-radius: 20px;
    border: 1px solid rgb(123, 114, 114);
    background: #dddddd;
  }
`;
