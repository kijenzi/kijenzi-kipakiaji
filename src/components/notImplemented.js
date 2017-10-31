// Import Components
import React from 'react';
import {Popup} from 'semantic-ui-react';

const NotImplemented = (component) => (
	<Popup
		trigger={component}
		content='This feature has not yet been implemented!'
		on='click'
		hideOnScroll
	/>
)

export default NotImplemented;