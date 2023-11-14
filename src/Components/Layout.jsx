import { Link, Outlet } from "react-router-dom";
import { useAuth } from './Authentication/AuthContext';
import { useTheme } from "./ThemeContext";
import {BsToggles} from 'react-icons/bs';

export default function Layout() {
  const {darkTheme, setDarkTheme} = useTheme()
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const toggleTheme = () => {
    if(darkTheme === true){
      setDarkTheme(false)
    }
    else{
        setDarkTheme(true)
    }
  }

  return (
    <>
    <div className="layout">
      <nav >
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/profile">Profile</Link></li>

          <li>
            <Link 
            onClick={() => setIsAuthenticated(false)}>{isAuthenticated ? 'Logout' : ""}
            </Link>
          </li>
          <li>
            <Link to="/login">{isAuthenticated ? '' : "Login"}</Link>
          </li>
          <li>
            <button onClick={toggleTheme}><BsToggles /></button>
          </li>
        </ul>
      </nav>

    </div>
    <Outlet />
    </>
  );
}
