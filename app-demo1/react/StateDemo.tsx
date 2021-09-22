import React, { useReducer } from "react";

import Context from "./context";
import Reducer from "./reducer";

import { GET_NAME, GET_VALUE } from "./types";

const StateDemo = (props: any) => {
  const initialState = {
    name: 'Hola',
    value: 'Mundo',
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const getName = async () => {
    try {
      dispatch({ type: GET_NAME, payload: 'Elkin Urango' });
    } catch (error) {
      console.error(error);
    }
  };

  const getValue = async () => {
    try {
      dispatch({ type: GET_VALUE, payload: 'Remote Software Developer'});
    } catch (error) {}
  };

  return (
    <Context.Provider
      value={{
        name: state.name,
        value: state.value,
        getName,
        getValue,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default StateDemo;
