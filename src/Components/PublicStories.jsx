import StorySnippet from './StorySnippet';


export default function PublicStories ({publicStories, handleReadClick,
     setReadingStory, readingStory,  } ) {






return (
    <div className="public-stories">
    <h2>Public Stories</h2>
      {publicStories.map((story, index) => (
        <StorySnippet 
        key={index}
         story={story}
         handleReadClick={handleReadClick}
         setReadingStory={setReadingStory}
         readingStory={readingStory}
         isPublic='true'
         />
      
      ))}
    </div>
)

}