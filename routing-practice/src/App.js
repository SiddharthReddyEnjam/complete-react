import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <h1>Welcome to the Tours</h1>
      <nav className="app-nav">
        <NavLink
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "red" : "",
              padding: "5px 1rem",
              backgroundColor: "#fff",
              borderRadius: "10px",
              textDecoration: "none",
            };
          }}
          to="/home"
          className="link"
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "red" : "",
              padding: "5px 1rem",
              backgroundColor: "#fff",
              borderRadius: "10px",
              textDecoration: "none",
            };
          }}
          to="/about"
          className="link"
        >
          About
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "red" : "",
              padding: "5px 1rem",
              backgroundColor: "#fff",
              borderRadius: "10px",
              textDecoration: "none",
            };
          }}
          to="/login"
          className="link"
        >
          Login
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
