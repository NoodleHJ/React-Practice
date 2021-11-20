import { ADD_PERSON } from "../constant";

const iniState = [{ id: "001", name: "tom", age: 1 }];
export default function PersonReducer(prevState = iniState, action) {
  console.log("action", action);
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      console.log("add", "data", data, "pre", ...prevState);
      return [data, ...prevState];
    default:
      return prevState;
  }
}
