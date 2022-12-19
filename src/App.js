import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./Components/Routes/Routes";
import { store } from "./Redux/Store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
