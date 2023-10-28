
import UpdateStory from '../Pages/UpdateStory';
import StorySnippet from './StorySnippet';



export default function UserStories ({userStories, isAuthenticated,
     editingStory, setEditingStory, updateStory, handleCancelEdit,
      deleteStory, handleEditClick, handleReadClick, readingStory, 
    setReadingStory } ) {



    return (
        <div className="my-stories">
        <h2>My Stories</h2>
          {!isAuthenticated? '' : userStories.map((story, index) => (
            <div key={index} >
              {
              editingStory === story ? (
                <UpdateStory
                  initialValues={story}
                  onSubmit={(updatedStory) => {
                    updateStory(story.id, updatedStory);
                    setEditingStory(null);
                  }}
                  onCancel={handleCancelEdit}
                />
              ) : (
                <StorySnippet
                key={index}
                story={story}
                handleReadClick={handleReadClick}
                setReadingStory={setReadingStory}
                readingStory={readingStory}
                deleteStory={deleteStory}
                handleEditClick={handleEditClick}
                isPublic='false'
                />
               
              )}
            </div>
          ))}
        </div>
    )
}


