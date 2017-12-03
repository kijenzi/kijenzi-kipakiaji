import React from 'react';
import { Form, Button} from 'semantic-ui-react';
import NotImplemented from './notImplemented';

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
            {NotImplemented(<Button 
                                basic
                                color='blue'
                                disabled={this.isUploadDisabled()}>
                                Upload
                            </Button>)}
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