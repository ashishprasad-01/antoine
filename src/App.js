import "./App.css";
// import { Provider } from 'react-redux';
// import store from './store';
import Routes from "./routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Routes />
      <Toaster position="top-center" />
    </>
  );
}

export default App;
