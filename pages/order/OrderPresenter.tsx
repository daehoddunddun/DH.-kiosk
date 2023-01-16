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
            <p>
              <span>키오스크 주문에 익숙하신가요?</span>"{OrderCase.direct}"
              <img src="/order-food.png" />
            </p>
          </Link>
          <Link
            href="/order/help"
            className="order-btn"
            onClick={() => heandleOrderMenu(OrderCase.help)}
          >
            <p>
              <span>키오스크 주문이 어려우신가요?</span>"{OrderCase.help}"
              <img src="/social-care.png" />
            </p>
          </Link>
          <Link
            href="/order/suggestion"
            className="order-btn"
            onClick={() => heandleOrderMenu(OrderCase.suggestion)}
          >
            <p>
              <span>인기메뉴를 빠르게 주문해볼까요?</span>"
              {OrderCase.suggestion}"
              <img src="/like.png" />
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

const style = css`
  .order-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  }

  .order-nav {
    position: absolute;
    top: 8%;
    font-size: 100px;
  }

  .order-item {
    display: flex;
  }

  .order-item p {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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
  .order-item p span {
    top: 100px;
    font-size: 35px;
    margin-bottom: 50px;
  }

  .order-item p img {
    width: 150px;
    height: 150px;
  }
`;
