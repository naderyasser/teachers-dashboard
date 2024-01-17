import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <h1 className="text-red-400 text-5xl">footer</h1>
    </div>
  );
}

export default App;
