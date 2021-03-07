import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { Form, Button } from 'react-bootstrap';
import { noteActions } from '../../../actions';

class TextNotesForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
      category: 'text'
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmission = (e) => {
    e.preventDefault();

    let { title, content, category } = this.state;
    if (isEmpty(title) || isEmpty(content)) {
      return false;
    }
    this.props.addNote(category, title, content);

    this.setState({ title: '', content: '' });
  };

  render() {
    return (
        <Form onSubmit={this.handleSubmission} className="notes-form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            required
            placeholder="Title" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Content</Form.Label>
            <Form.Control
            as="textarea"
            rows={3}
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
            required
            placeholder="enter your content" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Note
          </Button>
        </Form>
    );
  }
}

export default connect(null, {
  addNote: noteActions.addNote,
})(TextNotesForm);
