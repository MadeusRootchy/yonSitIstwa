import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../Components/AuthContext"; 
import styles from './Layout.module.css';


export default function Layout() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();


  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/story">Stories</Link></li>
          <li><Link to="/createstories">New Story</Link></li>
          <li><Link onClick={() => setIsAuthenticated(false)}>{isAuthenticated ? 'Logout' : ""}</Link>
          <Link to="/login">{isAuthenticated ? '' : "Login"}</Link></li>

        </ul>
      </nav>
      <main>
      
      </main>
      <Outlet />
    </>
  );
}
