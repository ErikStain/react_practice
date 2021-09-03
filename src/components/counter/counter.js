import { useState } from 'react'

function Counter() {
  const [counter, setCounter] = useState(0)
  const [modal, showModal] = useState(false)
  return (
    <section>
      <div>
        <button
          onClick={() => {
            return setCounter(counter - 1)
          }}
        >
          Click less
        </button>
        <p>{counter}</p>
        <button
          onClick={() => {
            return setCounter(counter + 1)
          }}
        >
          Click more
        </button>
      </div>
    </section>
  )
}

export default Counter
