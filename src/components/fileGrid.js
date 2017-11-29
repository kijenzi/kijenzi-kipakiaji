// Import components
import React from 'react';
import { Button, Container, Grid, Header } from 'semantic-ui-react';
import NewFileModal from './newFileModal';

class FileGrid extends React.Component {
    render() {
        return (
            <Container style={{ paddingTop: '40vh', paddingBottom: '40vh' }}>
                <Grid verticalAlign='middle' columns={1} centered>
                    <Grid.Row>
                        <Header as='h2'>
                            Choose a type of file to upload
                        </Header>
                    </Grid.Row>
                    <Grid.Row>
                        <Button.Group>
                            <NewFileModal
                            trigger={
                                <Button primary>Static</Button>
                            }
                            type='static'
                            />
                            <Button.Or />
                            <NewFileModal
                            trigger={
                                <Button primary>Customizable</Button>
                            }
                            type='customizable'
                            />
                        </Button.Group>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

export default FileGrid;