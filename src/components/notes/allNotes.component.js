import React, { Component } from 'react';
import { connect } from 'react-redux';
import isNull from 'lodash/isNull';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import { Card, Button } from 'react-bootstrap';
import Map from './locationNotes/locationNotes.component';
import { noteActions } from '../../actions';

class AllNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: get(props, 'notes', [])
    }
  }
  removeNote = (index) => {
    this.props.removeNote(index);
  };

  updateFilter = (val) => {
    const { notes } = this.props;
    const filterNotes = notes.filter((note) => note.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
    this.setState({ notes: filterNotes });
  }

  render() {
    const { notes } = this.state;
    const notesItems = notes && notes.map((note, index) => {
      if (!isNull(note) && note.status === 'active'){
        return (
          <Card style={{ width: '18rem' }} key={index}>
            <Card.Body>
              <div className="card-icon"><i class="fa fa-trash" aria-hidden="true" onClick={() => this.removeNote(index)}></i></div>
                <Card.Title>{note.title}</Card.Title>
                <Card.Text>
                  {note.category === 'image' ? <img className="img-note" src={note.content} /> : note.category === 'location' ? <Map location={note} zoomLevel={17}/> : note.content}
                </Card.Text>
              </Card.Body>
            </Card>
        )
      }
    });

    return (
      <React.Fragment>
        <h3>All Notes</h3>
        <div className="filter-note">
          {!isEmpty(this.props.notes) ? <input
            type='text'
            onChange={(e) => this.updateFilter(e.target.value)}
            placeholder='search by title...'
            className='form-control'
          /> : null}
				</div>
        <div className="card-list">{notesItems}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes.notes,
  };
};

const mapDispatchToProps = {
  removeNote: noteActions.removeNote,
  updateFilter: noteActions.updateFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(AllNotes);
