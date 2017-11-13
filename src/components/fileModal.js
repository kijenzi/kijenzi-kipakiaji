// Import components
import React from 'react';
import { Image, Modal, Header, Input, Form, Button, Checkbox} from 'semantic-ui-react';
import NotImplemented from './notImplemented';

/*
	A FileModal is a popup that displays information about a downloadable item.
	Expected props:
		trigger: a UI element (jsx or otherwise) that when clicked, will make this
			modal 'pop-up' or appear.
		item: a downloadable item object with properties that describes the file
			required properties:
			{
				name: (string) The name of the file,
				size: (string) The filesize, with units preferably,
				thumb_URI: (string) The location of the file's image,
				file_URI: (string) Link to the un-modified file location
				variables (optional): (array[object]) configurable parameters that will
					 be converted into a Form input.
					 Each object should contain the following properties:
					 {
						name: (string) The variable's name / input label,
						description: (string) Description of the variable,
						unit: (string) The unit of the variable's value,
						type: (string) 'number' or 'checkbox',
						value: (type) the default / current value
					 }
			}
 */
class FileModal extends React.Component {

	/**
	 * Generate form inputs based on an item's parameterized variables
	 *
	 * @param  {[Object]} item An item that should have forms generated for it
	 * @return {[Array]} An array of Form.Field elements
	 */
	generateForms = (item) => {
		let inputs = [];

		// Parse item's parameterized variables if it has any
		for (let variable in item.variables) {
			let v = item.variables[variable];

			// Create the Form.Field element for a particular variable
			// Render a checkbox if specified, otherwise render a number input
			inputs.push(
				<Form.Field key={variable}>
					<label>{v.name}</label>
					{
						v.type === 'checkbox' ?
							<Checkbox
								label={v.description}
							/>
						:
							<Input
								placeholder={v.description}
								label={{basic:true, content:v.unit}}
								labelPosition='right'
								type='number'
							/>
					}
				</Form.Field>
			);
		}

		// Add download and reset buttons if customization options are present
		if (inputs.length) {
			inputs.push(
				<Form.Field className='ui two buttons' key={inputs.length}>
					{NotImplemented(<Button basic color='green'>Download</Button>)}
					{NotImplemented(<Button basic color='red'>Reset Customization</Button>)}
				</Form.Field>
			)
		} else {
			// If there are not customization options, add text saying so and
			// disable customization options
			inputs.push(
				<Form.Field key={inputs.length}>
					<label>No customization options available</label>
				</Form.Field>
			)
			inputs.push(
				<Form.Field className='ui two buttons' key={inputs.length}>
					{NotImplemented(<Button basic color='green'>Download</Button>)}
					{NotImplemented(<Button basic disabled color='red'>Reset Customization</Button>)}
				</Form.Field>
			)
		}

		return inputs;
	}

	render() {
		/* File information popup                                                */
		/* Note: the prop, 'trigger', is the element that will invoke this popup */
		/* So yes, you wrap the calling button in this element...                */
		return(
			<Modal trigger={this.props.trigger} closeIcon>
				<Modal.Header>File Information</Modal.Header>
				<Modal.Content>
					<Header as='h2'>{this.props.item.name}</Header>
				</Modal.Content>
				<Modal.Content image>
					<Image centered size='medium' src={this.props.item.thumb_URI}/>
				</Modal.Content>
				<Modal.Content>
					<Modal.Description>
						{this.props.item.Description || 'No Description'}
					</Modal.Description>
				</Modal.Content>
				<Modal.Content>
					<Header as='h3'>Customize file</Header>
					<Form>
						{this.generateForms(this.props.item)}
					</Form>
				</Modal.Content>
			</Modal>
		)
	}
}

export default FileModal;