
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';

const container = document.getElementById('root'); // Connected to my app to id of root
const root = createRoot(container);
root.render(<App />)