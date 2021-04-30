function Button() {
  const altStyles = [{
    color: 'black',
    background: 'white'
},{
    color: 'white',
    background: 'black'
}]
  const buttonList = [
      {
        text : "Original",
        style: altStyles[0],
      },
      {
        text : "Grayscale",
        style: altStyles[1],
      },
      {
        text : "Romantic",
        style: altStyles[0],
      },
      {
        text : "Tropical",
        style: altStyles[1],
      }];
  return buttonList.map((filter) => (
    <button key={filter.text} style={filter.style} type="button" className="btn" id={filter.text}>
      {filter.text}
    </button>
  ));
}

export default Button;
