import { Provider } from "react-redux";
import Counter from "./Components/Counter/Counter";
import store from "./Redux/Store";
import DynamicCounter from "./Components/DynamicCounter/DynamicCounter";

function App() {
  return (
    <Provider store={store}>
      <Counter></Counter>
      <DynamicCounter></DynamicCounter>
    </Provider>

  )
}

export default App;
