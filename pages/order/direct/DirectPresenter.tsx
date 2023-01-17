import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { orderSelectState } from "../../../state";
import { NavComponentType } from "./DirectContainer";
import css from "styled-jsx/css";
import axios from "axios";

export default function DirectPresenter({ OrderNav }: NavComponentType) {
  const [coffeeInfo, setCoffeeInfo] = useState<any>("");

  useEffect(() => {
    axios
      .get("https://api.sampleapis.com/coffee/hot")
      .then((res) => setCoffeeInfo(res.data));
  }, []);

  console.log(coffeeInfo);

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
          <p className="direct-product-text">주문상품을 골라주세요</p>
          <div className="direct-product-item">
            {coffeeInfo.map((item: any) => {
              return (
                <div className="product-list-box">
                  <img
                    className="product-list-img"
                    src={item.image}
                    alt="커피이미지"
                  />
                  <strong className="product-list-title">{item.title}</strong>
                </div>
              );
            })}
          </div>
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
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    height: 80vh;
    border-radius: 20px;
    background: white;
  }

  .direct-product-item {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .product-list-box {
    display: flex;
    width: 250px;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .product-list-img {
    width: 200px;
    height: 200px;
  }
`;
