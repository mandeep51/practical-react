import React, { useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";



function Spinners() {
    let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("blue");
  return (
    <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />

      <ClipLoader
        color={color}
        loading={loading}
       /*  cssOverride={override} */
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Spinners

/* https://www.npmjs.com/package/react-spinners */
