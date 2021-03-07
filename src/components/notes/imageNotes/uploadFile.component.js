import React, { Component } from "react";

export default class UploadFile extends Component {
  constructor(props) {
    super(props);
  }

  handleLoadLocalFile = (event) => {
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.files[0];

    if (file) {
      reader.onloadend = () =>
        this.props.onFileLoaded(reader.result);
        reader.readAsDataURL(file);
    } else {
      alert('File uploaded is not valid.');
    }
  }

  render() {
    return (
      <div>
        <p>Click the button to load a local file.</p>
        <label
          className="upload-file"
          htmlFor="my-upload-btn"
        >
          <input
            id="my-upload-btn"
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={this.handleLoadLocalFile}
          />
        </label>
      </div>
    );
  }
}
