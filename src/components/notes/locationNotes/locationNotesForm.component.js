import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import isEmpty from 'lodash/isEmpty';
import { noteActions } from '../../../actions';

class LocationNotesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      latitude: '',
      longitude: '',
      address: '',
      category: 'location'
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmission = (e) => {
    e.preventDefault();
    let { title, content, latitude, longitude, address, category } = this.state;
    if (isEmpty(title) || isEmpty(latitude) || isEmpty(longitude) || isEmpty(address)) {
      return false;
    }
    this.props.addNote(category, title, content, latitude, longitude, address);
    this.setState({ title: '', content: '', latitude: '', longitude: '', address: '' });
  };
  render () {
    const { title, latitude, longitude, address } = this.state;
    return (
				<Form onSubmit={this.handleSubmission} className="notes-form">
					<Form.Group controlId='formBasicEmail'>
						<Form.Label>Title</Form.Label>
						<Form.Control
							type='text'
							name='title'
							value={title}
							onChange={this.handleChange}
							required
							placeholder='Title'
						/>
					</Form.Group>
					<Form.Group controlId='formBasicEmail'>
						<Form.Label>Latitude</Form.Label>
						<Form.Control
							type='text'
							name='latitude'
							value={latitude}
							onChange={this.handleChange}
							required
							placeholder='Latitude'
						/>
					</Form.Group>
					<Form.Group controlId='formBasicEmail'>
						<Form.Label>Longitude </Form.Label>
						<Form.Control
							type='text'
							name='longitude'
							value={longitude}
							onChange={this.handleChange}
							required
							placeholder='Longitude'
						/>
					</Form.Group>
					<Form.Group controlId='formBasicPassword'>
						<Form.Label>Address</Form.Label>
						<Form.Control
							as='textarea'
							rows={3}
							name='address'
							value={address}
							onChange={this.handleChange}
							required
							placeholder='Enter Your Address'
						/>
					</Form.Group>
					<Button variant='primary' type='submit'>
						Add Note
					</Button>
				</Form>
  	)
  }
}

export default connect(null, {
  addNote: noteActions.addNote,
})(LocationNotesForm);
