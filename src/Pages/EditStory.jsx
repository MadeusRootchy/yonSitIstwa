


export default function EditStory ({pageTitle,handleSubmit, onCancel, title, setTitle, content, setContent, isPublic, setIsPublic, isAnonymous, setIsAnonymous}) {
   return (
   <div className="edit-story">
      <h3>{pageTitle}</h3>
      <form onSubmit={handleSubmit} >
        <div className="form-field">
          <input
            className="form-input"
            placeholder="Title..."
            type="text"
            value={title}
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <textarea
            className="form-textarea"
            placeholder="Write a story..."
            value={content}
            id="content"
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
        <input
          type="checkbox"
          id="Public"
          checked={isPublic}
          onChange={() => setIsPublic(!isPublic)}
          />
            <label htmlFor="public">
            Public
            </label>
        </div>
        <div className="form-field">
        <input
            type="checkbox"
            id="Anonymous"
            checked={isAnonymous}
            onChange={() => setIsAnonymous(!isAnonymous)}
          />
            <label htmlFor="anonymous">
            Anonymous
            </label>
        </div>
        { pageTitle === "New Story" ?
            (<div className="btns">
            <button type="submit" id="create" className="btn-save">
            Post 
            </button>
            </div>)
            :
            (<div className="btns">
            <button type="submit" className="btn-save">
                Save Changes
            </button>
            <button type="button" className="btn-cancel" onClick={onCancel}>
                Cancel
            </button>
            </div>
            )
        }
      </form>
    </div>
    )


    
}