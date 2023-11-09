import React, { useState} from "react";
import EditStory from './EditStory';

export default function UpdateStory({ initialValues, onSubmit, onCancel }){
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  const [isPublic, setIsPublic] = useState(initialValues.isPublic);
  const [isAnonymous, setIsAnonymous] = useState(initialValues.isAnonymous);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedStory = {
      ...initialValues,
      title,
      content,
      isPublic,
      isAnonymous,
    };

    onSubmit(updatedStory);
  };

 
  return (
    <div className="update-story">      
      <EditStory 
      pageTitle={'Edit Story'}
      handleSubmit={handleSubmit}
      onCancel={onCancel}
      title={title}
      setTitle={setTitle}
      content={content}
      setContent={setContent}
      isPublic={isPublic}
      setIsPublic={setIsPublic}
      isAnonymous={isAnonymous}
      setIsAnonymous={setIsAnonymous}
      />
    </div>

  );
};

