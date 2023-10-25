import { Route, Routes, Navigate } from "react-router";
import { Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NotFound from "./NotFound";
import Layout from "../Components/Layout";
import CreateStory from "./CreateStory";
import { useAuth } from "../Components/AuthContext"; 
import StoryList from "./StoryList";

export default function Main() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/story" element={ <StoryList /> } />
        <Route 
        path="/createstories" 
        element = {
          isAuthenticated ? <CreateStory /> : 
          <Link 
          to="/login"
          style = {{
            textAlign: "center",
            textTransform: "uppercase",
            fontSize: "40px",
            cursor: "pointer",
            fontWeight: "bold",
            color:"#00f",
          }}
          >
          {
            isAuthenticated ? '' : 
            <p>
              Go to the login page
            </p>
          }
          </Link>
        } 
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

