import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { orderSelectState } from "../../../state";

export default function HelpPresenter() {
  const orderType = useRecoilValue(orderSelectState);

  useEffect(() => {
    console.log("order-type", orderType);
  }, []);
  return <div>Help</div>;
}
