// Import components
import React from 'react';
import { Image, Modal, Header, Input, Form, Button, Icon, Divider, Dropdown} from 'semantic-ui-react';
import FileSubmit from './fileSubmit';

// Import assets
import white_image from '../images/white-image.png';

class FileModal extends React.Component {

	constructor() {
		super();
		this.state = this.getInitialState();
		this.handleChange = this.handleChange.bind(this);
		this.generateCustomForms = this.generateCustomForms.bind(this);
		this.clearFields = this.clearFields.bind(this);
		this.isStateClean = this.isStateClean.bind(this);
		this.isValidFile = this.isValidFile.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	/**
	 * Definition of initial newFileModal state
	 */
	getInitialState = () => (
		{
			filename: '',
			description: '',
			file: null,
			thumbnail: null,
			variables: [],
			variable_inputs: []
		}
	)

	/**
	 * Create Form object to send in fetch request
	 */
	getRequestForm = (submission) => {
		let form = new FormData();
		for (let item in submission) {
			if (submission.hasOwnProperty[item]) {
				switch (item) {
					case 'thumbnail':
						form.append(
							item,
							submission[item],
							'thumbnail.jpeg'
						);
						break;
					case 'file':
						form.append(
							item,
							submission[item],
							submission['filename']
						);
						break;
					case 'filename':
						break;
					default:
						form.append(item, submission[item]);
				}
			}
		}

		return form;
	}

	handleSubmit = () => {
		if (this.isValidFile) {
			const submission = {
				'filename': this.state.filename,
				'file': this.state.file,
				'description': this.state.description,
				'thumbnail': this.state.thumbnail,
				'size': this.state.size,
				'variables': this.state.variables
			}
			const targetURI = this.props.type === 'static' ?
				'uploadStaticFile' : 'uploadCustomFile';

			// POST multipart form / data
			fetch(window.location.host + '/api/' + targetURI,
			{
				method: 'post',
				credentials: 'omit',
				body: this.getRequestForm(submission)
			})
			.then(
				response => (
					true
				)
			)
			.catch(error => (
				alert('Oops, there has been an error uploading the' +
				' file:\n' + error)
			))
			// return true if successful
		}

		return false;
	}

	/**
	 * Event Handler for saving an image and its info to state
	 * 
	 * @param event Image file
	 */
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

	/**
	 * Event Handler for saving a file and its info to state
	 * 
	 * @param event File
	 */
	handleFileChange = (event) => {
		// Store filename and file size (in MB)
		const filename = event.target.files[0].name;
		const size = event.target.files[0].size / 1024*1024;
		let file = new FileReader();

		event.persist();
		file.readAsDataURL(event.target.files[0]);
		file.onload = (fileLoaded) => {
			// When the user's image is loaded, put it in state and display it
			this.setState({
				[event.target.name]: fileLoaded.target.result,
				filename,
				size
			});
			console.log(this.state.size);
		}
	}

	/**
	 * Event Handler for two-way binding an input with state
	 * 
	 * @param event Input changes from the user
	 */
	handleChange = (event) => (
		this.setState({[event.target.name]: event.target.value})
	);

	/**
	 * Reset all state values
	 * 
	 * Since the input and state are two-way bound this will reset
	 * the form as well
	 */
	clearFields = () => {
		this.setState(this.getInitialState());
	}

	/**
	 * Generate default form inputs
	 *
	 * @return {[Array]} An array of Form.Field elements
	 */
	generateDefaultForms = () => (
		// Generate the default inputs; name, description, thumbnail
		[
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
						// required
					/>
				</label>
			</Form.Field>,
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
			</Form.Field>,
			<Form.Field key='FileName'>
				<label>Filename</label>
				<Input
					onChange={this.handleChange}
					placeholder='Enter a filename'
					value={this.state.filename}
					name='filename'
					// required
				/>
			</Form.Field>,
			<Form.Field key='Description'>
				<label>File Description</label>
				<Input
					onChange={this.handleChange}
					placeholder='Enter a file description'
					value={this.state.description}
					name='description' 
				/>
			</Form.Field>
			]
	)

	/**
	 * Generate a button to allow adding custom inputs to the form
	 */
	generateCustomForms = () => (
		this.props.type === 'custom' ?
		[
		<Form.Field key='custom'>
			<Button label='Add Variable' icon='plus' labelPosition='left' onClick={this.addVariableInput}/>
		</Form.Field>,
		<Divider key='divider' />,
		...this.state.variable_inputs
		] : []
	)

	/**
	 * Verify that the state is clean
	 * 
	 * TODO: There's a better way to do this I am sure
	 */
	isStateClean = () => {
		// Check if there are custom variables set
		if (this.state.variable_inputs.length || this.state.variables.length) return false

		// Check individual properties for differences
		for (let p in this.state) {
			if (this.getInitialState().hasOwnProperty(p)) {
				if (this.state[p] !== this.getInitialState()[p]) {
					return false;
				}
			} else {
				return false;
			}
		}

		return true;
	}

	/**
	 * Simple check to determine file has right extension
	 */
	isValidFile = () => {
		const file = this.state;

		return (
			(file.filename.includes('.stl') || file.filename.includes('.gcode')) &&
			file.file != null &&
			this.props.type === 'static'
		)
	}

	/**
	 * Generate a variable input field
	 */
	addVariableInput = () => {
		let inputs = this.state.variable_inputs;
		const variable_types = [
			{
				text: 'Dimension',
				value: 'dimension'
			},
			{
				text: 'Toggle',
				value: 'toggle'
			}
		]
		const variable = (
			<div key={inputs.length}>
				<Form.Group widths='4'>
					<Form.Field>
						<label>Variable Type</label>
						<Dropdown fluid selection placeholder="Choose type" options={variable_types}/>
					</Form.Field>
					<Form.Field>
						<label>Parameter name</label>
						<Input placeholder='OpenScad variable name' />
					</Form.Field>
					<Form.Field>
						<label>Minimum Value</label>
						<Input label='mm' labelPosition='right' />
					</Form.Field>
					<Form.Field>
						<label>Maximum Value</label>
						<Input label='mm' labelPosition='right' />
					</Form.Field>
				</Form.Group>
				<Form.Field>
					<label>Description</label>
					<Input />
				</Form.Field>
				<Divider />
			</div>
		);

		inputs.push(variable);
		this.setState({variable_inputs: inputs});
	}

	render() {
		/* File upload popup                                                     */
		/* Note: the prop, 'trigger', is the element that will invoke this popup */
		/* So yes, you wrap the calling button in this element...                */
		return(
			<Modal trigger={this.props.trigger} onClose={this.clearFields} closeIcon>
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
						{this.generateDefaultForms().concat(this.generateCustomForms())}
						<FileSubmit
							disableUpload={!this.isValidFile()}
							clearFields={this.clearFields}
							cleanState={this.isStateClean}
							submission={this.handleSubmit}/>
					</Form>
				</Modal.Content>
			</Modal>
		)
	}
}

export default FileModal;
