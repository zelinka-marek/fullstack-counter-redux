import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import { App } from "./app";
import "./styles/index.css";

function counterReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT": {
      return state + 1;
    }
    case "DECREMENT": {
      return state - 1;
    }
    case "ZERO": {
      return 0;
    }
    default: {
      return state;
    }
  }
}

const store = createStore(counterReducer);

const root = createRoot(document.getElementById("root"));

function render() {
  root.render(
    <StrictMode>
      <App store={store} />
    </StrictMode>
  );
}

render();
store.subscribe(render);
