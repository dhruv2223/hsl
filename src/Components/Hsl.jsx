import { useReducer } from "react";

const limit100 = (num, max) => (num < 0 ? 0 : num > max ? max : num);
let step = 20;
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_H":
      return Object.assign({}, state, { h: (state.h + step) % 360 });

    case "DECREMENT_H":
      return Object.assign({}, state, { h: (state.h - step) % 360 });

    case "INCREMENT_S":
      return Object.assign({}, state, { s: (state.s + step) % 360 });
    case "DECREMENT_S":
      return Object.assign({}, state, {}, state, { s: (state.s - step) % 360 });
    case "INCREMENT_L":
      return Object.assign({}, state, { l: (state.l + step) % 360 });
    case "DECREMENT_L":
      return Object.assign({}, state, { l: (state.l - step) % 360 });
    default:
      return state;
  }
};

export const Hsl = () => {
  const [{ h, s, l }, dispatch] = useReducer(reducer, { h: 50, s: 50, l: 50 });
  return (
    <div>
      <h1
        style={{
          color: `hsl(${(h + 180) % 360}, ${s}%, ${(l + 50) % 100}%)`,
          backgroundColor: `hsl(${h}, ${s}%, ${l}%)`,
        }}
        className="text-center p-4"
      >
        This text should always be pretty close to readable
      </h1>
      <div>
        <div className="flex justify-around p-4">
          <div>Hue</div>
          <div>
            <button
              type=""
              onClick={() => {
                dispatch({ type: "INCREMENT_H" });
              }}
              className="pl-4 pr-4 bg-gray-200 mr-4"
            >
              +
            </button>
            <button
              type=""
              onClick={() => {
                dispatch({ type: "DECREMENT_H" });
              }}
              className="pl-4 pr-4 bg-gray-200 mr-4"
            >
              -
            </button>
          </div>
        </div>

        <div className="flex justify-around p-4">
          <div>Saturation</div>
          <div>
            <button
              type=""
              onClick={() => {
                dispatch({ type: "INCREMENT_S" });
              }}
              className="pl-4 pr-4 bg-gray-200 mr-4"
            >
              +
            </button>
            <button
              type=""
              onClick={() => {
                dispatch({ type: "DECREMENT_S" });
              }}
              className="pl-4 pr-4 bg-gray-200 mr-4"
            >
              -
            </button>
          </div>
        </div>

        <div className="flex justify-around p-4">
          <div>Hue</div>
          <div>
            <button
              type=""
              onClick={() => {
                dispatch({ type: "INCREMENT_L" });
              }}
              className="pl-4 pr-4 bg-gray-200 mr-4"
            >
              +
            </button>
            <button
              type=""
              onClick={() => {
                dispatch({ type: "DECREMENT_L" });
              }}
              className="pl-4 pr-4 bg-gray-200 mr-4"
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
