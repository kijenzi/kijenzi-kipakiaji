// Import components
import React from 'react';
import { Image, Modal, Header, Input, Form, Button} from 'semantic-ui-react';
import NotImplemented from './notImplemented';

class FileModal extends React.Component {
	generateForms = (item) => {
		let inputs = [];
		for (let variable in item.variables) {
			let v = item.variables[variable];
			inputs.push(
				<Form.Field key={variable}>
					<label>{v.name}</label>
					<Input
						placeholder={v.Description}
						label={{basic:true, content:v.unit}}
						labelPosition='right'
					/>
				</Form.Field>
			);
		}

		if (inputs.length) {
			inputs.push(
				<Form.Field className='ui two buttons' key={inputs.length}>
					{NotImplemented(<Button basic color='green'>Download</Button>)}
					{NotImplemented(<Button basic color='red'>Reset Customization</Button>)}
				</Form.Field>
			)
		} else {
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