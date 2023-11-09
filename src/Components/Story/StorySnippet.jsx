import Profile from '../Authentication/Profile';
import  {RiDeleteBin4Fill} from 'react-icons/ri';
import {AiFillEdit} from 'react-icons/ai';
import {MdOutlinePublic} from 'react-icons/md';



export default function StorySnippet ({key, story, handleReadClick,
    readingStory, setReadingStory, deleteStory, handleEditClick, isPublic} ) { 
   

    return (
        <div key={key} className="story-snippet">

            { isPublic === 'true'?
            (
            <div> 
                <div>
                <Profile user={story.author}/>
                <p>{story.content.slice(0, 100)}...</p>
                <p className='status'>{story.isPublic && <MdOutlinePublic /> }</p> 
                <div  className="story-actions">
                    <button  
                    onClick={() => handleReadClick(story)}>
                    Read more
                    </button>
                </div>
                </div>
            {
                readingStory === story && ( 
                <div  className="story-details">
                <p>{story.content}</p>
                    <button 
                    onClick={() => setReadingStory(null)}>Close</button>
                </div>
                )
            }
            </div>
            )
            :
            ( 
            <div>
                <Profile user={'Me'}/>
                <p>{story.content.slice(0, 100)}...</p>
                <div  className="story-actions">
                    <button
                        onClick={() => deleteStory(story.id)}
                    >
                    <RiDeleteBin4Fill />
                    </button>
                    <button
                        onClick={() => handleEditClick(story)}
                    >
                    <AiFillEdit />
                    </button>
                    <button
                        onClick={() => handleReadClick(story)}
                    >
                        Read more
                    </button>
                </div>
                {
                    readingStory === story &&
                    (
                    <div  className="story-details">
                        <p>{story.content}</p>
                        <button
                        onClick={() => setReadingStory(null)}
                        >
                        Close
                        </button>
                    </div>
                    )
                }
            </div>
            )
        }
        </div>      
    
    )

}