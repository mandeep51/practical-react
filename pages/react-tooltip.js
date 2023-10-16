import React from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 

function Home() {
  return (
    <>
      <Tippy content="Hello">
    <button>My button</button>
  </Tippy>
    </>
  )
}

export default Home
