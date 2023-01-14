import OrderPresenter from "./OrderPresenter";

export enum OrderCase {
  direct = "직접주문",
  suggestion = "추천메뉴",
}

export default function OrderContainer() {
  return <OrderPresenter />;
}
