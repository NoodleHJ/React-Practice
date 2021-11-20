import { DECREMENT, INCREMENT } from "../constant";

export const increment = (data) => ({
  type: INCREMENT,
  data: data
});

export const decrement = (data) => ({
  type: DECREMENT,
  data: data
});

export const incrementAsync = (data, time) => {
  console.log("async", time);
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(data));
    }, time);
  };
};
