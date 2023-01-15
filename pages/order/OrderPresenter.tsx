import { OrderCase } from "./OrderContainer";
import { useRecoilState } from "recoil";
import { orderSelectState } from "../../state";
import { heandleOrderMenu } from "./OrderContainer";
import css from "styled-jsx/css";
import Link from "next/link";

export default function OrderPresenter() {
  const [orderSelect, setOrderSelect] = useRecoilState(orderSelectState);

  const heandleOrderMenu: heandleOrderMenu = (value) => {
    setOrderSelect(value);
    console.log(orderSelect);
  };

  return (
    <>
      <style jsx>{style}</style>
      <div className="order-wrap">
        <strong className="order-nav">주문 방식을 선택해주세요.</strong>
        <div className="order-item">
          <Link
            href="/order/direct"
            className="order-btn"
            onClick={() => heandleOrderMenu(OrderCase.direct)}
          >
            <p>{OrderCase.direct}</p>
          </Link>
          <Link
            href="/order/suggestion"
            className="order-btn"
            onClick={() => heandleOrderMenu(OrderCase.suggestion)}
          >
            <p>{OrderCase.suggestion}</p>
          </Link>
        </div>
      </div>
    </>
  );
}

const style = css`
  .order-nav {
    position: absolute;
    top: 8%;
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

  .order-item p {
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
    color: black;
  }
`;
