// Import components
import React from 'react';
import ItemGrid from './itemGrid';
import NotImplemented from './notImplemented';
import {Link} from 'react-router-dom';
import { Card, Image, Button, Container, Loader, Dimmer } from 'semantic-ui-react';
import FileModal from './fileModal';
// Import assets
import white_image from '../images/white-image.png';

// Import sample images
// This is only for demonstration purposes at the moment
// and will be removed in a future commit
import brace from '../images/sample_brace.jpg'
import gearbox from '../images/sample_gearbox.jpg'
import respirator from '../images/sample_respirator.jpg'
import scissors from '../images/sample_scissors.jpg'
import speculum from '../images/sample_speculum.jpg'

class FileGrid extends React.Component {
    constructor() {
        super();
        this.retrieveItems = this.retrieveItems.bind(this);
        this.state = {
            items: [],
            loading: true
        }
    }

    componentDidMount() {
        // Wrap in promise or async/await
        const files = this.retrieveItems();
        this.setState({
            items: files,
            loading: false
        });
    }

    /**
     * Retrieve JSON information about files availble for download
     * from the server. The server will run its own functions to
     * create this JSON.
     */
    retrieveItems = () => (
        // Call /api/files
    )


    /**
     * JSX template for translating an item into a card
     * @param {*} item containing information for a file to be
     *  displayed
     */
    fileTemplate = (item) => (
        <Card>
            <Image src={item.thumb_URI || white_image} />
            <Card.Content>
                <Card.Header>{item.name}</Card.Header>
                <Card.Meta>{item.size}</Card.Meta>
                <Card.Description>
                    {item.Description || 'No Description'}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                    <div className='ui two buttons'>
                        <FileModal
                            trigger={
                                <Button basic as={Link} to='' color='blue'>View Info</Button>
                            }
                            item={item}
                        />
                        {NotImplemented(
                            <Button basic as={Link} to='' color='green'>Download</Button>
                        )}
                    </div>
            </Card.Content>
        </Card>
    )

    render() {
        /* An instance of an item grid configured in the right */
        /* way. Or, if there are no files available from the   */
        /* server, an image declaring that there are no files  */
        /* to be downloaded                                    */
        return (
            <Container style={{ paddingTop: '7em' }}>
                <Dimmer active={this.state.loading}>
                    <Loader indeterminate>Finding files...</Loader>
                </Dimmer>
                <ItemGrid items={this.state.items} template={this.fileTemplate} />
            </Container>
        );
    }
}

export default FileGrid;