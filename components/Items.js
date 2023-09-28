import React from 'react'

function Items({currentItems}) {
  return (
    <div>
       {currentItems &&
        currentItems.map((item) => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </div>
  )
}

export default Items
