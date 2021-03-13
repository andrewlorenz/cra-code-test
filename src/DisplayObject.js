const DisplayObject = ({ data }) => (

  <div className="challenge-section">
    <h5>Displaying an object as a list</h5>
    <p>Here I am rendering an ordered list of entries from a object filtered by a value in the data</p>
    <p>Each one should appear like this: &ldquo;item text (category)&rdquo; where category is A-D</p>
    <div>-- list starts here --</div>
    <ol>
      {Object.entries(data).map(([id, item]) => {
        const { text, category, showitem } = item;
        if (showitem) return (
          <li>{text} ({category})</li>
        )
      })}
    </ol>
    <div>-- list ends here --</div>
  </div>

)

export default DisplayObject;
