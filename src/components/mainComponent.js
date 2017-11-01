// Import components
import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Navbar from './navbar';
import FileGrid from './fileGrid';
import {Message} from 'semantic-ui-react';

class MainComponent extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <Navbar />
                    <Route exact path='/' component={FileGrid} />
                    <Message warning>
                        <Message.Header>This Page is a Work in Progress!</Message.Header>
                    </Message>
                </div>
            </Router>
        )
    }
}

export default MainComponent;