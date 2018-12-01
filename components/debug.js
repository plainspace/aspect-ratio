const Debug = ({ selectedRatio, wRatio, hRatio, width, height }) => {
  return (
    <div>
      <p>The ratio ID is: {selectedRatio}</p>
      <p>The width ratio is: {wRatio}</p>
      <p>The height ratio is: {hRatio}</p>
      <p>The current width is: {width}</p>
      <p>The current height is: {height}</p>
    </div>
  )
}

export default Debug
