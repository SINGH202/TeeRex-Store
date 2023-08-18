import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../src/store";
import { decrement, increment } from "./counterSlice";

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        {count}
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}
