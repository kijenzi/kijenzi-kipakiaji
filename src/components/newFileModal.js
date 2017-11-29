// Import components
import React from 'react';
import { Image, Modal, Header, Input, Form, Button, Icon, Divider} from 'semantic-ui-react';
import NotImplemented from './notImplemented';

// Import assets
import white_image from '../images/white-image.png';

class FileModal extends React.Component {

	constructor() {
		super();
		this.state = {
			filename: '',
			description: '',
			file: null,
			thumbnail: null,
			variables: null
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleImageChange = (event) => {
		// Allow further async functions to proceed
		event.persist();
		// Setup a file reader to preview the user-selected image
		let file = new FileReader();
		file.readAsDataURL(event.target.files[0]);
		file.onload = (fileLoaded) => {
			// When the user's image is loaded, put it in state and display it
			this.setState({[event.target.name]: fileLoaded.target.result})
		}
	}

	handleFileChange = (event) => {
		this.setState({
			file: event.target.value,
			filename: event.target.files[0].name
		})
	}

	handleChange = (event) => (
		this.setState({[event.target.name]: event.target.value})
	);

	clearFields = () => {
		this.setState({
			file: null,
			thumbnail: null,
			filename: '',
			description: ''
		})
	}

	/**
	 * Generate form inputs based on an item's parameterized variables
	 *
	 * @param  {[Object]} item An item that should have forms generated for it
	 * @return {[Array]} An array of Form.Field elements
	 */
	generateForms = () => {

		let inputs = [];

		// Generate the default inputs; name, description, thumbnail
		inputs.push(
			<Form.Field key='File'>
				<label htmlFor="file" style={{cursor: 'pointer'}}>
					<Icon name="file outline" size="big"/>
					Select File to upload
					<Input
						onChange={this.handleFileChange}
						name='file'
						id='file'
						type='file'
						style={{display: 'None'}} 
					/>
				</label>
			</Form.Field>
		)
		inputs.push(
			<Form.Field key='Thumbnail'>
				<label htmlFor="thumbnail" style={{cursor: 'pointer'}}>
					<Icon name="image" size="big"/>
					Select Thumbnail image
					<Input
						onChange={this.handleImageChange}
						name='thumbnail'
						id='thumbnail'
						type='file'
						style={{display: 'None'}} 
					/>
				</label>
			</Form.Field>
		)
		inputs.push(
			<Form.Field key='FileName'>
				<label>Filename</label>
				<Input
					onChange={this.handleChange}
					placeholder='Enter a filename'
					value={this.state.filename}
					name='filename' 
				/>
			</Form.Field>
		)
		inputs.push(
			<Form.Field key='Description'>
				<label>File Description</label>
				<Input
					onChange={this.handleChange}
					placeholder='Enter a file description'
					value={this.state.description}
					name='description' 
				/>
			</Form.Field>
		)
		inputs.push(
			<Form.Field className='ui two buttons' key={inputs.length}>
				{NotImplemented(<Button basic color='blue'>Upload</Button>)}
				<Button basic color='red' onClick={this.clearFields}>Reset Customization</Button>
			</Form.Field>
		)

		return inputs;
	}

	render() {
		/* File information popup                                                */
		/* Note: the prop, 'trigger', is the element that will invoke this popup */
		/* So yes, you wrap the calling button in this element...                */
		return(
			<Modal trigger={this.props.trigger} closeIcon>
				<Modal.Header>Upload {this.props.type} File Type</Modal.Header>
				<Modal.Content>
					<Header as="h2">File Preview</Header>
					<Header as='h3'>
						Filename: <span className='filename'>{this.state.filename || 'New File'}</span>
					</Header>
				</Modal.Content>
				<Modal.Content image>
					<Image centered size='medium' src={this.state.thumbnail || white_image}/>
				</Modal.Content>
				<Modal.Content>
					<Modal.Description>
						{this.state.description || 'No Description'}
					</Modal.Description>
				</Modal.Content>
				<Divider />
				<Modal.Content>
					<Header as='h2'>File Customization</Header>
					<Form>
						{this.generateForms()}
					</Form>
				</Modal.Content>
			</Modal>
		)
	}
}

export default FileModal;
