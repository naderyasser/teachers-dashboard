import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Header</h1>
      <Outlet />
      <h1>footer</h1>
    </div>
  );
}

export default App;
