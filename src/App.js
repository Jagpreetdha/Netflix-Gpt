import Body from "./components/Body";
import {Provider} from "react-redux"
import appStore from "./utils.js/appStore";

function App() {
  return (
    <div className="overflow-hidden ">
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
