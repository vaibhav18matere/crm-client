import "./App.css";
import Homepage from "./pages/login/Homepage";
import DefaultLayout from "./components/layout/DefaultLayout";

function App() {
  return (
    <div className="App">
      <Homepage />
      <DefaultLayout />
    </div>
  );
}

export default App;
