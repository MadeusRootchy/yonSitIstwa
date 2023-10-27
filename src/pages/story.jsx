import useStoryCRUD from "../Components/Action";

const Story = ({ storyId }) => {
  const storageKey = 'stories';
  const { readStoriesById } = useStoryCRUD(storageKey);

  const story = readStoriesById(storyId);

  if (!story) {
    return <div className={"error"}>Story not found</div>;
  }

  return (
    <div className="story">
      <div className="story-container">
        <div className="content">{story.content}</div>
        <div className="author">Author: {story.author}</div>
        <div className="public">Public: {story.isPublic ? "Yes" : "No"}</div>
        <div className="anonymous">Anonymous: {story.isAnonymous ? "Yes" : "No"}</div>
      </div>
    </div>
  );
};

export default Story;
