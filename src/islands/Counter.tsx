import { render, FunctionComponent } from 'preact'
import { useState } from 'preact/hooks'

if (typeof window !== 'undefined') {

  function TheCounter() {
    const [count, setCount] = useState(0);

    function doit() {
      setCount(count + 1);
    }

    return (
      <div>
        <p>Hello!</p>
        <button onClick={doit}>Click</button>
        <p>Count: {count}</p>
      </div>
    );
  }

  class WcCounter extends HTMLElement {
    connectedCallback() {
      render(<TheCounter />, this)
    }
  }

  window.customElements.define('wc-counter', WcCounter)
}


interface Props {
  start: number
}

export function Counter(props: Props) {
  return (
    // @ts-ignore
    <wc-counter></wc-counter>
  )
}