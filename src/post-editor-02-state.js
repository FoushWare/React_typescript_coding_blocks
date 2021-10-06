import React from 'react'
const Editor = () => {
  const [isSaving, setIsSaving] = React.useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setIsSaving(true)
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
