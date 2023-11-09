import StorySnippet from '../Components/Story/StorySnippet';


export default function PublicStories ({publicStories, handleReadClick,
     setReadingStory, readingStory,  } ) {


return (
    <div className="public-stories">
      {
        publicStories.map((story, index) => (
        <StorySnippet 
        key={index}
        story={story}
        handleReadClick={handleReadClick}
        setReadingStory={setReadingStory}
        readingStory={readingStory}
        isPublic='true'
        />
        ))
      }
    </div>
)

}