import React, { Component } from 'react';
import { Form, Row } from 'react-bootstrap';
import TextNotesForm from './textNotes/textNotesForm.component';
import ImageNotesForm from './imageNotes/imageNotesForm.component';
import LocationNotesForm from './locationNotes/locationNotesForm.component';
import AllNotes from './allNotes.component';

export default class Notes extends Component {
  constructor(props){
    super(props)
    this.state = {
      catetory: ''
    };
  }
  selectCategory = (event) => {
    this.setState({ category: event.target.value });
  }
  loadNotesForm = () => {
    switch (this.state.category) {
      case 'textnotes':
        return <TextNotesForm />
        break;
      case 'imagenotes':
        return <ImageNotesForm />
        break;
      case 'locationnotes':
        return <LocationNotesForm />
        break;
      default:

    }
  }

  render() {
    return (
      <React.Fragment>
        <h3>Add a Note</h3>
            <Form as={Row} className="mx-auto">
              <Form.Group controlId="formGridState">
                  <Form.Label>Category</Form.Label>
                  <Form.Control as="select" defaultValue="Choose Category" onChange={this.selectCategory}>
                    <option value="">Choose Category</option>
                    <option value="textnotes">Text Notes</option>
                    <option value="imagenotes">Image Notes</option>
                    <option value="locationnotes">Location Notes</option>
                  </Form.Control>
              </Form.Group>
            </Form>
        {this.loadNotesForm()}
        <AllNotes />
      </React.Fragment>
    );
  }
}
