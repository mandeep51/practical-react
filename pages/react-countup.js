import React from 'react'
import CountUp from 'react-countup';

function Home() {
  return (
    <>
      <CountUp
  start={0}
  end={1000}
  duration={5.75}
  separator=" "
  decimals={4}
  decimal=","
  prefix="EUR "
  suffix=" left"
  onEnd={() => console.log('Ended! 👏')}
  onStart={() => console.log('Started! 💨')}
>
  {({ countUpRef, start }) => (
    <div>
      <span ref={countUpRef} />
      <button onClick={start}>Start</button>
    </div>
  )}
</CountUp>
    </>
  )
}

export default Home
