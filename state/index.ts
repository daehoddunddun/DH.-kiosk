import { atom } from "recoil";
export const orderSelectState = atom({
  key: "pageNameState",
  default: "",
});

export const drinkSelectState = atom({
  key: "drinkSelectState",
  default: { title: "", img: "", desc: "" },
});
