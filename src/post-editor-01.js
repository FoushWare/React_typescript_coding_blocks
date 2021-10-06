const Editor = () => {
  return (
    <form>
      <label htmlFor="title">title</label>
      <input name="title" id="title" />

      <label htmlFor="content">content</label>
      <textarea name="content" id="content" />

      <label htmlFor="tags">tags</label>
      <textarea name="tags" id="tags" />

      <button>submit</button>
    </form>
  )
}

export {Editor}
