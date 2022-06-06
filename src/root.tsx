import { App } from './components/app/app';

import './global.css';

export const Root = () => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Senishigure.Cloud</title>
      </head>
      <body>
        <App />
      </body>
    </html>
  );
};
