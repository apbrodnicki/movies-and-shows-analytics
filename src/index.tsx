import { App } from 'App';
import React from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root') as Element;

createRoot(rootElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
