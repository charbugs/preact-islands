import { Counter } from './islands/Counter'

export function Home() {
  return (
    <>
      <h1>Home</h1>
      <Counter start={0} />
    </>
  )
}