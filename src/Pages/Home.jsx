import StoryList from "./StoryList";
import CreateStory from "./CreateStory";
import Login from './Login';
import { useAuth } from "../Components/AuthContext"; 

export default function Home() {
  const { isAuthenticated } = useAuth();


  return (
    <div className="home">
      <section className="others">
      <Login />
      </section>
      <section className="all-stories">
        {
          isAuthenticated && (
          <CreateStory />
        )
        }
        <StoryList />
      </section>
    </div>
  );
}
