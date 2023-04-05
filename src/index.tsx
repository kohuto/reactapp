import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Page from './Page';


import './index.css';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
       <StrictMode>
              <Page />
       </StrictMode>
);

