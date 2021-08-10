import { Modal } from "bootstrap";
import React from "react";

class SelectedBeast extends React.Component {
  render() {
    return (
      <div>
        <Modal>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.props.img} />
            <p>{this.props.description}</p>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default SelectedBeast;
