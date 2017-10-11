// Import components
import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Navbar from './navbar';
import FileGrid from './fileGrid';

class MainComponent extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <Navbar />
                    <Route exact path='/' component={FileGrid} />
                </div>
            </Router>
        )
    }
}

export default MainComponent;