import React from "react";
import ReactDOM from "react-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class ModalOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      activetab: 1
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  }

  onExit() {
    console.log("on exit");
  }

  render() {
    const { className, children } = this.props;
    const { showModal } = this.state;
    return (
      <div>
        {React.cloneElement(React.Children.only(children), {
          onClick: this.toggle
        })}
        <Modal
          isOpen={showModal}
          onExit={this.onExit}
          toggle={this.toggle}
          className={className}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          {this.state.activetab === 1 && (
            <ModalBody>
              <div> This is my first div</div>
              <div> This is my second div</div>
            </ModalBody>
          )}
          {this.state.activetab === 2 && (
            <div>
              <ModalBody>
                <div> This is my firs</div>
                <div> This is my sec</div>
              </ModalBody>
            </div>
          )}
          <ModalFooter>
            {this.state.activetab === 1 && (
              <Button
                color="secondary"
                onClick={() => this.setState({ activetab: 2 })}
              >
                Next
              </Button>
            )}

            {this.state.activetab === 1 && (
              <Button
                color="secondary"
                onClick={() => this.setState({ activetab: 2 })}
              >
                Next
              </Button>
            )}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ModalOverlay>
    <button type="button">Test</button>
  </ModalOverlay>,
  rootElement
);
