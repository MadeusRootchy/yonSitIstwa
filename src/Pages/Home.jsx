import StoryList from '../Components/Story/StoryList';
import CreateStory from '../Components/Story/CreateStory';
import Login from '../Components/Authentication/Login';
import { useAuth } from '../Components/Authentication/AuthContext';

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
