import { useState, type FC } from 'react'

export const DefaultViteApp: FC = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='font-dm text-h1'>
        We are fencers on a mission to make sports accessible for <b>everyone.</b>
      </h1>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
