import React from 'react';
import { Form, Button} from 'semantic-ui-react';

/**
 * File submission inputs
 * 
 * Pass in 
 */
class FileSubmit extends React.Component {

    isUploadDisabled = () => (
        this.props.disableUpload ||
        this.props.cleanState()
    )
    
    isClearDisabled = () => (
        this.props.clearFields == null ||
        this.props.cleanState()
    )

    render = () => (
        <Form.Field className='ui two buttons' key='buttons'>
            <Button 
                basic
                color='blue'
                disabled={this.isUploadDisabled()}
                onClick={this.props.submission}>
                Upload
            </Button>
            <Button
                basic 
                color='red'
                disabled={this.isClearDisabled()}
                onClick={this.props.clearFields}>
                Reset Customization
            </Button>
        </Form.Field>
    )
}

export default FileSubmit;