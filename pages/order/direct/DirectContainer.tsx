import DirectPresenter from "./DirectPresenter";
import OrderNav from "../../common/OrderNav";

export interface NavComponentType {
  OrderNav: React.FC;
}
export interface ModalProps {
  selectDrink: {
    title: string;
    img: string;
    desc: string;
  };
}
export interface CoffeeInfoType {
  id: number;
  title: string;
  image: string;
  description: string;
  ingredients?: string[];
}
export type SelectDrinkFunction = (
  title: string,
  img: string,
  desc: string
) => void;

export type CloseModalFuction = () => void;

export default function DirectContainer() {
  return <DirectPresenter OrderNav={OrderNav} />;
}
