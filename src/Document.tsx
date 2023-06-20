import { render } from 'preact-render-to-string'
import { Home } from './Home'

export function Document() {
  return (
    <html>
      <head>
        <title>Home</title>
      </head>
      <body>
        <Home/>
        <div id="root"></div>
        <script src="/js/bundle.js"></script>
      </body>
    </html>
  );
}

export function renderDocument() {
  return render(<Document />);
}