export const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: null,
  pointCounter: 0,
};

export const handleNum = (state, value) => {
  if (state.currentValue === "0" && value !== ".") {
    return {
      ...state,
      currentValue: `${value}`,
    };
  }
  if (value === "." && state.pointCounter !== 0) {
    console.log("pointCounter", state.pointCounter);
    return state;
  }
  if (value === ".") {
    return {
      ...state,
      currentValue: `${state.currentValue}${value}`,
      pointCounter: 1,
    };
  }
  return {
    ...state,
    currentValue: `${state.currentValue}${value}`,
  };
};

export const handleEqual = (state) => {
  const { currentValue, previousValue, operator } = state;
  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  const resetState = {
    operator: null,
    previousValue: null,
    pointCounter: 0,
  };
  switch (operator) {
    case "/":
      console.log("entra aqui");
      return {
        currentValue: previous / current,
        ...resetState,
      };
    case "*":
      return {
        currentValue: previous * current,
        ...resetState,
      };
    case "-":
      return {
        currentValue: previous - current,
        ...resetState,
      };
    case "+":
      return {
        currentValue: previous + current,
        ...resetState,
      };
    case "%":
      return {
        currentValue: previous % current,
        ...resetState,
      };
    default:
      return state;
  }
};

const calculator = (type, value, state) => {
  switch (type) {
    case "number":
      return handleNum(state, value);
    case "C":
      return initialState;
    case "%":
      return {
        ...state,
        currentValue: `${parseFloat(state.currentValue) * 0.01}`,
      };
    case "minmas":
      return {
        ...state,
        currentValue: `${parseFloat(state.currentValue) * -1}`,
      };
    case "operator":
      return {
        operator: value,
        previousValue: state.currentValue,
        currentValue: "0",
        pointCounter: 0,
      };
    case "equal":
      return handleEqual(state);
    default:
      return state;
  }
};

export default calculator;
