import { Link, NavLink } from "react-router-dom";

function Layout({ children }) {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="container topbar__content">
          <Link className="brand" to="/">
            Event Registration Platform
          </Link>
          <nav className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/admin">Admin Dashboard</NavLink>
          </nav>
        </div>
      </header>
      <main className="container page-content">{children}</main>
    </div>
  );
}

export default Layout;
