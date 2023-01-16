import DirectPresenter from "./DirectPresenter";
import OrderNav from "../../common/OrderNav";

export interface NavComponentType {
  OrderNav: React.FC;
}

export default function DirectContainer() {
  return <DirectPresenter OrderNav={OrderNav} />;
}
