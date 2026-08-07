function Counter({ count, onIncrement }) {
  return (
    <button onClick={onIncrement}>{count}</button>
  );
}
export default Counter;