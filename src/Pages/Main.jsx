import { Route, Routes, Navigate } from "react-router";
import { Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NotFound from "./NotFound";
import CreateStory from "./CreateStory";
import StoryList from "./StoryList";
import Layout from "../Components/Layout";
import { useAuth } from "../Components/AuthContext"; 
import { useTheme } from "../Components/ThemeContext";

export default function Main() {
  const {darkTheme} = useTheme();
  const { isAuthenticated } = useAuth();

  return (
  // <div className="main" style={{backgroundColor: darkTheme}}>
  <div className="main"> 
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" 
        element = {isAuthenticated ? <Navigate to="/" /> : <Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/story" element={ <StoryList /> } />
        <Route 
        path="/createstories" 
        element = {
          isAuthenticated ? <CreateStory /> : 
          <Link to="/login">
          {
            isAuthenticated ? '' : <p> Go to the login page</p>
          }
          </Link>
        } 
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
  );
}

