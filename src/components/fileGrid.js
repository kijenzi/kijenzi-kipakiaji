// Import components
import React from 'react';
import ItemGrid from './itemGrid';
import { Card, Image, Button, Container, Loader, Dimmer } from 'semantic-ui-react';
// Import assets
import white_image from '../images/white-image.png';

class FileGrid extends React.Component {
    constructor() {
        super();
        this.retrieveItems = this.retrieveItems.bind(this);
        this.state = {
            items: [],
            loading: true
        }
    }

    componentWillMount() {
        // Wrap in promise or async/await
        const files = this.retrieveItems();
        this.setState({
            items:files,
            loading: false
        });
    }

    /**
     * Retrieve JSON information about files availble for download
     * from the server. The server will run its own functions to
     * create this JSON
     */
    retrieveItems = () => (
        [
            {
                name: 'TestFile1.gcode',
                size: '400kb',
                thumb_URI: null,
                file_URI: null
            },
            {
                name: 'TestFile2.gcode',
                size: '123kb',
                thumb_URI: null,
                file_URI: null
            },
            {
                name: 'TestFile3.gcode',
                size: '934kb',
                thumb_URI: null,
                file_URI: null
            },
            {
                name: 'TestFile4.gcode',
                size: '156kb',
                thumb_URI: null,
                file_URI: null
            },
            {
                name: 'TestFile5.gcode',
                size: '523kb',
                thumb_URI: null,
                file_URI: null
            }
        ]
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
                        <Button basic link color='blue'>View Info</Button>
                        <Button basic link color='green'>Download</Button>
                    </div>
            </Card.Content>
        </Card>
    )

    render() {
        /*An instance of an item grid configured in the right */
        /*way. Or, if there are no files available from the   */
        /*server, an image declaring that there are no files  */
        /*to be downloaded                                    */ 
        return (
            <Container style={{ paddingTop: '7em' }}>
                <Dimmer active>
                    <Loader indeterminate>Finding files...</Loader>
                </Dimmer>
                <ItemGrid items={this.state.items} template={this.fileTemplate} />
            </Container>
        );
    }
}

export default FileGrid;