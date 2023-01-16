import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { orderSelectState } from "../../state";
import css from "styled-jsx/css";

export default function OrderNav() {
  const orderType = useRecoilValue(orderSelectState);

  useEffect(() => {
    console.log("order-type", orderType);
  }, []);

  return (
    <>
      <style jsx>{style}</style>
      <div className="nav-wrap">
        <p className="nav-item">{orderType}</p>
      </div>
    </>
  );
}

const style = css`
  .nav-wrap {
    display: flex;
    align-items: center;
    width: 100%-20px;
    height: 50px;
    padding-left: 20px;
  }

  .nav-item {
    font-size: 20px;
    border-bottom: 1px solid black;
  }
`;
