export function App(props) {
  const { store } = props;

  return (
    <div>
      <div>{store.getState()}</div>
      <button
        type="button"
        onClick={() => store.dispatch({ type: "INCREMENT" })}
      >
        plus
      </button>
      <button
        type="button"
        onClick={() => store.dispatch({ type: "DECREMENT" })}
      >
        minus
      </button>
      <button type="button" onClick={() => store.dispatch({ type: "ZERO" })}>
        zero
      </button>
    </div>
  );
}
