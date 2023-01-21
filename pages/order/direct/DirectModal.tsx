import css from "styled-jsx/css";
import { ModalProps } from "./DirectContainer";

export default function DirectModal({ selectDrink }: ModalProps) {
  return (
    <div className="direct-modal-wrap">
      <style jsx>{style}</style>
      <strong className="modal-product-title">{selectDrink.title}</strong>
      <img
        className="modal-product-img"
        src={selectDrink.img}
        alt="커피이미지"
      />
      <p className="modal-product-desc">{selectDrink.desc}</p>
      <p className="modal-product-price">$4500</p>
      <div className="modal-product-btn">
        <p className="product-order-btn">주문하기</p>
        <p className="product-close-btn">취소하기</p>
      </div>
    </div>
  );
}

const style = css`
  .direct-modal-wrap {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 90%;
    border-radius: 5px;
    border: 1px solid rgb(145, 144, 144);
    background-color: #fffffffc;
  }

  .modal-product-title {
    font-size: 30px;
    font-weight: 700;
  }

  .modal-product-img {
    width: 40%;
    height: 40%;
    border-radius: 20px;
  }

  .modal-product-desc {
    text-align: center;
    font-size: 20px;
    padding: 20px;
  }

  .modal-product-price {
    color: #6666d3;
    font-size: 25px;
    font-weight: 700;
  }

  .modal-product-btn {
    display: flex;
    justify-content: space-around;
    width: 50%;
    font-size: 25px;
  }

  .modal-product-btn p {
    padding: 10px;
    text-align: center;
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid rgb(0, 0, 0);
    color: white;
  }

  .product-order-btn {
    background: #e37ce3b8;
  }

  .product-close-btn {
    background: #b0b0b0;
  }
`;
