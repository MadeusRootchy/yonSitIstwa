import { useState } from "react";
import  {RiDeleteBin4Fill} from 'react-icons/ri';
import {AiFillEdit} from 'react-icons/ai';
import {MdOutlineExpandMore} from 'react-icons/md';
import {MdOutlinePublic} from 'react-icons/md';


export default function StorySnippet ({key, story, handleReadClick,
     readingStory, setReadingStory, deleteStory, handleEditClick, isPublic} ) { 

    return (
       
        <div key={key} className="story-snippet">

            { isPublic === 'true'?
            
                (<div> <h3>{story.title} </h3>
                <p> {story.content.slice(0, 100)}... </p>
                <div  className="story-actions">
                <button  
                onClick={() => handleReadClick(story)}>Read more</button>
                </div>
                {readingStory === story && ( 
                <div  className="story-details">
                <p>{story.content}</p>
                    <p>Author : {story.author}</p>
                    <button 
                    onClick={() => setReadingStory(null)}>Close</button>
                </div>
                )}
                </div>):
                 ( <div><h3>{story.title}</h3>
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
                <span>{story.isPublic && <MdOutlinePublic /> }</span>
                </div>
                {
                readingStory === story && (
                <div  className="story-details">
                    <p>{story.content}</p>
                    <h5>Author : {story.author}</h5><br />
                    <button
                    onClick={() => setReadingStory(null)}
                    >
                    Close
                    </button>
                </div>
                )
                }
                 </div>)
            }
        </div>      
    
    )

}