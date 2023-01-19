import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { orderSelectState } from "../../../state";
import { NavComponentType } from "./DirectContainer";
import LoaderExampleSizesInverted from "../../common/Loding";
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
      {coffeeInfo ? (
        <div className="direct-wrap">
          <div className="direct-item">
            <OrderNav />
            <p className="direct-product-text">주문상품을 골라주세요.</p>
            <div className="direct-product-left">
              <div className="direct-product-item">
                {coffeeInfo.map((item: any) => {
                  return (
                    <div className="product-list-box">
                      <img
                        className="product-list-img"
                        src={item.image}
                        alt="커피이미지"
                      />
                      <strong className="product-list-title">
                        {item.title}
                      </strong>
                    </div>
                  );
                })}
              </div>
              <div className="direct-product-right">주문영역</div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <LoaderExampleSizesInverted />
        </div>
      )}
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

  .direct-product-text {
    margin-top: 50px;
    font-size: 80px;
  }

  .direct-product-left {
    display: flex;
    width: 100%;
    height: 80%;
  }

  .direct-product-item {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    overflow: scroll;
    overflow-x: hidden;
  }

  .product-list-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 40%;
    margin: 0 5px 40px 5px;
    border-radius: 20px;
    cursor: pointer;
  }

  .product-list-box:hover {
    background-color: #00000014;
  }

  .product-list-img {
    width: 80%;
    height: 80%;
    border-radius: 20px;
  }

  .product-list-title {
    font-size: 30px;
    margin-top: 20px;
  }

  .direct-product-right {
    width: 40%;
    height: 100%;
    margin-left: 20px;
  }
`;
