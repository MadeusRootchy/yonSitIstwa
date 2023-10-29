import StoryList from "./StoryList";
import CreateStory from "./CreateStory";
import Login from './Login';

export default function Home() {

  return (
    <div className="home">
      <section className="others">
        <Login />
      </section>
      {/* <div className="separator">*</div> */}
      <section className="all-stories">
        <CreateStory />
        <StoryList />
      </section>

    </div>
  );
}
