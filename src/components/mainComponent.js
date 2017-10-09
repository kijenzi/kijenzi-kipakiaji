// Import components
import React from 'react';
import Navbar from './navbar';
import FileGrid from './fileGrid';

class MainComponent extends React.Component {
    render() {
        return(
            <div>
                <Navbar />
                <FileGrid />
            </div>
        )
    }
}

export default MainComponent;