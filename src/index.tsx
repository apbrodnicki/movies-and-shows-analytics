import { App } from 'App';
import React from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root') as Element).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
