import { Link, Outlet } from "react-router";

function App() {
  return (
    <div>
      <div className="flex items-center gap-10 mb-10 text-lg">
        <Link to={"/task"}>Task</Link>
        <Link to={"/user"}>User</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
