import { atom } from "recoil";

export const successState = atom({
  key: "successState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
