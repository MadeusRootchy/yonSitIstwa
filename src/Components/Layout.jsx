import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../Components/AuthContext"; 
import { Themes } from "./Themes";


export default function Layout() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  return (
    <>
    <div className="layout">
      <nav >
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li>
            <Link 
            onClick={() => setIsAuthenticated(false)}>{isAuthenticated ? 'Logout' : ""}
            </Link>
          </li>
          <li>
            <Link to="/login">{isAuthenticated ? '' : "Login"}</Link>
          </li>
        </ul>
      </nav>

    </div>
    <Outlet />
    </>
  );
}
