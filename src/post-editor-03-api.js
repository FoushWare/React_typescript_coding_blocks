import React from 'react'
import {savePost} from './api'
const Editor = () => {
  const [isSaving, setIsSaving] = React.useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    // get the input values
    const {title, content, tags} = e.target.elements
    const newPost = {
      title: title.value,
      content: content.value,
      tags: tags.value.split(',').map(t => t.trim()),
    }
    setIsSaving(true)
    savePost(newPost)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">title</label>
      <input name="title" id="title" />

      <label htmlFor="content">content</label>
      <textarea name="content" id="content" />

      <label htmlFor="tags">tags</label>
      <textarea name="tags" id="tags" />
      <button type="submit" disabled={isSaving}>
        Submit
      </button>
    </form>
  )
}

export {Editor}
