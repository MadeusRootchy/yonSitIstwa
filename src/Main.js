import { Route, Routes} from "react-router";
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Layout from './Components/Layout';
import { useAuth } from './Components/Authentication/AuthContext';
import { useTheme } from './Components/ThemeContext';
import Profile from "./Pages/Profile";

export default function Main() {
  const {darkTheme, setDarkTheme} = useTheme();
  const { isAuthenticated } = useAuth();

  return (
  <div className={`main ${darkTheme===false ? 'light' : 'dark'}`}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Profile" element={<Profile />}/>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
  );
}

