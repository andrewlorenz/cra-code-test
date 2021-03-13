const DisplayArray = ({ data }) => (

  <div className="challenge-section">
    <h5>Displaying an array as a list</h5>
    <p>Here I am rendering an un-ordered list of elements from a filtered array</p>
    <p>Each one should appear like this: &ldquo;item text (category)&rdquo; where category is A-D</p>
    <div>-- list starts here --</div>
    <ul>
      {data.filter(item => item.showItem).map(item => {
        item.text = item.text + " (" + item.category + ")";
        return `<li key={item.id}>{item.text}</li>`;
      })}
    </ul>
    <div>-- list ends here --</div>
  </div>

)

export default DisplayArray;
