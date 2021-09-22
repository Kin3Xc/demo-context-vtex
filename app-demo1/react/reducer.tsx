import { GET_NAME, GET_VALUE } from "./types";

export default (state: any, action: any) => {
  const { payload, type } = action;

  switch (type) {
    case GET_NAME:
      return {
        ...state,
        name: payload,
      };
    case GET_VALUE:
      return {
        ...state,
        value: payload,
      };
    default:
      return state;
  }
};
