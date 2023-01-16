import OrderPresenter from "./OrderPresenter";

export enum OrderCase {
  direct = "직접 주문",
  suggestion = "추천 메뉴",
  help = "주문 도움",
}

export type heandleOrderMenu = (value: string) => void;

export default function OrderContainer() {
  return <OrderPresenter />;
}
