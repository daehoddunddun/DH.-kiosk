import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { orderSelectState } from "../../../state";
import { NavComponentType } from "./DirectContainer";
import css from "styled-jsx/css";

export default function DirectPresenter({ OrderNav }: NavComponentType) {
  const orderType = useRecoilValue(orderSelectState);

  useEffect(() => {
    console.log("order-type", orderType);
  }, []);

  return (
    <>
      <style jsx>{style}</style>
      <div className="direct-wrap">
        <div className="direct-item">
          <OrderNav />
          <p className="direct-item-text">주문상품을 골라주세요</p>
        </div>
      </div>
    </>
  );
}

const style = css`
  .direct-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  }

  .direct-item {
    width: 80%;
    height: 80vh;
    border-radius: 20px;
    background: white;
  }
`;
